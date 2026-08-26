/**
 * Mock NFC check-in service.
 *
 * This module simulates the small NFC tags that will be mounted on each
 * shower slot. It exposes a tiny event API so CheckInScreen can be written
 * against a real native module later without changing screen logic.
 */

const TAG_PREFIX = 'shower-slot';
const listeners = new Set();

let scanning = false;
let scanTimer = null;
let activeSlotId = null;

function emit(event, payload = {}) {
  listeners.forEach((listener) => {
    try {
      listener(event, payload);
    } catch {
      // Keep the mock service resilient to screen-level listener errors.
    }
  });
}

function normalizeSlotId(slotId) {
  return String(slotId || '')
    .trim()
    .replace(/[^a-z0-9-]/gi, '-')
    .toLowerCase();
}

function createTag(slotId, scannedAt = Date.now()) {
  const id = normalizeSlotId(slotId);

  return {
    tagId: `${TAG_PREFIX}-${id}`,
    slotId: id,
    scannedAt,
    source: 'mock-nfc',
  };
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function subscribe(listener) {
  listeners.add(listener);

  return () => listeners.delete(listener);
}

export function isScanning() {
  return scanning;
}

export function startScan({ slotId, delayMs = 1200, autoDiscover = true } = {}) {
  if (scanning) return;

  scanning = true;
  activeSlotId = normalizeSlotId(slotId);

  emit('scanning', {
    scanning: true,
    slotId: activeSlotId,
  });

  if (autoDiscover && activeSlotId) {
    scanTimer = setTimeout(() => {
      emit('tag', createTag(activeSlotId));
    }, delayMs);
  }
}

export function stopScan() {
  if (!scanning) return;

  scanning = false;
  activeSlotId = null;

  if (scanTimer) {
    clearTimeout(scanTimer);
    scanTimer = null;
  }

  emit('scanning', {
    scanning: false,
  });
}

export function simulateTap(slotId) {
  const tag = createTag(slotId);

  emit('tag', tag);

  return Promise.resolve(tag);
}

export async function checkIn({ slotId, userId, checkedInAt } = {}) {
  const id = normalizeSlotId(slotId);

  if (!id) {
    throw new Error('slotId is required to check in');
  }

  await delay(350);

  return {
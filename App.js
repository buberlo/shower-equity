import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { AppProvider, useApp } from './src/context/AppContext';
import { colors, spacing } from './src/theme';
import BottomNav from './src/components/BottomNav';
import HomeScreen from './src/screens/HomeScreen';
import AuctionScreen from './src/screens/AuctionScreen';
import DeedScreen from './src/screens/DeedScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import CheckInScreen from './src/screens/CheckInScreen';

const SCREENS = {
  home: HomeScreen,
  auction: AuctionScreen,
  deed: DeedScreen,
  leaderboard: LeaderboardScreen,
  checkIn: CheckInScreen,
  'check-in': CheckInScreen,
};

const ActiveScreen = () => {
  const { activeScreen, selectedSlotId } = useApp();
  const Screen = SCREENS[activeScreen] || HomeScreen;

  return <Screen selectedSlotId={selectedSlotId} />;
};

const App = () => (
  <AppProvider>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <ActiveScreen />
      </View>
      <BottomNav />
    </SafeAreaView>
  </AppProvider>
);

const appBackground = colors.background || colors.surface || '#FFFFFF';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: appBackground,
  },
  content: {
    flex: 1,
    padding: spacing.md,
  },
});

export default App;
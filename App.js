import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import UserPage from './src/client/user/UserPage';
import DiscoverPage from './src/client/discover/DiscoverPage';
import Navigation from './src/client/Navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#c7ceea" barStyle="light-content"/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <UserPage />
        {/* <DiscoverPage /> */}
        {/* <Navigation /> */}
      </ScrollView>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

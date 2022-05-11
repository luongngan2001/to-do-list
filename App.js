import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import GlobalStyles from './src/client/GlobalStyles';
import UserPage from './src/client/user/UserPage';
import DiscoverPage from './src/client/discover/DiscoverPage';
import DiscoverByTopicPage from './src/client/discover/DiscoverByTopicPage';
import LoginPage from './src/client/user/LoginPage';
import Navigation from './src/client/Navigation';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={[styles.container, GlobalStyles.AndroidSafeArea]}>
      <StatusBar backgroundColor="#c7ceea" barStyle="light-content"/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* <UserPage /> */}
        {/* <DiscoverPage /> */}
        {/* <DiscoverByTopicPage /> */}
        <LoginPage />
        {/* <Navigation /> */}
      </ScrollView>      
    </SafeAreaView>
    // <NavigationContainer>
    //   <Stack.Navigator>
 
    //     <Stack.Screen name="Home" component={DiscoverPage} />
 
    //     <Stack.Screen name="Second" component={DiscoverByTopicPage} />
 
    //   </Stack.Navigator>
    // </NavigationContainer>
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import GlobalStyles from './src/client/GlobalStyles';
import UserPage from './src/client/user/UserPage';
import DiscoverPage from './src/client/discover/DiscoverPage';
import DiscoverByTopicPage from './src/client/discover/DiscoverByTopicPage';
import LoginPage from './src/client/user/LoginPage';
import GetNewPasswordPage from './src/client/user/GetNewPasswordPage';
import RegisterPage from './src/client/user/RegisterPage';
import DetailPostPage from './src/client/post/DetailPostPage';
import ReviewPage from './src/client/post/ReviewPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <SafeAreaView style={[styles.container, GlobalStyles.AndroidSafeArea]}>
    //   <StatusBar backgroundColor="#c7ceea" barStyle="light-content"/>
    //   <ScrollView
    //     showsVerticalScrollIndicator={false}
    //     showsHorizontalScrollIndicator={false}
    //   >
    //     {/* <UserPage /> */}
    //     {/* <DiscoverPage /> */}
    //     {/* <DiscoverByTopicPage /> */}
    //     <LoginPage />
    //     {/* <GetNewPasswordPage /> */}
    //     {/* <Register /> */}
    //     {/* <DetailPostPage /> */}
    //     {/* <ReviewPage /> */}
    //     {/* <Navigation /> */}
    //   </ScrollView>      
    // </SafeAreaView>
    
    <NavigationContainer>
      <ScrollView contentContainerStyle={{height: "200%"}}>
        <Stack.Navigator
          screenOptions={{
            // headerShown: false,
            showsHorizontalScrollIndicator: false,
            showsVerticalScrollIndicator: false
          }}
        >
            {/* <Stack.Screen name='Login' component={LoginPage} /> */}
            {/* <Stack.Screen name='Discover' component={DiscoverPage} />
            <Stack.Screen name='DiscoverByTopic' component={DiscoverByTopicPage} />
            <Stack.Screen name='Register' component={RegisterPage} />
            <Stack.Screen name='DetailPost' component={DetailPostPage} />
            <Stack.Screen name='Review' component={ReviewPage} /> */}
            <Stack.Screen name="User" component={UserPage} />
        </Stack.Navigator>
      </ScrollView>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { createAppContainer, createStackNavigator } from 'react-navigation';
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import ENV from './env.json';

//eslint-disable-next-line
require("firebase/firestore");

const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);
 
const App = createStackNavigator({
  Login:{screen: LoginScreen},
  Signup:{screen: SignupScreen},
  Home: { screen: MemoListScreen},
  MemoDetail:{screen: MemoDetailScreen},
  MemoEdit:{screen: MemoEditScreen},
  MemoCreate:{screen: MemoCreateScreen},
},{
  defaultNavigationOptions:{
    headerTitle:'Memot',
    headerTintColor:'#fff',
    headerBackTitle:null,
    headerStyle:{
      backgroundColor:'#265366',
    },
    headerTitleStyle:{
      color:'#fff',
    },
  },
});
 
export default createAppContainer(App);
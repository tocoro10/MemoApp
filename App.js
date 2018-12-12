import { createAppContainer, createStackNavigator } from 'react-navigation';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
 
const App = createStackNavigator({
  Home: { screen: MemoListScreen},
  MemoDetail:{screen: MemoDetailScreen},
  MemoEdit:{screen: MemoEditScreen},
  Login:{screen: LoginScreen},
  Signup:{screen: SignupScreen},
},{
  navigationOptions:{
    headerTitle:'Memot',
    headerStyle:{
      backgroundColor:'#265366',
    },
    headerTitleStyle:{
      color:'#fff',
    },
  },
});
 
export default createAppContainer(App);
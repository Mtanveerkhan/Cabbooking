import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screen/login';
import Signup from './screen/Signup'
import Verifica from './screen/Verification'
import App from './App'
import Home from './screen/drawer'
//import Map from './screen/Map'
const AppNavigator = createStackNavigator(
    {
    Login,
    Verifica,
    Signup,
    App,
    Home
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      header: null,
      headerForceInset: { top: 'never', bottom: 'never' },
    },
  },
);
export default createAppContainer(AppNavigator)

import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TosScreen from './screens/TosScreen'
import Intro from './screens/Intro'
import Welcome from './screens/Welcome'
import Login from './screens/Login'
import OnBoarding from './screens/OnBoarding'
import PostOrigin from './screens/PostOrigin'

const RootNavigator = StackNavigator({
    PostOrigin: {
        screen: PostOrigin
    },
    OnBoarding: {
        screen: OnBoarding
    },
    Login: {
        screen: Login
    },
    Welcome: {
        screen: Welcome
    },
    TosScreen: {
        screen: TosScreen,
        navigationOptions: {
          headerTitle: 'Terms and conditions',
        },
    },
    Intro: {
        screen: Intro
    },
});

export default RootNavigator;
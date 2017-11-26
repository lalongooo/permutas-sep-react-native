import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import OnBoardingTermsAndConditions from './screens/OnBoardingTermsAndConditions'
import Intro from './screens/Intro'
import Welcome from './screens/Welcome'
import Login from './screens/Login'
import OnBoarding from './screens/OnBoarding'

const RootNavigator = StackNavigator({
    OnBoarding: {
        screen: OnBoarding
    },
    Login: {
        screen: Login
    },
    Welcome: {
        screen: Welcome
    },
    OnBoardingTermsAndConditions: {
        screen: OnBoardingTermsAndConditions,
        navigationOptions: {
          headerTitle: 'Terms and conditions',
        },
    },
    Intro: {
        screen: Intro
    },
});

export default RootNavigator;
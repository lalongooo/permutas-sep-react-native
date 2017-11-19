import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import OnBoardingTermsAndConditions from './src/OnBoardingTermsAndConditions'
import Intro from './src/Intro'

const RootNavigator = StackNavigator({
    OnBoardingTermsAndConditions: {
        screen: OnBoardingTermsAndConditions,
        navigationOptions: {
          headerTitle: 'Terms and conditions',
        },
    },
    Intro: {
        screen: Intro,
        navigationOptions: {
          headerTitle: 'App Intro',
        },
    },
});

export default RootNavigator;
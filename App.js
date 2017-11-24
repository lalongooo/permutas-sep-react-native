import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import OnBoardingTermsAndConditions from './screens/OnBoardingTermsAndConditions'
import Intro from './screens/Intro'

const RootNavigator = StackNavigator({
    Intro: {
        screen: Intro
    },
    OnBoardingTermsAndConditions: {
        screen: OnBoardingTermsAndConditions,
        navigationOptions: {
          headerTitle: 'Terms and conditions',
        },
    },
});

export default RootNavigator;
import { createBottomTabNavigator, createAppContainer, } from 'react-navigation';
import WelcomePage from '../../screens/welcome/welcome';
import ChatPage from '../../screens/chat/chat';
import ConfigPage from '../../screens/config/config';

const RouteConfig = {
    WELCOME: {
        screen: WelcomePage,
        navigationOptions: ({ navigation }) => ({
            title: `Demo's Welcome`
        })
    },
    CHAT: {
        screen: ChatPage,
        navigationOptions: ({ navigation }) => ({
            title: `Demo's Chat`
        })
    },
    CONFIG: {
        screen: ConfigPage,
        navigationOptions: ({ navigation }) => ({
            title: `Demo's config`
        })
    }
};

const BottomBar = createBottomTabNavigator(
    RouteConfig, {}
);
export default AppContainer = createAppContainer(BottomBar);
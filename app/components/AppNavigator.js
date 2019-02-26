import { createStackNavigator, createAppContainer } from 'react-navigation';
import Gallery from './Gallery';
import ImagePage from './ImagePage';

const MainNavigator = createStackNavigator({
    Gallery: { screen: Gallery },
    ImagePage: { screen: ImagePage },
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
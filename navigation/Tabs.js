import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import InitialScreen from '../screens/InitialScreen';

const Tab= createBottomTabNavigator();
const Tabs = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={InitialScreen} />
            <Tab.Screen name="Crop" component={HomeScreen} />
        
        </Tab.Navigator>
    );

}
export default Tabs;
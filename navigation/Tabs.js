import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import InitialScreen from '../screens/InitialScreen';

const Tab= createBottomTabNavigator();
const Tabs = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Crop" component={InitialScreen} />
        
        </Tab.Navigator>
    );

}
export default Tabs;
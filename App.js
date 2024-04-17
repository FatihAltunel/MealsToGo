import { React} from 'react'
import { Text } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { RestaurantsScreen } from './src/features/restaurans/screens/Restaurants.screen';
import {  useFonts as useOswald , Oswald_400Regular } from '@expo-google-fonts/oswald';
import {  useFonts as useLato , Lato_400Regular } from '@expo-google-fonts/lato';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });


  if(!oswaldLoaded || !latoLoaded){
    return null;
  }

  const Tab = createBottomTabNavigator();
  const Map = () => <Text>Map</Text>
  const Settings = () => <Text>Settings</Text>

  return (
    <>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
      <StatusBar style="auto"/>
    </>
  );
}



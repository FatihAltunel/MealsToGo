import { React} from 'react'
import { StatusBar } from 'react-native';
import { RestaurantsScreen } from './src/features/restaurans/screens/Restaurants.screen';


export default function App() {
  return (
    <>
      <RestaurantsScreen/>
      <StatusBar style="auto"/>
    </>
  );
}



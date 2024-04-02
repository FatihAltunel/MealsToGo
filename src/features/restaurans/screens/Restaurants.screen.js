import {React, useState} from "react";
import { SafeAreaView, View, Text, StyleSheet} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfo } from "../components/RestaurantsInfo.component";



export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.searchfield}>
            <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            />
        </View>

        <View style={styles.listfield}>
            <RestaurantsInfo/>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    searchfield:{
      padding:16,
      backgroundColor:'white',
    },
    listfield:{
      flex:1,
      padding:16,
      backgroundColor:'blue',
    },
  })
import React from "react";
import { Text } from "react-native-paper";

export const RestaurantsInfo = ({ Restaurants = {} }) => {
    const {
        name = "Some Restaurants",
        icon,
        photos,
        address,
        isOpen,
        rating,
        isTemporarilyClosed,
    } = Restaurants;
    return(
        <Text>{name}</Text>
    );

}
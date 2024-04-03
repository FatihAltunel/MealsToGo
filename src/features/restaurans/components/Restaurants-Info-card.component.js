import React from "react";
import { Text, Card } from "react-native-paper";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../infrastructure/theme/index";

    const RestaurantCard = styled(Card)` 
    background-color: ${(props)=> props.theme.colors.bg.primary};
    `;

    const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props)=> props.theme.colors.bg.primary};
    `;

    const RestaurantCardTitle = styled(Text)`
    font-weight:${(props)=>props.theme.fontWeights.bold};
    padding: ${(props) => props.theme.sizes[2]};
    font-size:${(props) => props.theme.fontSizes.title};
    `;
    
export const RestaurantsInfoCard = ({ Restaurants = {} }) => {
    const {
        name = "Java Café",
        icon,
        photos,
        address,
        isOpen,
        rating,
        isTemporarilyClosed,
    } = Restaurants;
    return(
        <ThemeProvider theme={theme}>
            <RestaurantCard elevation={5} >
                <RestaurantCardCover key={name} source={{uri:"https://meade.armymwr.com/application/files/4016/5340/6951/meade_javaCafe_web_750x421.jpg"}} />
                <RestaurantCardTitle>{name}</RestaurantCardTitle>
            </RestaurantCard>
        </ThemeProvider>
    );
    
}

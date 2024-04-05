import React from "react";
import { Text } from "react-native-paper";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../infrastructure/theme/index";
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { 
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Stars,
    Rating,
    Section,
    SectionEnd,
    RestaurantCardAddress,
    RestaurantCardTitle
} from "./Restaurants-info-card.styles";

    
export const RestaurantsInfoCard = ({ Restaurants = {} }) => {
    const {
        name = "Java Café",
        icon,
        photos,
        address = "Sakarya/Serdivan",
        isOpenNow = true,
        rating= 2,
        isClosedTemporarily=false,
    } = Restaurants;


    const ratingArray = Array.from(new Array(Math.floor(rating)))
    return(
        <ThemeProvider theme={theme}>
            <RestaurantCard elevation={5} >
                <RestaurantCardCover key={name} source={{uri:"https://meade.armymwr.com/application/files/4016/5340/6951/meade_javaCafe_web_750x421.jpg"}} />
                <Info>
                    <RestaurantCardTitle>{name}</RestaurantCardTitle>
                    <Section>
                        <Rating>
                            {ratingArray.map((_,index) => (
                                <Stars xml={star} height={20} width={20} key={index}/>
                                ))}
                        </Rating>
                        <SectionEnd>
                        {isClosedTemporarily ? (
                            <Text>CLOSED TEMPORARILY</Text>
                        ) : isOpenNow ? (
                            <SvgXml xml={open} height={30} width={30}/>
                        ) : null}           
                        </SectionEnd>
                    </Section>
                    <RestaurantCardAddress>{address}</RestaurantCardAddress>
                </Info>
            </RestaurantCard>
        </ThemeProvider>
    );
    
}

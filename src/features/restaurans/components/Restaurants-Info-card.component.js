import React from "react";
import { Text, Card, View } from "react-native-paper";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../infrastructure/theme/index";
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

    const RestaurantCard = styled(Card)` 
    background-color: ${(props)=> props.theme.colors.bg.primary};
    `;

    const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[2]};
    background-color: ${(props)=> props.theme.colors.bg.primary};
    `;

    const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
    `;

    const Stars = styled(SvgXml)``;

    const Rating = styled.View`
    flex-direction:row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[1]};
    `;

    const Section = styled.View`
    flex-direction:row;
    align-items: center;
    `;

    const SectionEnd = styled.View`
    flex-direction:row;
    flex:1;
    justify-content: flex-end;
    `;

    const Open = styled(SvgXml)`
    flex-direction:row;
    `;

    const RestaurantCardAddress = styled(Text)`
    font-family: ${(props)=>props.theme.fonts.body};
    font-size:${(props) => props.theme.fontSizes.caption};
    color: ${(props)=>props.theme.colors.ui.primary};
    `;

    const RestaurantCardTitle = styled(Text)`
    font-family: ${(props)=>props.theme.fonts.heading};
    font-size:${(props) => props.theme.fontSizes.body};
    color: ${(props)=>props.theme.colors.ui.primary};
    `;
    
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

import styled from "styled-components";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Text } from "react-native-paper";


    
    export const RestaurantCard = styled(Card)` 
    background-color: ${(props)=> props.theme.colors.bg.primary};
    margin-bottom:10px;
    border-radius:5px;
    `;
    
    export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[2]};
    background-color: ${(props)=> props.theme.colors.bg.primary};
    border-radius:5px;
    `;
    
    export const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
    `;
    
    export const Stars = styled(SvgXml)``;
    
    export const Rating = styled.View`
    flex-direction:row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[1]};
    `;
    
    export const Section = styled.View`
    flex-direction:row;
    align-items: center;
    `;

    export const SectionEnd = styled.View`
    flex-direction:row;
    flex:1;
    justify-content: flex-end;
    `;
    
    export const RestaurantCardAddress = styled(Text)`
    font-family: ${(props)=>props.theme.fonts.body};
    font-size:${(props) => props.theme.fontSizes.caption};
    color: ${(props)=>props.theme.colors.ui.primary};
    `;
    
    export const RestaurantCardTitle = styled(Text)`
    font-family: ${(props)=>props.theme.fonts.heading};
    font-size:${(props) => props.theme.fontSizes.body};
    color: ${(props)=>props.theme.colors.ui.primary};
    `;
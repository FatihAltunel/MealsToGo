import React, { useState } from "react";
import { SafeAreaView, View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/Restaurants-Info-card.component";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../infrastructure/theme/index";


    const SafeArea = styled(SafeAreaView)`
    flex:1;
    `;

    const SearchContainer = styled(View)`
    padding: ${(props)=> props.theme.sizes[1]};
    background-color: ${(props)=> props.theme.colors.bg.primary};
    `;

    const RestauranListContainer = styled(View)`
    flex:1;
    padding: ${(props)=> props.theme.sizes[1]};
    background-color: ${(props)=> props.theme.colors.ui.tertiary};
    `;

    const RestauranList = styled(FlatList).attrs({
    contentContainerStyle: {padding:8}
    })`
    `

export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return(
        <ThemeProvider theme={theme}>
            <SafeArea>
                <SearchContainer>
                    <Searchbar
                    mode="view"
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    elevation={2}
                    />
                </SearchContainer>
                <RestauranListContainer>
                    <RestauranList
                    data={[{name:1},{name:2}, {name:3}]}
                    renderItem={() => <RestaurantsInfoCard/>}
                    keyExtractor={(item)=>item.name}
                    />
                </RestauranListContainer>
            </SafeArea>
        </ThemeProvider>
    );
}
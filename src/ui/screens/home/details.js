import React, { useEffect, useState } from 'react';
import store from 'react-native-simple-store';
import { FlatList, TouchableOpacity, Alert } from 'react-native'
import { BaseComponent, CardDetailComponent } from 'components'

export default function DetailScreen(props) {

    async function addFavorite(item) {
        try {
            store.push("favorites", item);
            Alert.alert('Sucesso!', 'salvo em sua lista de favoritos!')
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <BaseComponent
                headerDisplay={false}
                goback={true}
                goBackTransparent={true}
                navigation={props.navigation}
            >
                <CardDetailComponent
                    favorite={addFavorite}
                    data={props.navigation.state.params}
                />
            </BaseComponent>
        </>
    )
}
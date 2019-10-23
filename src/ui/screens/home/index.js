import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native'
import store from 'react-native-simple-store';
import { BaseComponent, CardComponent } from 'components'

export default function IndexScreen(props) {
    const { navigation } = props
    const [listsArray, setList] = useState([]);

    useEffect(async () => {
        store.get("favorites")
            .then(
                res => setList(res)
            );
    }, [])

    function renderItem(item) {
        return (
            <CardComponent item={item} navigation={navigation} />
        )
    }

    return listsArray ? (
        <>
            <BaseComponent
                navigation={navigation}>
                <FlatList
                    data={listsArray}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={item => item.id}
                />
            </BaseComponent>
        </>
    ) : (
            <>
                <BaseComponent />
            </>
        )
}
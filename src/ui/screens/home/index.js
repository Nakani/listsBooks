import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native'
import { BaseComponent, CardComponent } from 'components'
import { useSelector, useDispatch } from 'react-redux'
import { getLists } from 'reduxs'

export default function IndexScreen(props) {
    const { navigation } = props
    const [listsArray, setList] = useState([]);
    const response = useSelector(state => state)
    const dispatch = useDispatch()
    const { lists } = response.listReducer

    useEffect(() => {
        getLists(dispatch)
    }, [])

    useEffect(() => {
        if (lists.totalItems > 0) {
            setList(lists.items)
        }
    }, [lists.totalItems])

    function renderItem(item) {

        return (
            <CardComponent item={item} navigation={navigation} />
        )
    }

    return (
        <>
            <BaseComponent>
                <FlatList
                    data={listsArray}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={item => item.id}
                />
            </BaseComponent>
        </>
    )
}
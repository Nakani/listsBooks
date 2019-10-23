import React, { useEffect, useState } from 'react';
import {
    FlatList,
    ActivityIndicator,
    Text,
    View,
} from 'react-native'
import { BaseComponent, SearchComponent, CardComponent } from 'components'
import { useSelector, useDispatch } from 'react-redux'
import { getLists } from 'reduxs'
import { Styles } from '../../components/header/styles/header.styles';

export default function SearchScreen(props) {
    const { navigation } = props
    const [listsArray, setList] = useState([]);
    const [loading, setLoad] = useState([]);
    const response = useSelector(state => state)
    const dispatch = useDispatch()
    const { lists, loaded } = response.listReducer

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
            <CardComponent item={item.volumeInfo} navigation={navigation} />
        )
    }

    function InitSearch(search) {
        getLists(dispatch, search.toLowerCase())
    }

    return (
        <>
            <BaseComponent>
                <SearchComponent search={InitSearch} />
                <FlatList
                    data={listsArray}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={item => item.id}
                />
            </BaseComponent>
        </>
    )
}
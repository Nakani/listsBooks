import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native'
import { Item, Input, Icon } from 'native-base';
import { Styles } from './search.style'

export function SearchComponent(props) {
    const [value, onChangeText] = useState('digite sua pesquisa');

    return (
        <Item style={Styles.container}>
            <Input
                placeholder='digite sua pesquisa'
                onChangeText={text => onChangeText(text)}
                style={Styles.inputText}

            />
            <TouchableOpacity
                onPress={() => props.search(value)}
            >
                <Icon style={Styles.icon} active name='search' />
            </TouchableOpacity>
        </Item>
    )
}
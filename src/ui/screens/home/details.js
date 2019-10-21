import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native'
import { BaseComponent, CardDetailComponent } from 'components'
import { useSelector, useDispatch } from 'react-redux'
import { getLists } from 'reduxs'

export default function DetailScreen(props) {

    return (
        <>
            <BaseComponent>
                <CardDetailComponent data={props.navigation.state.params} />
            </BaseComponent>
        </>
    )
}
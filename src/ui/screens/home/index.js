import React, { useEffect, useState } from 'react';
import { BaseComponent, CardComponent } from 'components'
import { useSelector, useDispatch } from 'react-redux'
import { getLists } from 'reduxs'
export default function Products() {
    const response = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        getLists(dispatch)
    }, [])
    console.log(response)
    return (
        <>
            <BaseComponent
                headerDisplay={true}
            >
                <CardComponent propsData={response.listReducer} />
            </BaseComponent>
        </>
    )
}
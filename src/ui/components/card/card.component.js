import React, { useState, useEffect } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
console.log()
export function CardComponent(propsData) {
    const [lists, setList] = useState([]);
    useEffect(() => {
        setList(propsData.response.lists.items)
    }, [])

    console.log('card', propsData)
    return lists ? (
        <Card>
            {lists.map(list => (
                <CardItem>
                    <Body>
                        <Text>
                        //Your text here
                        </Text>
                    </Body>
                </CardItem>
            ))}
        </Card>
    ) : (
            <Card>
                <CardItem>
                    <Body>
                        <Text>
                        //Aguarde
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        )
}
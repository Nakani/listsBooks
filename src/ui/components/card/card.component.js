import React, { useState, useEffect } from 'react';
import {
    Card,
    CardItem,
    Body,
    Text,
    Left,
    Icon,
    Button,
    Right
} from 'native-base';
import { Image, View } from 'react-native'
import { Styles } from './card.styles';
import moment from "moment"

export function CardComponent(data) {
    const { imageLinks, title, authors, publishedDate } = data.item.volumeInfo
    return (
        <Card style={Styles.card}>
            <CardItem cardBody>
                <Image
                    source={{ uri: imageLinks.thumbnail }}
                    style={Styles.image}
                />
                <Text style={Styles.title}>
                    {title}
                </Text>
            </CardItem>
            <CardItem style={Styles.cardItem}>
                <Left>
                    <Text style={Styles.textFooterLeft}>{authors}</Text>
                </Left>
                <Body />
                <Right>
                    <Text style={Styles.textFooter}>{moment(publishedDate).format("DD-MM-YYYY")}</Text>
                </Right>
            </CardItem>
        </Card>
    )
}
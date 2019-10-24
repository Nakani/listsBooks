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
import { Image, View, TouchableOpacity } from 'react-native'
import { Styles } from './card.styles';
import moment from "moment"

export function CardComponent(data) {
    const { item, navigation } = data
    const { title, authors } = item

    return (
        <Card style={Styles.card}>
            <CardItem
                cardBody
            >
                <Image
                    source={{ uri: data.item.imageLinks.thumbnail }}
                    style={Styles.image}
                />
                <View style={Styles.containerTitle}>
                    <Text style={Styles.title}>
                        {title}
                    </Text>
                </View>
            </CardItem>
            <CardItem style={Styles.cardItem}>
                <Left>
                    <Text style={Styles.textFooterLeft}>{authors}</Text>
                </Left>
                <Right>
                    <Button
                        transparent
                        onPress={() => navigation.navigate('Detail', { item })}
                    >
                        <Text style={Styles.textFooterLeft}>
                            Saiba mais...
                        </Text>
                    </Button>
                </Right>
            </CardItem>
        </Card>
    )
}
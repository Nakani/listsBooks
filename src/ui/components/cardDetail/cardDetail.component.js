import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, Button, Alert } from 'react-native';
import { Icon } from 'native-base'
import { Styles } from './cardDetail.style'

export function CardDetailComponent(props) {
  const { imageLinks, description } = props.data.item.volumeInfo
  console.log('detail', props)

  return (
    <View style={Styles.container}>
      <View style={Styles.content} >
        <Image source={{ uri: imageLinks.thumbnail }} style={Styles.image} />
      </View>
      <View style={Styles.content}>
        <Text style={Styles.description}>{description}</Text>
      </View>
      <View style={Styles.contentFooter} >
        <TouchableOpacity
          onPress={() => props.favorite(props.data.item.volumeInfo)}
        >
          <View style={Styles.buttonContent}>
            <Icon name='heart' style={Styles.icon} type="FontAwesome5" />
            <Text style={Styles.textButton}>Favoritar</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}
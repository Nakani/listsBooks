import React, { PureComponent } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right
} from 'native-base'
import { Styles } from './styles/header.styles'

export class HeaderComponent extends PureComponent {

  renderGoback() {
    const { ...rest } = this.props
    return (
      <Left>
        {
          rest.goback ?
            <Button
              transparent
              onPress={() => rest.navigation.goBack()}
            >
              <Icon
                style={Styles.icon}
                name='angle-left'
                type="FontAwesome5"
              />
            </Button>
            : null
        }
      </Left>
    )
  }

  initSearch() {
    this.props.navigation.navigate('Search')
  }

  render() {
    const { ...rest } = this.props
    return !rest.transparent ? (
      <Header style={Styles.headerContent}>
        {this.renderGoback()}
        <Body>
          <Title
            style={Styles.labelHeader}
          >
            {rest.headerName}
          </Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon
              style={[Styles.icon, { fontSize: 20 }]}
              name='search'
              type="FontAwesome5"
            />
          </Button>
        </Right>
      </Header>
    ) : (
        < View style={Styles.containerTransparent} >
          {rest.goback ? (
            <TouchableOpacity
              onPress={() => rest.navigation.goBack()}
            >
              <Icon
                name='angle-left'
                type="FontAwesome5"
                style={Styles.iconTransparent}
              />
            </TouchableOpacity>
          ) : <View style={Styles.iconTransparent} ></View>}
        </View >
      )
  }

}

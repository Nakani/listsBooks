import React, { PureComponent } from 'react';
import { Container, Content, Icon } from 'native-base';
import { View, TouchableOpacity } from 'react-native'
import { HeaderComponent } from '../index';
import { theme } from 'theme'
import { Styles } from './base.style';

export class BaseComponent extends PureComponent {


  render() {
    const { children, ...rest } = this.props

    return rest.headerDisplay ? (
      <Container
        style={{ backgroundColor: theme.colors.dark }}
      >
        <HeaderComponent
          headerName={rest.headerName}
          headerStyle={rest.headerStyle}
          goback={rest.goback}
          navigation={rest.navigation}
        />
        <Content>
          {children}
        </Content>
      </Container>
    ) : (
        <Container
          style={Styles.containerBase}
        >{rest.goBackTransparent ? (
          <HeaderComponent
            goback={rest.goback}
            navigation={rest.navigation}
            transparent={true}
          />
        ) : null}
          <Content>
            {children}
          </Content>
        </Container>
      )
  }
}

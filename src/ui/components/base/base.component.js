import React, { PureComponent } from 'react';
import { Container, Content, Icon } from 'native-base';
import { View, TouchableOpacity } from 'react-native'
import { HeaderComponent } from '../header/header.component';
import { theme } from 'theme'
import { Styles } from './base.style';

export class BaseComponent extends PureComponent {

  search() {
    alert('buscar')
  }

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
          style={{ backgroundColor: theme.colors.dark }}>
          <View style={Styles.containerIcon}>
            <TouchableOpacity
              onPress={this.search}
            >
              <Icon
                type="FontAwesome5"
                name="search"
                style={Styles.iconHeader}
              />
            </TouchableOpacity>
          </View>
          <Content>
            {children}
          </Content>
        </Container>
      )
  }
}

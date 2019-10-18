import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { Container, Content } from 'native-base';
import { HeaderComponent } from '../header/header.component';
import { theme } from 'theme'

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
        <Container>
          <Content>
            {children}
          </Content>
        </Container>
      )
  }
}

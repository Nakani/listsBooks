import { StyleSheet } from 'react-native'
import { theme } from 'theme'
export const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: '100%',
    paddingLeft: 5,
    paddingRight: 5
  },
  content: {
    backgroundColor: 'transparent',
    paddingTop: 10,
    paddingBottom: 10
  },
  image: {
    height: 200,
    width: '100%',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  description: {
    textAlign: 'left',
    color: theme.colors.primary
  },

  contentFooter: {
    backgroundColor: 'transparent',
    top: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  buttonContent: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
    padding: 10
  },
  icon: {
    color: theme.colors.primary,
  },
  iconChecked: {
    color: theme.colors.highlight
  },
  textButton: {
    color: theme.colors.primary,
    marginLeft: 10
  }
});

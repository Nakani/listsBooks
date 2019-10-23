import { StyleSheet } from 'react-native'
import { theme } from 'theme'
export const Styles = StyleSheet.create({
  headerContent: {
    backgroundColor: theme.themeApp.backgroundHeader,
    height: 50,
    zIndex: 300,
    flex: 1

  },
  container: {
    backgroundColor: theme.themeApp.backgroundHeader,
    flex: 1,
    justifyContent: 'space-between',
    borderWidth: 1,
    flexDirection: 'row',
  },
  iconContent: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#c3c3c3',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
  icon: {
    color: '#fff',
    width: 30,
  },
  labelHeader: {
    // flex: 1,
    width: 300,
    color: '#fff',
  },

  containerTransparent: {
    zIndex: 300,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'flex-end',
    width: '100%',
    top: 30,
    justifyContent: 'space-between'
  },

  iconTransparent: {
    padding: 10,
    flex: 1,
    color: theme.colors.primary,
  }
});

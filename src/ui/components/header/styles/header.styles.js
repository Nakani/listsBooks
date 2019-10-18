import { StyleSheet } from 'react-native'
import { theme } from 'theme'
export const Styles = StyleSheet.create({
  headerContent: {
    backgroundColor: theme.themeApp.backgroundHeader
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
  }
});

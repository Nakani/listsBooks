import { StyleSheet } from 'react-native'
import { theme } from 'theme'

export const Styles = StyleSheet.create({
    containerBase: {
        backgroundColor: theme.colors.dark,

    },
    containerIcon: {
        zIndex: 300,
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'flex-end',
        width: '100%',
        top: 30,
        justifyContent: 'space-between'
    },

    iconHeader: {
        padding: 10,
        flex: 1,
        color: theme.colors.primary,
    }
})
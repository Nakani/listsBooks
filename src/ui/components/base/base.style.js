import { StyleSheet } from 'react-native'
import { theme } from 'theme'

export const Styles = StyleSheet.create({

    containerIcon: {
        zIndex: 300,
        flex: 1,
        position: 'absolute',
        alignItems: 'flex-end',
        width: '100%',
        padding: 5,
        top: 30,
    },

    iconHeader: {
        padding: 10,
        borderRadius: 25,

        flex: 1,
        color: theme.colors.primary,
    }
})
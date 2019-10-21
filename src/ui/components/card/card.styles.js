import { StyleSheet } from 'react-native'
import { theme } from 'theme'

export const Styles = StyleSheet.create({
    image: {
        height: 200,
        width: null,
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    containerTitle: {
        position: 'absolute',
    },
    title: {
        flex: 1,
        color: theme.colors.primary,
        backgroundColor: theme.colors.transparentDark,
        padding: 10
    },
    subTitle: {
        flex: 1,
        color: theme.colors.primary,
        backgroundColor: theme.colors.transparentDark,
        padding: 10
    },
    card: {
        backgroundColor: 'transparent',
        borderRadius: 10,

    },
    cardItem: {
        backgroundColor: 'transparent',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textFooterLeft: {
        color: theme.colors.highlight,
    },
    textFooter: {
        color: theme.colors.primary,
    }
})
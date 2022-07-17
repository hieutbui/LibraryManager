import React from 'react';
import { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity
} from 'react-native';
import { Assets } from '../../../../../assets/Assets';
import { Books } from '../../../../../general/constants/books/Books';
import { Font, FontSize, FontWeight } from '../../../../../general/constants/FontStyle'
import * as RootNavigator from '../../../../navigators/RootNavigation'
import { ScreenNames } from '../../../../../general/constants/ScreenNames'

const UserHomeScreen = () => {

    const gotoBookScreen = () => {
        RootNavigator.navigate(ScreenNames.bookScreen, {
            bookName: Books[0].name
        })
    }

    return (
        <View style={{ backgroundColor: Assets.Colors.background, flex: 1 }}>
            <TouchableOpacity style={styles.book} onPress={gotoBookScreen} >
                <Image source={Books[0].coverPath} style={styles.bookCover} />
                <Text style={styles.bookName}>{Books[0].name}</Text>
                <Text style={styles.authorName}>{Books[0].author}</Text>
                <View style={styles.rating}>
                    <Text style={styles.authorName}>{Books[0].star}</Text>
                    <Image source={Assets.Icons.ic_star} style={styles.icStar} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    bookCover: {
        width: 128,
        height: 192,
        borderRadius: 10,
        resizeMode: 'contain',
    },
    bookName: {
        fontFamily: Font.semiBold,
        fontSize: FontSize.s_14,
        fontWeight: FontWeight.w_500,
        lineHeight: 15,
        color: Assets.Colors.text
    },
    authorName: {
        fontFamily: Font.light,
        fontSize: FontSize.s_10,
        lineHeight: 15,
        color: Assets.Colors.text
    },
    icStar: {
        width: 8,
        height: 8,
        resizeMode: 'contain',
        marginLeft: 2
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    book: {
        width: 128,
        height: 238,
    }
})

export default UserHomeScreen;

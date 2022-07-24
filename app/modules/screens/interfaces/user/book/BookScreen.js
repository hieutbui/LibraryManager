import React from 'react';
import { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { Books } from '../../../../../general/constants/books/Books';
import { Assets } from '../../../../../assets/Assets';
import { Font, FontSize, FontWeight } from '../../../../../general/constants/FontStyle';

const BookScreen = ({ route }) => {

    let bookInfo = {}
    Books.forEach(book => {
        if (book.bookId == route.params.bookId) {
            bookInfo = book
        }
    })

    return (
        <ScrollView style={{ backgroundColor: Assets.Colors.background, flex: 1 }}>
            <View style={{ marginHorizontal: 16, marginTop: 8, flexDirection: 'row' }}>
                <Image source={bookInfo.coverPath} style={{ width: 128, height: 192 }} />
                <View style={{ marginTop: 19, marginLeft: 16, flex: 1 }}>
                    <Text style={styles.bookName}>{bookInfo.name}</Text>
                    <Text style={styles.author}>{bookInfo.author}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ ...styles.author, marginBottom: 0, marginRight: 2 }}>{bookInfo.star}</Text>
                        <Image source={Assets.Icons.ic_star} style={{ width: 14, height: 14, resizeMode: 'contain' }} />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ borderRadius: 10, height: 45, backgroundColor: Assets.Colors.mainColor, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.borrow}>Mượn sách</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <Text style={styles.description}>{bookInfo.description}</Text>

            <View style={{ marginTop: 16, marginHorizontal: 16, }}>
                <Text style={{ ...styles.bookName, marginBottom: 0 }}>Bình luận</Text>

                <TouchableOpacity style={styles.comment} />
            </View>

            <View style={{ marginTop: 16, marginHorizontal: 16, }}>
                <Text style={{ ...styles.bookName, marginBottom: 0 }}>Gợi ý</Text>

                <TouchableOpacity style={styles.suggest} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bookName: {
        fontFamily: Font.semiBold,
        fontStyle: 'normal',
        lineHeight: 24,
        fontSize: FontSize.s_24,
        fontWeight: FontWeight.w_700,
        color: Assets.Colors.text,
        marginBottom: 6
    },
    author: {
        fontFamily: Font.light,
        fontStyle: 'normal',
        lineHeight: 24,
        fontSize: FontSize.s_14,
        fontWeight: FontWeight.w_500,
        color: Assets.Colors.text,
        opacity: 0.5,
        marginBottom: 6
    },
    description: {
        fontFamily: Font.regular,
        fontStyle: 'normal',
        color: Assets.Colors.text,
        lineHeight: 22,
        fontWeight: FontWeight.w_400,
        fontSize: FontSize.s_14,
        marginHorizontal: 16,
        marginTop: 8
    },
    comment: {
        width: 302,
        height: 134,
        backgroundColor: Assets.Colors.pureWhite,
        borderRadius: 15,
        marginTop: 16
    },
    borrow: {
        fontFamily: Font.semiBold,
        fontStyle: 'normal',
        lineHeight: 22,
        color: Assets.Colors.pureWhite,
        fontWeight: FontWeight.w_700,
        fontSize: FontSize.s_16
    },
    suggest: {
        width: 128, height: 192,
        borderRadius: 10,
        backgroundColor: Assets.Colors.pureWhite,
        marginTop: 8,
        marginBottom: 100
    }
})

export default BookScreen;

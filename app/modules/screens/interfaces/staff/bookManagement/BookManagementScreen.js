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
    FlatList,
    Image,
    Alert
} from 'react-native';
import { Assets } from '../../../../../assets/Assets';
import { Librarians } from '../../../../../general/constants/librarian/Librarians';
import { Font, FontSize, FontWeight } from '../../../../../general/constants/FontStyle';
import { Books } from '../../../../../general/constants/books/Books';
import FloatingActionButton from '../../../../../general/components/FloatingActionButton';

const BookManagementScreen = ({ route }) => {

    let booksId
    Librarians.forEach(librarian => {
        if (librarian.librarianId == route.params.librarianId) {
            booksId = librarian.books
        }
    })

    let books = []
    booksId.forEach(bookId => {
        Books.forEach(book => {
            if (book.bookId == bookId) {
                books.push(book)
            }
        })
    })

    const FlatListItem = (props) => {
        const { book, itemIndex } = props
        const { bookId, coverPath, name, author, description, star } = book

        return (
            <View style={{ backgroundColor: Assets.Colors.pureWhite, marginHorizontal: 16, borderRadius: 10, alignItems: 'center', height: 200, flexDirection: 'row' }}>
                <Image source={coverPath} style={styles.cover} />
                <View style={{ marginLeft: 8 }}>
                    <Text style={styles.bookName}>Tên sách: {name}</Text>
                    <Text style={styles.author}>Tên tách giả: {author}</Text>
                    <Text style={styles.author}>Mã sách: {bookId}</Text>
                </View>
            </View>
        )
    }

    const itemsSeparator = () => {
        return (
            <View style={{ height: 1, backgroundColor: 'transparent' }} />
        )
    }

    const renderItems = ({ item, index }) => {
        return <FlatListItem book={item} itemIndex={index} />
    }

    return (
        <View style={{ backgroundColor: Assets.Colors.background, flex: 1, overflow: 'hidden' }}>
            <FlatList
                data={books}
                renderItem={renderItems}
                keyExtractor={item => item.bookId.toString()}
                style={{
                    marginTop: 16,
                    borderRadius: 10,
                    marginBottom: 100,
                    backgroundColor: 'transparent'
                }}
                contentContainerStyle={{ borderRadius: 10, overflow: 'hidden' }}
                ItemSeparatorComponent={itemsSeparator}
            />
            <FloatingActionButton
                actions={[
                    {
                        buttonType: 'activeDeleteInvoice',
                        label: 'Xóa',
                        disable: false,
                        onPress: () => {
                            Alert.alert('Coming soon!', 'Tính năng đang được cập nhật.')
                        },
                    },
                    {
                        buttonType: 'createInvoice',
                        label: 'Tạo mới',
                        disable: false,
                        onPress: null,
                        customButtonStyle: {
                            backgroundColor: Assets.Colors.pureWhite
                        },
                        customIconStyle: {
                            tintColor: Assets.Colors.mainColor
                        },
                        onPress: () => {
                            Alert.alert('Coming soon!', 'Tính năng đang được cập nhật.')
                        },
                    },
                    {
                        buttonType: 'customButton',
                        label: 'Chọn nhiểu',
                        customIcon: Assets.Icons.threeDots_greenIcon,
                        customButtonStyle: {
                            backgroundColor: Assets.Colors.pureWhite
                        },
                        onPress: () => {
                            Alert.alert('Coming soon!', 'Tính năng đang được cập nhật.')
                        },
                    }
                ]}
                containerStyle={{
                    bottom: 107
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cover: {
        width: 128,
        height: 192,
        borderRadius: 10,
        marginLeft: 8
    },
    bookName: {
        fontFamily: Font.semiBold,
        fontSize: FontSize.s_14,
        fontWeight: FontWeight.w_500,
        lineHeight: 15,
        color: Assets.Colors.text,
        marginTop: 4
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
})

export default BookManagementScreen;

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
    TouchableOpacity,
    FlatList,
    TextInput,
    ImageBackground,
} from 'react-native';
import { Assets } from '../../../../../assets/Assets';
import { Books } from '../../../../../general/constants/books/Books';
import { Font, FontSize, FontWeight } from '../../../../../general/constants/FontStyle'
import * as RootNavigator from '../../../../navigators/RootNavigation'
import { ScreenNames } from '../../../../../general/constants/ScreenNames'
import { Category } from '../../../../../general/constants/category/Category';

const UserHomeScreen = () => {

    const newest = Books.slice(0, 3)
    const forYou = Books.slice(3, 8)
    const popular = Books.slice(8, 12)

    const FlatListItemBook = (props) => {
        const { book, temIndex } = props
        const { coverPath, name, author, description, star } = book

        const gotoBookScreen = () => {
            RootNavigator.navigate(ScreenNames.bookScreen, {
                bookName: name
            })
        }

        return (
            <TouchableOpacity style={styles.itemContainer} onPress={gotoBookScreen}>
                <Image source={coverPath} style={styles.bookCover} />
                <Text style={styles.bookName}>{name}</Text>
                <Text style={styles.authorName}>{author}</Text>
                <View style={styles.rating}>
                    <Text style={styles.authorName}>{star}</Text>
                    <Image source={Assets.Icons.ic_star} style={styles.icStar} />
                </View>
            </TouchableOpacity>
        )
    }

    const renderBookItems = ({ item, index }) => {
        return <FlatListItemBook book={item} itemIndex={index} />
    }

    const FlatListItemCategory = (props) => {
        const { category, itemIndex } = props
        const { img, title } = category

        const gotoCategoryScreen = () => {
            RootNavigator.navigate(ScreenNames.categoryScreen, {
                category: title
            })
        }

        return (
            <TouchableOpacity onPress={gotoCategoryScreen}>
                <ImageBackground source={img} style={styles.categoryImg}>
                    <Text style={styles.categoryTitle}>{title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const renderCategoryItems = ({ item, index }) => {
        return <FlatListItemCategory category={item} itemIndex={index} />
    }


    return (
        <View style={{ backgroundColor: Assets.Colors.background, flex: 1 }} showsVerticalScrollIndicator={false}>

            <View style={styles.searchBar}>
                <Image source={Assets.Icons.ic_search} style={{ marginLeft: 10, height: 24, width: 23.96 }} />
                <TextInput
                    placeholder='Nhập nội dung tìm kiếm'
                    placeholderTextColor={Assets.Colors.placeHolderColor}
                    style={styles.textInput}
                // onChangeText={(text) => searchCompany(text)}
                />
            </View>

            <ScrollView>
                <View style={styles.block}>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Mới nhất</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={newest}
                        keyExtractor={item => item.name}
                        renderItem={renderBookItems}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={styles.block}>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Thể loại</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={Category}
                        keyExtractor={item => item.title}
                        renderItem={renderCategoryItems}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={styles.block}>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Dành cho bạn</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={forYou}
                        keyExtractor={item => item.name}
                        renderItem={renderBookItems}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={{ ...styles.block, marginBottom: 100 }}>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Phổ biến</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={popular}
                        keyExtractor={item => item.name}
                        renderItem={renderBookItems}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
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
        color: Assets.Colors.text,
        marginTop: 4
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
    },
    itemContainer: {
        marginRight: 16
    },
    textInput: {
        fontFamily: Font.regular,
        fontWeight: FontWeight.w_400,
        fontSize: FontSize.s_14,
        lineHeight: 18,
        flex: 1,
        fontStyle: 'normal',
    },
    searchBar: {
        flexDirection: 'row',
        backgroundColor: Assets.Colors.pureWhite,
        alignItems: 'center',
        height: 40,
        marginVertical: 8,
        borderRadius: 10,
        marginHorizontal: 16,
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: {
            width: 10,
            height: 40,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fieldTitle: {
        fontFamily: Font.regular,
        fontStyle: 'normal',
        fontWeight: FontWeight.w_700,
        fontSize: FontSize.s_20,
        lineHeight: 22,
        color: Assets.Colors.text
    },
    seeAll: {
        fontFamily: Font.regular,
        fontStyle: 'normal',
        fontSize: FontSize.s_14,
        fontWeight: FontWeight.w_400,
        lineHeight: 22,
        color: Assets.Colors.text,
        textDecorationLine: 'underline'
    },
    field: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 16,
        marginBottom: 8
    },
    block: {
        marginLeft: 16,
        marginBottom: 16
    },
    categoryTitle: {
        color: Assets.Colors.pureWhite,
        fontFamily: Font.regular,
        fontStyle: 'normal',
        fontSize: FontSize.s_16,
        textAlign: 'center',
        lineHeight: 20,
        fontWeight: FontWeight.w_500
    },
    categoryImg: {
        width: 150,
        height: 78.43,
        borderRadius: 15,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default UserHomeScreen;

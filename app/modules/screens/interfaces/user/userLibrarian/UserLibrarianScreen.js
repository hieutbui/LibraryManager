import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { Assets } from '../../../../../assets/Assets';
import { Librarians } from '../../../../../general/constants/librarian/Librarians';
import { Font, FontWeight, FontSize } from '../../../../../general/constants/FontStyle';
import * as RootNavigation from '../../../../navigators/RootNavigation';
import { ScreenNames } from '../../../../../general/constants/ScreenNames';

const UserLibrarianScreen = () => {

    const FlatListItem = (props) => {
        const { librarian, itemIndex } = props
        const { name, booksAmount, img } = librarian

        const gotoLibraryInfo = () => {
            RootNavigation.navigate(ScreenNames.libraryInfoScreen, {
                librarianName: name
            })
        }

        return (
            <TouchableOpacity style={styles.itemContainer} onPress={gotoLibraryInfo}>
                <Image source={img} style={{ width: 182, height: 129 }} />
                <Text style={styles.librarianName}>{name}</Text>
                <Text style={styles.bookAmount}>{booksAmount} sách</Text>
            </TouchableOpacity>
        )
    }

    const renderItems = ({ item, index }) => {
        return <FlatListItem librarian={item} itemIndex={index} />
    }

    return (
        <View style={{ backgroundColor: Assets.Colors.background, flex: 1 }}>
            <View style={styles.searchBar}>
                <Image source={Assets.Icons.ic_search} style={{ marginLeft: 10, height: 24, width: 23.96 }} />
                <TextInput
                    placeholder='Nhập nội dung tìm kiếm'
                    placeholderTextColor={Assets.Colors.placeHolderColor}
                    style={styles.textInput}
                // onChangeText={(text) => searchCompany(text)}
                />
            </View>

            <TouchableOpacity style={styles.buttonSort}>
                <Text style={styles.sort}>Sắp xếp theo</Text>
                <Image source={Assets.Icons.ic_popDown} style={{ width: 12, height: 6, marginTop: 6, marginLeft: 4, resizeMode: 'contain' }} />
            </TouchableOpacity>

            <View style={styles.flatList}>
                <FlatList
                    data={Librarians}
                    renderItem={renderItems}
                    keyExtractor={(item, index) => item.name}
                    numColumns={2}
                    nestedScrollEnabled
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    textInput: {
        fontFamily: Font.regular,
        fontWeight: FontWeight.w_400,
        fontSize: FontSize.s_14,
        lineHeight: 18,
        flex: 1,
        fontStyle: 'normal',
    },
    sort: {
        fontFamily: Font.regular,
        lineHeight: 22,
        fontStyle: 'normal',
        fontWeight: FontWeight.w_500,
        fontSize: 14,
        color: Assets.Colors.text,
    },
    buttonSort: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 16
    },
    itemContainer: {
        width: 182,
        height: 182,
        borderRadius: 15,
        backgroundColor: Assets.Colors.pureWhite,
        margin: 4,
        overflow: 'hidden',
        shadowColor: "rgba(0, 0, 0, 0.3",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    flatList: {
        alignItems: 'center',
        marginBottom: 100,
        flex: 1
    },
    librarianName: {
        fontFamily: Font.regular,
        lineHeight: 18,
        fontStyle: 'normal',
        fontSize: FontSize.s_14,
        fontWeight: FontWeight.w_500,
        color: Assets.Colors.text,
        marginTop: 10,
        marginLeft: 10
    },
    bookAmount: {
        fontFamily: Font.regular,
        fontStyle: 'normal',
        lineHeight: 15,
        fontSize: 12,
        fontWeight: FontWeight.w_500,
        color: Assets.Colors.text,
        marginLeft: 10,
        opacity: 0.5
    }
})

export default UserLibrarianScreen;

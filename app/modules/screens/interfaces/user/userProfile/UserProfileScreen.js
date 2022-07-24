import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageBackground,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Assets } from '../../../../../assets/Assets';
import FocusAwareStatusBar from '../../../../statusBar/FocusAwareStatusBar';
import { Font, FontSize, FontWeight } from '../../../../../general/constants/FontStyle';
import { Account } from '../../../../../general/constants/Account';
import { Books } from '../../../../../general/constants/books/Books';
import * as RootNavigator from '../../../../navigators/RootNavigation'
import { ScreenNames } from '../../../../../general/constants/ScreenNames';
import { Invoices } from '../../../../../general/constants/invoices/Invoices';

const UserProfileScreen = ({ route }) => {

    let userName
    let borrowed
    let borrowing
    let rated
    Account.forEach(user => {
        if (user.userId == route.params.userId) {
            userName = user.userName
            borrowed = user.borrowed
            borrowing = user.borrowing
            rated = user.rating
        }
    })

    let borrowingBook = []
    let borrowedBook = []

    borrowed.forEach(bookId => {
        Books.forEach(book => {
            if (book.bookId == bookId) {
                borrowedBook.push(book)
            }
        })
    })

    borrowing.forEach(bookId => {
        Books.forEach(book => {
            if (book.bookId == bookId) {
                borrowingBook.push(book)
            }
        })
    })

    let userInvoice = []
    Invoices.forEach(invoice => {
        if (invoice.userId == route.params.userId) {
            userInvoice.push(invoice)
        }
    })

    const FlatListBorrowingItem = (props) => {
        const { book, temIndex } = props
        const { coverPath, name, author, description, star, bookId } = book
        let endDate
        userInvoice.forEach(invoice => {
            invoice.booksId.forEach(id => {
                if (id == bookId) {
                    endDate = invoice.endDate
                }
            })
        })

        const gotoBookScreen = () => {
            RootNavigator.navigate(ScreenNames.bookScreen, {
                bookId: bookId
            })
        }

        return (
            <TouchableOpacity style={styles.itemContainer} onPress={gotoBookScreen}>
                <Image source={coverPath} style={styles.bookCover} />
                <Text style={styles.bookName}>{name}</Text>
                <Text style={styles.authorName}>{author}</Text>
                <Text style={styles.endDate}>Đến hạn: {endDate}</Text>
            </TouchableOpacity>
        )
    }

    const renderBorrowingItems = ({ item, index }) => {
        return <FlatListBorrowingItem book={item} itemIndex={index} />
    }

    const FlatListItemBook = (props) => {
        const { book, temIndex } = props
        const { coverPath, name, author, description, star, bookId } = book

        const gotoBookScreen = () => {
            RootNavigator.navigate(ScreenNames.bookScreen, {
                bookId: bookId
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

    const gotoCalendar = () => {
        RootNavigator.navigate(ScreenNames.calendarScreen, {
            borrowing: borrowing
        })
    }

    const gotoSetting = () => {
        RootNavigator.navigate(ScreenNames.userSettingScreen)
    }

    return (
        <View style={{ backgroundColor: Assets.Colors.background, flex: 1 }}>
            <FocusAwareStatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />
            <ImageBackground source={Assets.Images.profileBackground} style={{ width: '100%', height: 240.75 }} >
                <View style={{ backgroundColor: '#000000', opacity: 0.25, width: '100%', height: 240.75 }} >

                </View>

                <View style={{ flexDirection: 'row', position: 'absolute', right: 16, top: 61, justifyContent: 'space-evenly', width: 70 }}>
                    <TouchableOpacity onPress={gotoCalendar}>
                        <Image source={Assets.Icons.ic_calendar} style={{ width: 22, height: 22, resizeMode: 'contain', tintColor: Assets.Colors.pureWhite }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={gotoSetting}>
                        <Image source={Assets.Icons.ic_setting} style={{ width: 22, height: 24, resizeMode: 'contain', tintColor: Assets.Colors.pureWhite }} />
                    </TouchableOpacity>
                </View>
                <View style={{ position: 'absolute', flexDirection: 'row', height: 240.75, }}>
                    <View style={{ width: 80, height: 80, borderRadius: 40, overflow: 'hidden', marginTop: 135, marginLeft: 16 }}>
                        <Image source={Assets.Images.userAvatar} style={{ width: 80, height: 80 }} />
                    </View>
                    <Text style={styles.userName}>{userName}</Text>
                </View>
            </ImageBackground>

            <View style={styles.informationTab}>
                <View style={styles.tabBlock}>
                    <Text style={styles.tabNumber}>{borrowing.length}</Text>
                    <Text style={styles.tabText}>Đang mượn</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.tabBlock}>
                    <Text style={styles.tabNumber}>{borrowed.length}</Text>
                    <Text style={styles.tabText}>Đã mượn</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.tabBlock}>
                    <Text style={styles.tabNumber}>{rated}</Text>
                    <Text style={styles.tabText}>Đánh giá</Text>
                </View>
            </View>

            <ScrollView style={{ marginBottom: 100, marginTop: 16 }}>
                <View style={styles.block}>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Đang mượn</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={borrowingBook}
                        keyExtractor={item => item.name}
                        renderItem={renderBorrowingItems}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />

                    <View style={{ ...styles.field, marginTop: 16 }}>
                        <Text style={styles.fieldTitle}>Đã trả</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={borrowedBook}
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
    userName: {
        fontFamily: Font.regular,
        lineHeight: 22,
        fontSize: FontSize.s_14,
        fontWeight: FontWeight.w_500,
        color: Assets.Colors.pureWhite,
        marginTop: 160,
        marginLeft: 8
    },
    informationTab: {
        height: 75,
        backgroundColor: Assets.Colors.pureWhite,
        borderRadius: 15,
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: {
            width: 10,
            height: 40,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        marginHorizontal: 16,
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabText: {
        fontFamily: Font.regular,
        lineHeight: 22,
        color: Assets.Colors.text,
        fontStyle: 'normal',
        fontWeight: FontWeight.w_500,
        fontSize: FontSize.s_14
    },
    tabNumber: {
        fontFamily: Font.semiBold,
        lineHeight: 30,
        fontStyle: 'normal',
        color: Assets.Colors.text,
        fontSize: FontSize.s_24,
        fontWeight: FontWeight.w_600
    },
    tabBlock: {
        flex: 0.3,
        alignItems: 'center',
    },
    divider: {
        backgroundColor: Assets.Colors.text,
        opacity: 0.2,
        borderRadius: 100,
        height: 55,
        width: 1
    },
    itemContainer: {
        marginRight: 16
    },
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
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    icStar: {
        width: 8,
        height: 8,
        resizeMode: 'contain',
        marginLeft: 2
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
    endDate: {
        fontFamily: Font.regular,
        fontStyle: 'normal',
        lineHeight: 15,
        color: '#CA3000',
        fontWeight: FontWeight.w_500,
        fontSize: 9
    }
})

export default UserProfileScreen;

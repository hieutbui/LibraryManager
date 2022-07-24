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
import { Invoices } from '../../../../../general/constants/invoices/Invoices';
import { Font, FontSize, FontWeight } from '../../../../../general/constants/FontStyle';
import { Account } from '../../../../../general/constants/Account';
import FloatingActionButton from '../../../../../general/components/FloatingActionButton';

const InvoiceManagementScreen = ({ route }) => {


    let invoices = []
    Invoices.forEach(invoice => {
        if (invoice.librarianId == route.params.librarianId) {
            invoices.push(invoice)
        }
    })

    const FlatListItem = (props) => {
        const { invoice, itemIndex } = props
        const { invoiceId, userId, librarianId, booksId, startDate, endDate } = invoice

        let booksList = ''
        booksId.forEach(id => {
            booksList += id.toString() + ', '
        })

        let userName
        Account.forEach(user => {
            if (user.userId == userId) {
                userName = user.userName
            }
        })

        return (
            <View style={{ backgroundColor: Assets.Colors.pureWhite, marginHorizontal: 16, borderRadius: 10, alignItems: 'center', height: 200, flexDirection: 'row' }}>
                <Image source={Assets.Icons.ic_invoice} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                <View style={{ marginLeft: 8 }}>
                    <Text style={styles.id}>Mã đơn: {invoiceId}</Text>
                    <Text style={{ ...styles.date, color: '#81BE1C' }}>Ngày mượn: {startDate}</Text>
                    <Text style={{ ...styles.date, color: '#CA3000', }}>Ngày trả: {endDate}</Text>
                    <Text style={styles.author}>Mã sách: {booksList.slice(0, booksList.length - 2)}</Text>
                    <View>
                        <Text style={styles.author}>Tên người dùng: {userName}</Text>
                        <Text style={styles.author}>Mã người dùng: {userId}</Text>
                    </View>
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
        return <FlatListItem invoice={item} itemIndex={index} />
    }

    return (
        <View style={{ backgroundColor: Assets.Colors.background, flex: 1, overflow: 'hidden' }}>
            <FlatList
                data={invoices}
                renderItem={renderItems}
                keyExtractor={item => item.invoiceId.toString()}
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
    id: {
        fontFamily: Font.semiBold,
        fontSize: FontSize.s_20,
        fontWeight: FontWeight.w_500,
        lineHeight: 22,
        color: Assets.Colors.text,
        marginTop: 4
    },
    date: {
        fontFamily: Font.regular,
        fontStyle: 'normal',
        lineHeight: 15,
        fontWeight: FontWeight.w_500,
        fontSize: 9
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

export default InvoiceManagementScreen;

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import { Assets } from '../../../../../assets/Assets';
import { Font, FontSize, FontWeight } from '../../../../../general/constants/FontStyle';

const settingOptions = [
    'Thông tin tài khoản',
    'Mật khẩu và bảo mật',
    'Thông báo',
    'Chính sách cộng đồng',
    'Điều khoản sử dụng',
    'Giới thiệu',
]

const UserSettingScreen = () => {

    const FlatListOptionItem = (props) => {

        const {options, itemIndex} = props

        return (
            <TouchableOpacity style={{backgroundColor: Assets.Colors.pureWhite, flexDirection: 'row', borderRadius: 10, height: 50, marginBottom: 16, alignItems: 'center'}}>
                <Text style={styles.optionsTitle}>{options}</Text>
                <Image source={Assets.Icons.ic_forwardArrow} style={{width: 10, height: 17.32, resizeMode: 'contain'}} />
            </TouchableOpacity>
        )

    }

    const renderItems = ({item, index}) => {
        return <FlatListOptionItem options={item} itemIndex={index} />
    }

    return (
        <View style={{ backgroundColor: Assets.Colors.background, flex: 1 }}>
            <FlatList 
                data={settingOptions}
                renderItem={renderItems}
                keyExtractor={item => settingOptions.indexOf(item).toString()}
                style={{
                    marginHorizontal: 16,
                    marginTop: 16,
                }}
            />

            <TouchableOpacity style={{ height: 50, marginHorizontal: 16, borderRadius: 10, backgroundColor: Assets.Colors.mainColor, marginBottom: 100, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.logout}>Đăng xuất</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    optionsTitle: {
        fontFamily: Font.medium,
        fontStyle: 'normal',
        lineHeight: 18,
        color: Assets.Colors.text,
        fontWeight: FontWeight.w_600,
        flex: 0.95,
        marginLeft: 10
    },
    logout: {
        color: Assets.Colors.pureWhite,
        fontFamily: Font.semiBold,
        fontSize: FontSize.s_14,
        lineHeight: 18,
        fontStyle: 'normal',
        fontWeight: FontWeight.w_600
    }
})

export default UserSettingScreen;

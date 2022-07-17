import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Assets } from '../../../../assets/Assets'
import { ScreenNames } from '../../../../general/constants/ScreenNames';
import * as RootNavigation from '../../../navigators/RootNavigation'
import { Font, FontSize, FontWeight } from '../../../../general/constants/FontStyle'

const SignUpScreen = () => {

    const gotoSignInScreen = () => {
        RootNavigation.navigate(ScreenNames.signInScreen)
    }

    const [userType, setUserType] = useState(1)

    const setUser = () => {
        setUserType(1)
    }

    const setStaff = () => {
        setUserType(0)
    }

    return (
        <View style={{ backgroundColor: Assets.Colors.background, flex: 1 }}>
            <View style={{ flex: 0.05 }} />
            <View style={{ flex: 1.16 }}>
                <Text style={styles.title}>Đăng ký</Text>
                <View style={styles.loginArea} >
                    <Text style={styles.loginFieldName}>Tên đăng nhập:</Text>
                    <TextInput
                        placeholder='Nhập email hoặc số điện thoại'
                        placeholderTextColor={Assets.Colors.placeHolderColor}
                        style={styles.inputField}
                    />

                    <Text style={{ ...styles.loginFieldName, marginTop: 8 }}>Mật khẩu:</Text>
                    <TextInput
                        placeholder='Nhập mật khẩu'
                        placeholderTextColor={Assets.Colors.placeHolderColor}
                        style={styles.inputField}
                    />

                    <Text style={{ ...styles.loginFieldName, marginTop: 8 }}>Nhập lại mật khẩu:</Text>
                    <TextInput
                        placeholder='Nhập lại mật khẩu'
                        placeholderTextColor={Assets.Colors.placeHolderColor}
                        style={styles.inputField}
                    />

                    <Text style={{ ...styles.loginFieldName, marginTop: 8 }}>Loại tài khoản:</Text>
                    <View style={styles.userTypeArea}>
                        <TouchableOpacity
                            style={{
                                ...styles.userType,
                                borderTopLeftRadius: 10,
                                borderBottomLeftRadius: 10,
                                backgroundColor: (userType == 1) ? Assets.Colors.mainColor : 'transparent'
                            }}
                            onPress={setUser}>
                            <Text style={{ ...styles.buttonText, color: (userType == 1) ? Assets.Colors.pureWhite : Assets.Colors.text }}>Người sử dụng</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                ...styles.userType,
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10,
                                backgroundColor: (userType == 0) ? Assets.Colors.mainColor : 'transparent'
                            }}
                            onPress={setStaff}>
                            <Text style={{ ...styles.buttonText, color: (userType == 0) ? Assets.Colors.pureWhite : Assets.Colors.text }}>Nhân viên</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.buttonText}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.loginAlternative}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: Assets.Colors.separatorColor }} />
                        <View style={{ width: 50, alignItems: 'center' }}>
                            <Text style={styles.separator}>hoặc</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: Assets.Colors.separatorColor }} />
                    </View>

                    <View style={styles.loginOption}>
                        <TouchableOpacity style={styles.socialNetworkOption}>
                            <Image source={Assets.Icons.ic_google} style={styles.socialNetwork} />
                            <Text style={{ ...styles.separator, color: Assets.Colors.text, marginLeft: 25 }}>Đăng ký bằng Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.socialNetworkOption}>
                            <Image source={Assets.Icons.ic_facebook} style={styles.socialNetwork} />
                            <Text style={{ ...styles.separator, color: Assets.Colors.text, marginLeft: 25 }}>Đăng ký bằng Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', flex: 0.05, alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 8 }}>
                <Text style={{ ...styles.separator, color: Assets.Colors.text }}>Bạn đã có tài khoản?  </Text>
                <TouchableOpacity onPress={gotoSignInScreen}>
                    <Text style={{ ...styles.forgotPassword, marginTop: 0 }}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: Assets.Colors.text,
        fontSize: FontSize.s_32,
        lineHeight: 40,
        fontFamily: Font.regular,
        fontWeight: FontWeight.w_700,
        paddingHorizontal: 40,
        paddingBottom: 56
    },
    loginArea: {
        paddingHorizontal: 40
    },
    loginFieldName: {
        fontFamily: Font.regular,
        color: Assets.Colors.text,
        fontWeight: FontWeight.w_500,
        lineHeight: 18,
        fontSize: FontSize.s_14,
    },
    inputField: {
        backgroundColor: Assets.Colors.pureWhite,
        borderRadius: 10,
        marginTop: 8
    },
    forgotPassword: {
        fontFamily: Font.regular,
        fontWeight: FontWeight.w_500,
        fontSize: FontSize.s_14,
        lineHeight: 17.5,
        textDecorationLine: 'underline',
        color: Assets.Colors.mainColor,
        textAlign: 'right',
        marginTop: 8
    },
    loginButton: {
        backgroundColor: Assets.Colors.mainColor,
        alignItems: 'center',
        marginTop: 16,
        height: 44,
        borderRadius: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: Font.regular,
        fontWeight: FontWeight.w_700,
        fontSize: FontSize.s_14,
        lineHeight: 17.5,
        color: Assets.Colors.pureWhite
    },
    loginAlternative: {
        marginTop: 60,
        paddingHorizontal: 40,
    },
    separator: {
        fontFamily: Font.regular,
        fontWeight: FontWeight.w_500,
        fontSize: FontSize.s_14,
        lineHeight: 17.5,
        color: Assets.Colors.separatorColor,
    },
    socialNetwork: {
        width: 24,
        height: 24,
        marginLeft: 21
    },
    socialNetworkOption: {
        height: 50,
        backgroundColor: Assets.Colors.pureWhite,
        marginTop: 25,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userTypeArea: {
        flexDirection: 'row',
        marginTop: 8
    },
    userType: {
        flex: 1,
        borderWidth: 1,
        borderColor: Assets.Colors.mainColor,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default SignUpScreen;
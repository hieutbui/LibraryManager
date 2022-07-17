import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import { Assets } from '../../../../assets/Assets'
import { ScreenNames } from '../../../../general/constants/ScreenNames'
import { useState } from 'react';
import * as RootNavigation from '../../../navigators/RootNavigation'
import { Font, FontSize, FontWeight } from '../../../../general/constants/FontStyle'
import { Account } from '../../../../general/constants/Account'

const Height = Dimensions.get('screen').height

const SignInScreen = () => {

    const [inputUserName, setInputUserName] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const typingUserName = (text) => {
        setInputUserName(text)
    }

    const typingPassword = (text) => {
        setInputPassword(text)
    }

    const [wrongAccountCheck, setWrongAccountCheck] = useState(false)

    const handleLogin = () => {

        let foundAccount = {}
        Account.forEach(account => {
            if (account.email == inputUserName) {
                foundAccount = account
            }
        })

        if (foundAccount) {
            if (foundAccount.password == inputPassword) {
                if (foundAccount.accountType == 'user') {
                    RootNavigation.navigate(ScreenNames.userMainNavigator)
                    setWrongAccountCheck(false)
                } else {
                    // go to staff navigator
                    setWrongAccountCheck(false)
                }
            } else {
                setWrongAccountCheck(true)
            }
        } else {
            setWrongAccountCheck(true)
        }

    }


    const gotoSignUpScreen = () => {
        RootNavigation.navigate(ScreenNames.SignUpScreen)
    }

    return (
        <View style={{ backgroundColor: Assets.Colors.background, flex: 1 }}>
            <View style={{ flex: 0.1 }}>
                {wrongAccountCheck &&
                    <View style={styles.wrongAccountAlert}>
                        <Text style={styles.wrongAccount}>Sai tên đăng nhập hoặc mật khẩu!</Text>
                    </View>
                }
            </View>
            <View style={{ flex: 0.68 }}>
                <Text style={styles.title}>Đăng nhập</Text>
                <View style={styles.loginArea} >
                    <Text style={styles.loginFieldName}>Tên đăng nhập:</Text>
                    <TextInput
                        placeholder='Nhập email hoặc số điện thoại'
                        placeholderTextColor={Assets.Colors.placeHolderColor}
                        style={styles.inputField}
                        onChangeText={text => typingUserName(text)}
                    />

                    <Text style={{ ...styles.loginFieldName, marginTop: 0.009 * Height }}>Mật khẩu:</Text>
                    <TextInput
                        placeholder='Nhập mật khẩu'
                        placeholderTextColor={Assets.Colors.placeHolderColor}
                        style={styles.inputField}
                        onChangeText={text => typingPassword(text)}
                    />

                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Đăng Nhập</Text>
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
                            <Text style={{ ...styles.separator, color: Assets.Colors.text, marginLeft: 25 }}>Đăng nhập bằng Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.socialNetworkOption}>
                            <Image source={Assets.Icons.ic_facebook} style={styles.socialNetwork} />
                            <Text style={{ ...styles.separator, color: Assets.Colors.text, marginLeft: 25 }}>Đăng nhập bằng Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', flex: 0.22, alignItems: 'flex-end', justifyContent: 'center', marginBottom: 0.009 * Height }}>
                <Text style={{ ...styles.separator, color: Assets.Colors.text }}>Bạn không có tài khoản? </Text>
                <TouchableOpacity onPress={gotoSignUpScreen}>
                    <Text style={{ ...styles.forgotPassword, marginTop: 0 }}>Đăng ký</Text>
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
        marginBottom: Height * 0.06,
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
        marginTop: 0.009 * Height,
        color: Assets.Colors.text,
        fontFamily: Font.regular,
        fontWeight: FontWeight.w_500,
        lineHeight: 18,
        fontSize: FontSize.s_14
    },
    forgotPassword: {
        fontFamily: Font.regular,
        fontWeight: FontWeight.w_500,
        fontSize: FontSize.s_14,
        lineHeight: 17.5,
        textDecorationLine: 'underline',
        color: Assets.Colors.mainColor,
        textAlign: 'right',
        marginTop: 0.009 * Height
    },
    loginButton: {
        backgroundColor: Assets.Colors.mainColor,
        alignItems: 'center',
        marginTop: 0.017 * Height,
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
        marginTop: 0.09 * Height,
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
        marginTop: 0.02 * Height,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    wrongAccount: {
        color: Assets.Colors.problemText,
        fontFamily: Font.regular,
        fontSize: FontSize.s_14,
        lineHeight: 17.5,
        fontWeight: FontWeight.w_500
    },
    wrongAccountAlert: {
        backgroundColor: Assets.Colors.problem,
        height: 20,
        marginHorizontal: 40,
        borderWidth: 0.5,
        borderColor: Assets.Colors.redAlert,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default SignInScreen;

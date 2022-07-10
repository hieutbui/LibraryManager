import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Assets } from '../../../assets/Assets'
import { ScreenNames } from '../../../general/constants/ScreenNames';

const Register = (props) => {

    const login = () => {
        props.navigation.navigate(ScreenNames.LoginScreen)
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
                        placeholderTextColor='#AAB0BD'
                        style={styles.inputField}
                    />

                    <Text style={{ ...styles.loginFieldName, marginTop: 8 }}>Mật khẩu:</Text>
                    <TextInput
                        placeholder='Nhập mật khẩu'
                        placeholderTextColor='#AAB0BD'
                        style={styles.inputField}
                    />

                    <Text style={{ ...styles.loginFieldName, marginTop: 8 }}>Nhập lại mật khẩu:</Text>
                    <TextInput
                        placeholder='Nhập lại mật khẩu'
                        placeholderTextColor='#AAB0BD'
                        style={styles.inputField}
                    />

                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.buttonText}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.loginAlternative}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#BBBECD' }} />
                        <View style={{ width: 50, alignItems: 'center' }}>
                            <Text style={styles.separator}>hoặc</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#BBBECD' }} />
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
                <TouchableOpacity onPress={login}>
                    <Text style={{ ...styles.forgotPassword, marginTop: 0 }}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: Assets.Colors.text,
        fontSize: 32,
        lineHeight: 40,
        fontFamily: 'Quicksand-Regular',
        fontWeight: '700',
        paddingHorizontal: 40,
        paddingBottom: 56
    },
    loginArea: {
        paddingHorizontal: 40
    },
    loginFieldName: {
        fontFamily: 'Quicksand-Regular',
        color: Assets.Colors.text,
        fontWeight: '500',
        lineHeight: 18,
        fontSize: 14,
    },
    inputField: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 8
    },
    forgotPassword: {
        fontFamily: 'Quicksand-Regular',
        fontWeight: '500',
        fontSize: 14,
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
        fontFamily: 'Quicksand-Regular',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 17.5,
        color: '#ffffff'
    },
    loginAlternative: {
        paddingTop: 80,
        paddingHorizontal: 40,
    },
    separator: {
        fontFamily: 'Quicksand-Regular',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 17.5,
        color: '#BBBECD',
    },
    socialNetwork: {
        width: 24,
        height: 24,
        marginLeft: 21
    },
    socialNetworkOption: {
        height: 50,
        backgroundColor: '#ffffff',
        marginTop: 32,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },

})

export default Register;
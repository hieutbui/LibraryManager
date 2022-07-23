import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageBackground,
    Image
} from 'react-native';
import { Assets } from '../../../../../assets/Assets';
import FocusAwareStatusBar from '../../../../statusBar/FocusAwareStatusBar';
import { Font, FontSize, FontWeight } from '../../../../../general/constants/FontStyle';

const UserProfileScreen = ({ route }) => {
    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <FocusAwareStatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />
            <ImageBackground source={Assets.Images.profileBackground} style={{ width: '100%', height: 240.75 }} >
                <View style={{ backgroundColor: '#000000', opacity: 0.25, width: '100%', height: 240.75 }} >

                </View>
                <View style={{ position: 'absolute', flexDirection: 'row', height: 240.75 }}>
                    <View style={{ width: 80, height: 80, borderRadius: 40, overflow: 'hidden', marginTop: 135, marginLeft: 16 }}>
                        <Image source={Assets.Images.userAvatar} style={{ width: 80, height: 80 }} />
                    </View>
                    <Text style={styles.userName}>{route.params.userName}</Text>
                </View>
            </ImageBackground>

            <View style={{ marginHorizontal: 16, alignItems: 'center' }}>
                <View >

                </View>

            </View>
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
    }
})

export default UserProfileScreen;

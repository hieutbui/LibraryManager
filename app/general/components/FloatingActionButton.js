import React, { useRef, useState } from 'react';
import { View, StyleSheet, Animated, StyleProp, ViewStyle, Dimensions } from 'react-native';
import CircleButton from './CircleButton';
import { Assets } from '../../assets/Assets';
import { Font } from '../constants/FontStyle';

/**
 * Place it inside the biggest component of screens for floating. You must pass at less 1 action to actions property. Actions is a list of button that pop out when floating action is pressed.
 * @author hieu
 * @typedef Props
 * @property {Object[]} actions: a list of actions for floating action button
 * @property {'createInvoice' | 'activeDeleteInvoice' | 'inactiveDeleteInvoice' | 'activeCancelInvoice' | 'inactiveCancelInvoice' | 'activeReport' | 'inactiveReport' | 'cancelFloatingActionButton' | 'threeDotsFloatingActionButton' | 'customButton'} actions[].buttonType: CircleButton type
 * @property {Boolean} actions[].disable: actions status (active/disable - default: true)
 * @property {()=>void=} actions[].onPress: event when actions is pressed
 * @property {String} action[].label: label for action
 * @property {source} actions[].customIcon: custom Icon for CircleButton
 * @property {StyleProp<ViewStyle>=} actions[].customIconStyle: custom style for button's icon
 * @property {StyleProp<ViewStyle>=} actions[].customButtonStyle: custom style for button
 * @property {StyleProp<ViewStyle>=} containerStyle: custom style for <View/> that wrap floating button
 * @param {Props} props
 * @returns {JSX.Element}
 */

const fullScreenWidth = Dimensions.get('screen').width
const fullScreenHeight = Dimensions.get('screen').height

const FloatingActionButton = ({ actions, containerStyle = null }) => {

    const animation = useRef(new Animated.Value(0)).current;

    const [floatingCheck, setFloatingCheck] = useState(false);

    const [open, setOpen] = useState(0);

    const toggleMenu = () => {
        const toValue = open ? 0 : 1;

        Animated.timing(animation, {
            toValue,
            duration: 400,
            // friction: 5,
            useNativeDriver: true,
        }).start();

        setFloatingCheck(!floatingCheck);
        setOpen(!open);
    };

    const labelPositionInterpolate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-30, -13],
    });

    const opacityInterpolate = animation.interpolate({
        inputRange: [0, 0.8, 1],
        outputRange: [0, 0, 1],
    });

    const labelStyle = {
        opacity: opacityInterpolate,
        transform: [
            {
                translateX: labelPositionInterpolate,
            },
        ],
    };

    const scaleInterPolate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 30],
    });

    const bgStyle = {
        transform: [
            {
                scale: scaleInterPolate,
            },
        ],
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <Animated.View style={[styles.background, bgStyle]} />

            {actions.map((item) => {
                const itemStyle = {
                    transform: [
                        { scale: animation },
                        {
                            translateY: animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -62 * (actions.indexOf(item) + 1)],
                            }),
                        },
                    ],
                };

                const inactiveStyle = {
                    opacity: animation.interpolate({
                        inputRange: [0, 0.8, 1],
                        outputRange: [0, 0, 0.5],
                    }),
                    transform: [
                        {
                            translateY: animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -62 * (actions.indexOf(item) + 1)],
                            }),
                        },
                    ],
                };

                return (
                    <View key={actions.indexOf(item)}>
                        <Animated.View style={[styles.button, itemStyle]}>
                            <Animated.Text
                                style={[
                                    {
                                        ...styles.label,
                                        color: item.disable
                                            ? Assets.Colors.disableFloatingLabel
                                            : Assets.Colors.pureWhite,
                                    },
                                    labelStyle,
                                ]}
                            >
                                {item.label}
                            </Animated.Text>
                            <CircleButton
                                type={item.buttonType}
                                onPress={item.onPress}
                                customButtonStyle={item.customButtonStyle}
                                customIcon={item.customIcon}
                                customButtonIconStyle={item.customIconStyle}
                            />
                        </Animated.View>
                        {item.disable && (
                            <Animated.View style={[styles.background, inactiveStyle]} />
                        )}
                    </View>
                );
            })}

            <CircleButton
                type={
                    floatingCheck
                        ? 'cancelFloatingActionButton'
                        : 'threeDotsFloatingActionButton'
                }
                onPress={toggleMenu}
                customButtonStyle={{
                    right: 17,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: fullScreenWidth,
        bottom: 7,
        alignItems: 'flex-end',
        height: fullScreenHeight,
        justifyContent: 'flex-end',
    },
    button: {
        position: 'absolute',
        justifyContent: 'flex-end',
        right: 17,
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontFamily: Font.medium,
        fontSize: 16,
        position: 'absolute',
        right: 60,
    },
    background: {
        backgroundColor: '#000000',
        opacity: 0.5,
        position: 'absolute',
        width: 56,
        height: 56,
        right: 17,
        borderRadius: 28,
    },
});

export default FloatingActionButton;

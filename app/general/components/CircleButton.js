import React from 'react';
import {StyleSheet, Image, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import { Assets } from '../../assets/Assets';

/**
 * @author: hieu
 * @typedef Props
 * @property {'createInvoice' | 'activeDeleteInvoice' | 'inactiveDeleteInvoice' | 'activeCancelInvoice' | 'inactiveCancelInvoice' | 'activeReport' | 'inactiveReport' | 'cancelFloatingActionButton' | 'threeDotsFloatingActionButton' | 'customButton'} type: button type
 * @property {source} customIcon: icon path
 * @property {StyleProp<ViewStyle>=} customButtonIconStyle: style for icon of custom button
 * @property {StyleProp<ViewStyle>=} customButtonStyle: style for custom button
 * @property {()=>void=} onPress: even when button is pressed
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
const CircleButton = ({
  type,
  customIcon,
  customButtonIconStyle = null,
  customButtonStyle = null,
  onPress,
}) => {
  let iconSource;
  let iconStyle = styles.iconStyle;
  let buttonStyle = styles.buttonStyle;
  switch (type) {
    case 'createInvoice':
      iconSource = Assets.Icons.createInvoiceIcon;
      buttonStyle = {
        ...styles.buttonStyle,
        backgroundColor: Assets.Colors.mainColor,
      };
      break;
    case 'activeDeleteInvoice':
      iconSource = Assets.Icons.redBinIcon;
      buttonStyle = {
        ...styles.buttonStyle,
        backgroundColor: Assets.Colors.pureWhite,
      };
      break;
    case 'inactiveDeleteInvoice':
      iconSource = Assets.Icons.blackBinIcon;
      buttonStyle = {
        ...styles.buttonStyle,
        backgroundColor: Assets.Colors.pureWhite,
      };
      break;
    case 'activeCancelInvoice':
      iconSource = Assets.Icons.redCancelInvoiceIcon;
      buttonStyle = {
        ...styles.buttonStyle,
        backgroundColor: Assets.Colors.pureWhite,
      };
      break;
    case 'inactiveCancelInvoice':
      iconSource = Assets.Icons.blackCancelInvoiceIcon;
      buttonStyle = {
        ...styles.buttonStyle,
        backgroundColor: Assets.Colors.pureWhite,
      };
      break;
    case 'activeReport':
      iconSource = Assets.Icons.blueReportIcon;
      buttonStyle = {
        ...styles.buttonStyle,
        backgroundColor: Assets.Colors.pureWhite,
      };
      break;
    case 'inactiveReport':
      iconSource = Assets.Icons.blackReportIcon;
      buttonStyle = {
        ...styles.buttonStyle,
        backgroundColor: Assets.Colors.pureWhite,
      };
      break;
    case 'cancelFloatingActionButton':
      iconSource = Assets.Icons.xIcon;
      buttonStyle = {
        ...styles.buttonStyle,
        backgroundColor: Assets.Colors.mainColor,
      };
      break;
    case 'threeDotsFloatingActionButton':
      iconSource = Assets.Icons.threeDots_whiteIcon;
      buttonStyle = {
        ...styles.buttonStyle,
        backgroundColor: Assets.Colors.mainColor,
      };
      break;
    case 'customButton':
      iconSource = customIcon;
      buttonStyle = [styles.buttonStyle, customButtonStyle];
      iconStyle = [styles.iconStyle, customButtonIconStyle];
      break;
  }

  return (
    <TouchableOpacity
      style={[buttonStyle, customButtonStyle]}
      onPress={onPress}
    >
      <Image source={iconSource} style={[iconStyle, customButtonIconStyle]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    height: 30,
    width: 23,
    resizeMode: 'contain',
  },
  buttonStyle: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: Assets.Colors.redButtonBackground,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  moreFloatingActionButton: {
    width: 56,
    height: 56,
  },
});

export default CircleButton;

import { Dimensions, Platform, PixelRatio } from 'react-native';

const fontRegular = {
    fontFamily: "DMSans-Regular",
}

const fontMedium = {
    fontFamily: "DMSans-Medium",
}

const fontItalics = {
    fontFamily: "DMSans-Italic",
}

const fontBold = {
    fontFamily: "DMSans-Bold",
}

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 420;

function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export {
    fontRegular,
    fontMedium,
    fontItalics,
    fontBold,
    normalize
}
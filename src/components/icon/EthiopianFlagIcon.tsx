import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { IconContainerProps } from "../../declarations/container";
import IconContainer from "../container/IconContainer";
import { Svg, Rect, Defs, Pattern, Use, Image } from "react-native-svg";
import Color from "../../config/Colors";

function EthiopianFlagIcon({
  width,
  height,
  iconSize,
  touchable,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  color,
  ...rest
}: IconContainerProps) {
  let iconColor = color || Color.primaryText;
  return (
    <IconContainer
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      style={styles.container}
      touchable={touchable}
      height={height}
      iconSize={iconSize}
      width={width || iconSize || 20}
      {...rest}
    >
      <Svg
        width={width || iconSize || 20}
        height={height || iconSize || 20}
        viewBox="0 0 20 20"
        fill="none"
      >
        <Rect width="20" height="20" fill="url(#pattern0)" />
        <Defs>
          <Pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <Use xlinkHref="#image0_15_2349" transform="scale(0.015625)" />
          </Pattern>
          <Image
            id="image0_15_2349"
            width="64"
            height="64"
            xlinkHref="data:image/png;base64,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"
          />
        </Defs>
      </Svg>
    </IconContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default memo(EthiopianFlagIcon);

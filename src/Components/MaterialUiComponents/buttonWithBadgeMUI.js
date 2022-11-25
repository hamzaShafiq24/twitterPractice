import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Badge, Stack } from "@react-native-material/core";


export const VARIANT = {
    outlined: "outlined",
    text: "text"
}

export const INDICATOR_POSITION = {
    leading: "leading",
    trailing: "trailing",
    overlay: "overlay"
}


const ButtonWithBadgeMUI = ({ title,
    variant,
    disabled,
    color,
    tintColor,
    leadingIcon,
    trailingIcon,
    uppercase = false,
    disableElevation,
    loading,
    loadingIndicatorPosition,
    loadingIndicator,
    style,
    badge,
    badgeCount,
    badgeTintColor,
    badgeColor
}) => {

    const defaultTitle = title ? title : "title"
    const defaultVariant = variant ? variant : undefined
    const defaultColor = color ? color : "pink"
    const defaultBadgeColor = badgeColor ? badgeColor : "pink"
    const defaultTintColor = tintColor ? tintColor : "black"
    const defaultBadgeTintColor = badgeTintColor ? badgeTintColor : "black"
    const defaultLoadingIndicatorPosition = loadingIndicatorPosition ? loadingIndicatorPosition : undefined

    return (
        <View>
            <View>
                {badge ?
                    <View style={{ position: "absolute", right: -20, bottom: 2 }}>
                        <Badge label={badgeCount} tintColor={defaultBadgeTintColor} color={defaultBadgeColor} />
                    </View>
                    : false}
            </View>
            <Button
                style={[{ ...style }]}
                leading={() => leadingIcon ? leadingIcon() : false}
                trailing={() => trailingIcon ? trailingIcon() : false}
                tintColor={defaultTintColor}
                color={defaultColor}
                title={defaultTitle}
                variant={defaultVariant}
                disabled={disabled}
                uppercase={uppercase}
                disableElevation={disableElevation}
                loading={loading}
                loadingIndicatorPosition={defaultLoadingIndicatorPosition}
                loadingIndicator={loadingIndicator ? loadingIndicator() : false}
            >
            </Button>
        </View>
    )
}

export default ButtonWithBadgeMUI


const styles = StyleSheet.create({})
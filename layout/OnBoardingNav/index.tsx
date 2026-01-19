import { COLORS } from "@/constants/ColorConst";
import React from "react";
import { StyleSheet, View } from "react-native";
type OnBoardingNavProps = {
    children?: React.ReactNode;
}
const OnBoardingNav: React.FC<OnBoardingNavProps> = ({children}) => {
    return (
        <View style = {styles.navContain}>
            {children}
        </View>
    );
}
const styles = StyleSheet.create({
    navContain:{
        width:"100%",
        height:"100%",
        backgroundColor:COLORS.PRIMARY_BACKGROUND_BLUE
    }
})
export default OnBoardingNav
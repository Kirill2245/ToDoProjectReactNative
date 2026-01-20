import { COLORS } from "@/constants/ColorConst";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import CircularSkeleton from "./CircularSkeleton";

type StyledTextProps = TextProps & {
    isShowSkeleton?:boolean;
    variant?:  "title" | "subtitle" | "button-text" | "titleAutor" | "button-text-light" | "small" | "link"
};
const StyledText: React.FC<StyledTextProps> = ({isShowSkeleton = false,variant, style ,...props}) => {
      const [appIsReady, setAppIsReady] = useState(false);

        useEffect(() => {
            async function prepare() {
            try {
                await Font.loadAsync({
                    'EuclidCircularA-Medium': require('../assets/fonts/Euclid CircularA-Medium.ttf'),
                });
                
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
            }

            prepare();
        }, []);

        useEffect(() => {
            if (appIsReady) {
                SplashScreen.hideAsync();
            }
        }, [appIsReady]);

        if (!appIsReady && isShowSkeleton) {
            return <CircularSkeleton></CircularSkeleton> 
        }
    return <Text 
                {...props}
                style = {[
                    style,
                    styles.base,
                    variant === "button-text" ? styles.button_text : null,
                    variant === 'title' ? styles.title : null,
                    variant === 'subtitle' ? styles.subtitle : null,
                    variant === 'titleAutor' ? styles.titleAutor : null,
                    variant === 'button-text-light' ? styles.button_text_light : null,
                    variant === 'small' ? styles.small : null,
                    variant === 'link' ? styles.link : null
                ]}
            />
}
const styles = StyleSheet.create({
    base:{
        color:COLORS.TITLE_TEXT_COLOR,
        fontSize:20,
        fontWeight:"bold",
        fontFamily:"EuclidCircularA-Medium",
        textAlign:"center"
    },
    title:{
       fontSize:30, 
       letterSpacing:0.05,
       lineHeight:40
    },
    button_text:{
        color:COLORS.PRIMARY_BUTTON_TEXT_COLOR,
        fontWeight:"600",
        flex:1
    },
    button_text_light:{
        color:COLORS.TITLE_TEXT_COLOR,
        fontWeight:"600",
        flex:1,
        letterSpacing:0.02,
        lineHeight:24

    },
    subtitle:{
        fontSize:16,
        opacity:0.75,
        letterSpacing:0.02,
        lineHeight:24
    },
    titleAutor:{
       fontSize:30, 
       letterSpacing:0.05,
       lineHeight:40,
       color:COLORS.DEEP_BLUE
    },
    small:{
        fontSize:12,
        letterSpacing:1.2,
        lineHeight:18,
        textAlign:'left',
    },
    link:{
        fontSize:12,
        letterSpacing:1.2,
        lineHeight:18,
        color:COLORS.PRIMARY_BUTTON_COLOR,
        textDecorationLine:'underline'
    },
})
export default StyledText
import { COLORS } from "@/constants/ColorConst";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import CircularSkeleton from "./CircularSkeleton";

type StyledTextProps = TextProps & {
    isShowSkeleton?:boolean;
    variant?:
    "title" | 
    "subtitle" | 
    "button-text" | 
    "titleAutor" | 
    "button-text-light" | 
    "small" | 
    "medium" |
    "link" |
    "lable" |
    "small_grey" |
    "small_active" 
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
                    styles.basefont,
                    !style ? styles.base : style,
                    variant === "button-text" ? styles.button_text : null,
                    variant === 'title' ? styles.title : null,
                    variant === 'subtitle' ? styles.subtitle : null,
                    variant === 'titleAutor' ? styles.titleAutor : null,
                    variant === 'button-text-light' ? styles.button_text_light : null,
                    variant === 'small' ? styles.small : null,
                    variant === 'small_grey' ? styles.small_grey : null,
                    variant === 'small_active' ? styles.small_active :null,
                    variant === 'medium' ? styles.medium : null,
                    variant === 'link' ? styles.link : null,
                    variant === 'lable' ? styles.label : null,
                ]}
            />
}
const styles = StyleSheet.create({
    basefont:{
        fontFamily:"EuclidCircularA-Medium",
    },
    base:{
        color:COLORS.TITLE_TEXT_COLOR,
        fontSize:20,
        fontWeight:400,
    },
    title:{
       fontSize:30, 
       letterSpacing:0.05,
       lineHeight:40,
       textAlign:"center",
       fontWeight:'bold'
    },
    button_text:{
        color:COLORS.PRIMARY_BUTTON_TEXT_COLOR,
        fontWeight:"600",
        flex:1,
        textAlign:"center"
    },
    button_text_light:{
        color:COLORS.TITLE_TEXT_COLOR,
        fontWeight:"600",
        flex:1,
        letterSpacing:0.02,
        lineHeight:24,
        textAlign:"center"

    },
    subtitle:{
        fontSize:16,
        opacity:0.75,
        letterSpacing:0.02,
        lineHeight:24,
        textAlign:"center"
    },
    titleAutor:{
       fontSize:30, 
       letterSpacing:0.05,
       lineHeight:40,
       color:COLORS.DEEP_BLUE,
       textAlign:"center"
    },
    small:{
        fontSize:12,
        letterSpacing:1.2,
        lineHeight:18,
        textAlign:'left',
    },
    small_grey:{
        fontSize:12,
        letterSpacing:1.2,
        lineHeight:18,
        color:COLORS.MID_GREY,
        textAlign:"center"
    },
    small_active:{
        fontSize:12,
        letterSpacing:1.2,
        lineHeight:18,
        color:COLORS.PRIMARY_BUTTON_COLOR,
        textAlign:"center"
    },
    medium:{
        fontSize:14,
        letterSpacing:0.2,
        lineHeight:21,
        textAlign:'left'
    },
    link:{
        fontSize:12,
        letterSpacing:1.2,
        lineHeight:18,
        color:COLORS.PRIMARY_BUTTON_COLOR,
        textDecorationLine:'underline',
        textAlign:"center"
    },
    label:{
        fontSize:12,
        letterSpacing:1.2,
        lineHeight:18,
        color:COLORS.PRIMARY_PLACEHOLDER,
        textAlign:'left'
    }
})
export default StyledText
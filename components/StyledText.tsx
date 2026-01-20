import { COLORS } from "@/constants/ColorConst";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextProps } from "react-native";

type StyledTextProps = TextProps & {
    variant?:  "title" | "subtitle" | "button-text"
};
const StyledText: React.FC<StyledTextProps> = ({variant, style ,...props}) => {
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

        if (!appIsReady) {
            return null; 
        }
    return <Text 
                {...props}
                style = {[
                    style,
                    styles.base,
                    variant === "button-text" ? styles.button_text : null,
                    variant === 'title' ? styles.title : null,
                    variant === 'subtitle' ? styles.subtitle : null
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
       letterSpacing:0.05
    },
    button_text:{
        color:COLORS.PRIMARY_BUTTON_TEXT_COLOR,
        fontWeight:"600",
        flex:1
    },
    subtitle:{
        fontSize:16,
        opacity:0.75
    }
})
export default StyledText
import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import StyledText from "./StyledText";

type OnBoardingContentProps = {
    image?:ImageSourcePropType;
    title:string;
    subTitle:string;
}
const OnBoardingContent:React.FC<OnBoardingContentProps> = ({image,title,subTitle}) => {
    return(
        <View style = {styles.contain}>
            <Image
                source = {image}
            />
            <View style = {styles.containText}>
                <StyledText variant = "title"> {title} </StyledText>
                <StyledText variant = "subtitle"> {subTitle} </StyledText>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    contain:{
        gap:55,
        paddingHorizontal:30,
        alignItems:"center",
        justifyContent:"center",
        flex:1
    },
    containText:{
        gap:20
    }
})
export default OnBoardingContent;
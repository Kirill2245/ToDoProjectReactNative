import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { useAuth } from "@/context/AuthContext";
import { useMainContent } from "@/context/MainContentContext";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Form from "./Form";

const LoginForm = () => {
    const {openSignUpForm} = useAuth()
    const [isError, setIsError] = useState<boolean>(true)
    const {openFeature} = useMainContent()
    const {closeAuthForm} = useAuth()
    const updateStateError = (state:boolean):void => {
        setIsError(state)
    }
    const handleStart = () => {
            openFeature()
            closeAuthForm()
        }
    return (
        <View style = {styles.containForm}>
            <StyledText variant="titleAutor" style = {{marginBottom:46}}>Welcome Back!</StyledText>
            <StyledButton 
                lable="Contiue with Google" 
                image={require('../../../assets/images/googleLogo.jpg')} 
                variant="largeLight"
                style = {{marginBottom:24}}
            />
            <View style = {styles.styledContain}>
                <View style = {styles.row}></View>
                <StyledText variant="small">Or</StyledText>
                <View style = {styles.row}></View>
            </View>
            <Form updateStateError={(state:boolean) => updateStateError(state)}/>
            <StyledButton 
                lable="Login" 
                icon="arrow-forward-outline" 
                sizeIcon={24} 
                style = {[{marginTop:24, marginBottom:42},isError && {opacity:0.6} ]} variant="large"
                disabled = {isError }
                onPress={handleStart}
            />
            <View style = {styles.textContainer}>
                <StyledText variant="small">Don’t have an account yet?</StyledText>
                <StyledText variant="link" onPress={openSignUpForm}>Sign up</StyledText>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    containForm:{
       flex:1,
       alignItems:'center',
    },
    styledContain:{
        gap:6,
        flexDirection:'row',
        width:'100%',
        height:18,
        alignItems:'center',
        marginBottom:16
    },
    row:{
       flex:1,
       maxHeight:0,
       borderWidth:0.5,
       borderColor:'#B0B2C3',
       opacity:0.6
    },
    textContainer:{
        width:312,
        flexDirection:'row',
        gap:5,
        borderTopWidth:1,
        borderTopColor:'rgba(176, 178, 195, 0.6)',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:16
    }
})
export default LoginForm
import StyledButton from "@/components/StyledButton";
import StyledCheckBox from "@/components/StyledCheckBox";
import StyledText from "@/components/StyledText";
import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Form from "./Form";
type SignUpFormPromise = {
    onShowSetting:() => void
}
const SignUpForm:React.FC<SignUpFormPromise> = ({onShowSetting}) => {
    const {openLoginForm,closeSignUpForm} = useAuth()
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(true)
    const updateStateError = (state:boolean):void => {
        setIsError(state)
    }
    const showSettingProfile = () => {
        closeSignUpForm()
        onShowSetting()
    }
    return(
        <View style = {styles.containForm}>
            <StyledText variant="titleAutor" style = {{marginBottom:46}}>Start your journey!</StyledText>
            <StyledButton 
                lable="Sign Up with Google" 
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
                lable="Sign Up" 
                icon="arrow-forward-outline" 
                sizeIcon={24} 
                style = {[{marginTop:24, marginBottom:42}, (isError || !isChecked) && {opacity:0.7}]} variant="large"
                disabled = {isError || !isChecked}
                onPress={showSettingProfile}
            />
            <View style = {styles.boxPolicy}>
                <StyledCheckBox checked = {isChecked} onCheck={() => setIsChecked(!isChecked)}/>
                <StyledText variant="small" style = {{opacity:0.6}}>By continuing you accept our Privacy Policy and Term of Use</StyledText>
            </View>
            <View style = {styles.textContainer}>
                <StyledText variant="small">Already have an account?</StyledText>
                <StyledText variant="link" onPress={openLoginForm}>Login</StyledText>
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
    boxPolicy:{
        borderBottomWidth:0.5,
        borderBottomColor:'rgba(176, 178, 195, 0.6)',
        flexDirection:'row',
        gap:8,
        paddingBottom:16,
        height:52,
        width:312,
        marginBottom:16
    },
    textContainer:{
        flexDirection:'row',
        gap:5
    }
})
export default SignUpForm
import StyledInputLable from "@/components/StyledInputLable";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ColorConst";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AcceptSvg from "./AcceptSvg";
import ErrorSvg from "./ErrorSvg";
type FormPromise = {
    updateStateError:(state:boolean) => void
}
const Form:React.FC<FormPromise> = ({updateStateError}) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const [onEmail, setOnEmail] = useState<string>('')
    const [onUserName,setUserName] = useState<string>('')
    const [onPassword, setOnPassword] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(true)
    const [detalError, setDetallError] = useState({
        errorCountCharacters:onPassword.length < 8,
        nullPassword:onPassword.length == 0
    })
    useEffect(() => {
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(onEmail);
        const allFieldsFilled = onEmail && onUserName && onPassword
        setIsError(!allFieldsFilled || !isEmailValid)
        setDetallError({
            errorCountCharacters:onPassword.length < 8,
            nullPassword:onPassword.length == 0
        })
    },[onEmail,onUserName,onPassword])
    useEffect(() => {
        updateStateError(isError)
    },[updateStateError,isError])
    return (
        <View style = {styles.Form}>
            <StyledInputLable 
                customLable="E-mail"
                placeholder = "Enter your e-mail here" 
                value={onEmail}
                onChangeText={setOnEmail}
                leftIcon = {
                    <Ionicons
                        name="mail-outline"
                        size={20} 
                        color={COLORS.PRIMARY_PLACEHOLDER}
                    />
                }
            />
            <StyledInputLable 
                customLable="Username"
                placeholder = "Type in your username" 
                value={onUserName}
                onChangeText={setUserName}
                leftIcon = {
                    <Ionicons
                        name="person-outline"
                        size={20} 
                        color={COLORS.PRIMARY_PLACEHOLDER}
                    />
                }
            />
            <StyledInputLable 
                customLable="Password"
                placeholder = "Place the password here" 
                secureTextEntry = {!isShowPassword}
                value={onPassword}
                onChangeText={setOnPassword}
                leftIcon = {
                    <Ionicons
                        name="lock-closed-outline"
                        size={24} 
                        color={COLORS.PRIMARY_PLACEHOLDER}
                    />
                }
                rightIcon = {
                    <Ionicons
                        name={isShowPassword ? "eye-outline":"eye-off-outline"}
                        size={24} 
                        color={COLORS.PRIMARY_PLACEHOLDER}
                        onPress={() => setIsShowPassword(!isShowPassword)}
                    />
                }
                
            />
            <View style = {styles.stateErrorContain}>
                <View style = {styles.stateBox}>
                    {detalError.errorCountCharacters ? <ErrorSvg/> : <AcceptSvg/>}
                    
                    <StyledText variant="small" style = {{opacity:0.6}}>At least 8 characters</StyledText>
                </View>
                <View style = {styles.stateBox}>
                    {detalError.nullPassword ? <ErrorSvg/> : <AcceptSvg/>}
                    <StyledText variant="small" style = {{opacity:0.6}}>At least one number or symbol</StyledText>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Form:{
        width:318,
        height:'auto',
        gap:12
    },
    stateErrorContain:{
        height:44,
        marginTop:4,
        gap:12
    },
    stateBox:{
        flexDirection:'row',
        gap:9
    }
})
export default Form
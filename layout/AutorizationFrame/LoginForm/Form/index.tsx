import StyledCheckBox from "@/components/StyledCheckBox";
import StyledInputLable from "@/components/StyledInputLable";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ColorConst";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
type FormPromise = {
    updateStateError:(state:boolean) => void
}
const Form:React.FC<FormPromise> = ({updateStateError}) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const [onPassword, setOnPassword] = useState<string>('')
    const [onUserName,setUserName] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(true)
    useEffect(() => {
            const allFieldsFilled =  onUserName && onPassword 
            setIsError(!allFieldsFilled )

        },[onUserName,onPassword])
    useEffect(() => {
        updateStateError(isError)
    },[updateStateError,isError])
    return(
        <View style = {styles.form}>
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
            <View style = {styles.helpersPanel}>
                <View style = {styles.containRemember}>
                    <StyledCheckBox checked = {isChecked} onCheck={() => setIsChecked(!isChecked)}/>
                    <StyledText variant="small" style = {{opacity:0.6}}>Remember Me</StyledText>
                </View>
                <StyledText variant="link">Forgot your password?</StyledText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    form:{
        width:318,
        height:'auto',
        gap:12
    },
    helpersPanel:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:7
    },
    containRemember:{
        flexDirection:'row',
        gap:8
    }
})
export default Form;
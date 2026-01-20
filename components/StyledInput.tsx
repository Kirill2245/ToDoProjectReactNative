import { COLORS } from "@/constants/ColorConst";
import React from "react";
import { StyleSheet } from "react-native";
import { Input, InputProps } from 'react-native-elements';

type StyledInputProps = InputProps 

const StyledInput: React.FC<StyledInputProps> = ({rightIcon, leftIcon, containerStyle, inputContainerStyle, inputStyle, ...props }) => {
    return (
        <Input
            {...props}
            containerStyle={[
                styles.containerBase,
                containerStyle,
            ]}
            leftIcon={leftIcon}
            inputContainerStyle={[
                styles.inputContainerBase,
                inputContainerStyle,
            ]}
            inputStyle={[
                styles.inputBase,
                inputStyle,
            ]}
            rightIcon = {rightIcon}
            placeholderTextColor= {COLORS.PRIMARY_PLACEHOLDER}
            underlineColorAndroid="transparent"
        />
        
    );
            
};



const styles = StyleSheet.create({
    containerBase: {
        width: '100%',
        paddingHorizontal: 0,
    },
    inputContainerBase: {
        width: '100%',
        height: 48,
        borderWidth: 1,
        borderColor: '#E5E6EE',
        borderRadius: 14,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0,
    },
    inputBase: {
        fontSize: 16,
        color: '#000000',
        textDecorationLine: 'none',
    },
    conatinInputLable:{
        width:'100%'
    }
});

export default StyledInput;
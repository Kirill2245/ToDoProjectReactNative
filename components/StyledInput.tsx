import { COLORS } from "@/constants/ColorConst";
import React from "react";
import { StyleSheet } from "react-native";
import { Input, InputProps } from 'react-native-elements';

type StyledInputProps = InputProps & {
    variant?:'stells' | 'craeterTask'
}

const StyledInput: React.FC<StyledInputProps> = (
    {
        variant,
        rightIcon,
        leftIcon,
        containerStyle,
        inputContainerStyle,
        inputStyle,
        ...props 
    }
) => {
    const COLOR_PLAYSHOLDER = variant === 'craeterTask' ? COLORS.TITLE_TEXT_COLOR : COLORS.PRIMARY_PLACEHOLDER
    return (
        <Input
            {...props}
            containerStyle={[
                styles.containerBase,
                containerStyle,
                variant === 'stells' ? styles.stellsContainerBase : null
            ]}
            leftIcon={leftIcon}
            inputContainerStyle={[
                styles.inputContainerBase,
                inputContainerStyle,
                variant === 'stells' ? styles.stells : null,
                variant === 'craeterTask'? styles.craeterTaskInputContainer: null
            ]}
            inputStyle={[
                styles.inputBase,
                inputStyle,
                variant === 'stells' ? styles.stellsinputBase : null
            ]}
            rightIcon = {rightIcon}
            placeholderTextColor= {COLOR_PLAYSHOLDER}
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
        borderColor: '#ffffff00',
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
    },
    stells:{
        backgroundColor: '#rgba(201, 26, 26, 0)',
        textAlign:'center',
        paddingHorizontal:10
    },
    stellsContainerBase:{
        width:'auto',
        minWidth:98,
        height:26
    },
    stellsinputBase:{
        fontSize: 20,
    },
    craeterTaskInputContainer:{
        borderBottomWidth: 1, 
        borderBottomColor: COLORS.MID_GREY ,
        borderRadius:0 , 
        height:34,
        paddingHorizontal:4
    }

});

export default StyledInput;
import { COLORS } from "@/constants/ColorConst";

import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import StyledText from "./StyledText";
type StyledButtonProps = TouchableOpacityProps & {
    lable?:string;
    icon?: React.ComponentProps<typeof Ionicons>["name"];
    variant?:"small" | "medium" | "large" | "circule" | "square";
    sizeIcon?:number 
};
const StyledButton: React.FC<StyledButtonProps> = ({sizeIcon = 41.82 ,variant,lable,icon, disabled,...props}) => {
    return (
        <TouchableOpacity
            {...props}
            disabled = {disabled}
            style = {[
                styles.base,
                variant === "square" ? styles.square : null
            ]}
        >
            {lable && <StyledText variant="button-text">{lable}</StyledText>}
            {icon && <Ionicons name={icon} size = {sizeIcon} color={COLORS.PRIMARY_BUTTON_TEXT_COLOR}/>}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    base:{
        borderRadius:21.45,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:10,
        paddingVertical:5,
        boxSizing:"border-box",
        backgroundColor:COLORS.PRIMARY_BUTTON_COLOR,
        flexDirection:"row",
        elevation: 20,
        shadowColor: COLORS.PRIMARY_BUTTON_COLOR,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 3.84,
    },
    square:{
        width:92.86,
        height:92.86
    }
})
export default StyledButton
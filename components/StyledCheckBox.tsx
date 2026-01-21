
import { COLORS } from "@/constants/ColorConst";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

type  StyledCheckBoxProps = {
    checked:boolean;
    onCheck: () => void;
    variant?: "circle" | "square" | "circleIcons"
}

const StyledCheckBox: React.FC<StyledCheckBoxProps> = ({onCheck,checked, variant = "square"}) => {
    return (
        <TouchableOpacity 
        onPress={onCheck} 
        style = {[
                variant === "square" ? styles.square : null,
                variant === "circle" ? styles.circle : null,
                variant === 'circleIcons' ? styles.circleIcons : null,
                (checked && (variant === "circle")) ? styles.isChecked : null
            ]}
        >
            {(checked && variant === "square") &&<Ionicons 
                name={"checkmark-outline"} 
                size={13} 
                color={"blue"}
            />}
            {
                variant === "circleIcons" &&
                <Ionicons
                    name={checked ? "checkmark-circle" : "ellipse-outline"} 
                    size={32} 
                    color={checked ? COLORS.SUCCESS : COLORS.TITLE_TEXT_COLOR}
                />
            }

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    square:{
        backgroundColor:"#ffff", 
        width:16, 
        height:16,
        borderWidth:1,
        borderColor:COLORS.MID_GREY,
        borderRadius:3,
        alignItems:'center',
        justifyContent:'center'
    },
    circle:{
        backgroundColor:COLORS.LIGHT_GREY, 
        width:24, 
        height:24,
        borderRadius:'50%'
    },
    isChecked:{
        backgroundColor:COLORS.PRIMARY_BUTTON_COLOR, 
    },
    circleIcons:{

    }
})
export default StyledCheckBox
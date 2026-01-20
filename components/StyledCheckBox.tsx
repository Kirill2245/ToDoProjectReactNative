
import { COLORS } from "@/constants/ColorConst";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

type  StyledCheckBoxProps = {
    checked:boolean;
    onCheck: () => void;
}

const StyledCheckBox: React.FC<StyledCheckBoxProps> = ({onCheck,checked}) => {
    return (
        <TouchableOpacity onPress={onCheck} style = {styles.base}>
            {checked &&<Ionicons 
                name={"checkmark-outline"} 
                size={13} 
                color={"blue"}
            />}

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    base:{
        backgroundColor:"#ffff", 
        width:16, 
        height:16,
        borderWidth:1,
        borderColor:COLORS.MID_GREY,
        borderRadius:3,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default StyledCheckBox
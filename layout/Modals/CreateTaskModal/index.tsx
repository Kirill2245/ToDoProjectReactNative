import StyledButton from "@/components/StyledButton";
import StyledModal from "@/components/StyledModal";
import { StyleSheet, View } from "react-native";

type CreateTaskModalProps = {
    isOpen:boolean;
    onClose: () => void;
}
const CreateTaskModal:React.FC<CreateTaskModalProps> = ({isOpen,onClose}) => {
    
    return (
        <StyledModal isOpen = {isOpen} onClose={onClose}>
            <View style = {styles.contain}>
                <View style = {styles.controlPanel}>
                    <StyledButton image={require('../../../assets/images/back.png')} onPress={() => onClose()} variant="closeModal"></StyledButton>
                    <StyledButton image={require('../../../assets/images/finish.png')} onPress={() => onClose()} variant="closeModal"></StyledButton>
                </View>
            </View>
        </StyledModal>
    );
}

const styles = StyleSheet.create({
    contain:{
        flex:1,
    },
    controlPanel:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})
export default CreateTaskModal
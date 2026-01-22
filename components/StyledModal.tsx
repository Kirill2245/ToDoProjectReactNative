
import { COLORS } from "@/constants/ColorConst";
import React from "react";
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

type StyledModalProps = {
    isOpen:boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const StyledModal: React.FC<StyledModalProps> = ({isOpen, onClose, children}) => {
    return(
        <Modal
            visible = {isOpen}
            onRequestClose={onClose}
            animationType="fade"
            transparent = {true}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style = {styles.modalBackground}>
                    <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
                        <View style = {styles.content}>
                            {children}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground:{
        flex:1,
        backgroundColor:"rgba(0, 0, 0, 0.27)",
        justifyContent:"flex-end",
        alignItems:"center"
    },
    content:{
        paddingVertical:25,
        paddingHorizontal:21,
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34,
        width:"100%",
        height:"95%",
        backgroundColor:COLORS.MODAL_BG
    }
})
export default StyledModal
import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";

const Reflect = () => {
    return (
        <View style = {styles.section}>
            <StyledText>Reflect</StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    section:{
        flex:1,
    },
})
export default Reflect
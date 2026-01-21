import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";

const Track = () => {
    return (
        <View style = {styles.section}>
            <StyledText>Track</StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    section:{
        flex:1,
    },
})
export default Track
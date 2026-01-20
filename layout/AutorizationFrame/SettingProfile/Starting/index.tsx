import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";

const Starting = () => {
    return (
        <View style = {styles.contain}>
            <StyledText variant="titleAutor">Well done!</StyledText>
        </View>
    );
}
const styles = StyleSheet.create({
    contain:{
        flex:1,
        width:'100%',
        paddingVertical:42,
    }
})
export default Starting
import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";
import NavMenu from "./NavMenu";

const Feature = () => {
    return (
        <View style = {styles.featureContain}>
            <StyledText>Feature !!!!</StyledText>
            <NavMenu/>
        </View>
    );
}
const styles = StyleSheet.create({
    featureContain:{
        flex:1,
        position:'relative',
    }
})
export default Feature
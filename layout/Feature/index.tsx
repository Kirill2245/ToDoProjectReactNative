import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NavMenu from "./NavMenu";

const Feature = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style = {[styles.featureContain, {paddingBottom:insets.bottom}]} >
            <View style = {styles.contain}>
                <StyledText>Feature !!!!</StyledText>
                <NavMenu/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    featureContain:{
        flex:1,
        position:'relative',
        backgroundColor:'#fff',
        boxSizing:'border-box'
    },
    contain:{
        flex:1,
        position:'relative',
        backgroundColor:'#ffff'
    }
})
export default Feature
import StyledButton from "@/components/StyledButton";
import { COLORS } from "@/constants/ColorConst";

import { StyleSheet, View } from "react-native";

const OnBoardingNav = () => {
    return (
        <View style = {styles.navContain}>
            <View style = {styles.navMenu}>
                <StyledButton  variant="square" icon="arrow-forward"></StyledButton>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    navContain:{
        width:"100%",
        height:"100%",
        backgroundColor:COLORS.PRIMARY_BACKGROUND_BLUE,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        gap:66
    },
    navMenu:{

    }
})
export default OnBoardingNav
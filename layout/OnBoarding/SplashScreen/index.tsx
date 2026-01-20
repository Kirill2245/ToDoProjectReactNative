import StyledText from '@/components/StyledText';
import { GRADIENT } from '@/constants/ColorConst';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from "react-native";
const SplashScreen = () => {
    return (
        <LinearGradient
            colors={GRADIENT.PRYMARY.LIST_COLORS }
            locations={GRADIENT.PRYMARY.COUNT_COLORS }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style = {styles.container}>
                <StyledText>hi!</StyledText>
                <StyledText>take a deep breath</StyledText>
            </View>
        </LinearGradient>

    );
};

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center"
    }
})

export default SplashScreen;
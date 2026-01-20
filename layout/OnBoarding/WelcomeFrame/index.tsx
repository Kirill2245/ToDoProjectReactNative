import StyledButton from '@/components/StyledButton';
import { GRADIENT } from '@/constants/ColorConst';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from "react-native";
const WelcomeFrame = () => {
    return (
        <LinearGradient
            colors={GRADIENT.PRYMARY.LIST_COLORS }
            locations={GRADIENT.PRYMARY.COUNT_COLORS }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style = {{flex:1}}
        >
            <View style = {styles.container}>
                <StyledButton lable='Explore' icon="arrow-forward" sizeIcon={25} variant='large'></StyledButton>
            </View>
        </LinearGradient>

    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default WelcomeFrame;
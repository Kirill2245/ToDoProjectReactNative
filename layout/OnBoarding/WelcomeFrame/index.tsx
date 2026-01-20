import StyledButton from '@/components/StyledButton';
import StyledText from '@/components/StyledText';
import { GRADIENT } from '@/constants/ColorConst';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, View } from "react-native";
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
                <View style = {styles.mainContentContain}>
                    <Image source={require('../../../assets/images/logosample.png')}/>
                    <View style = {styles.textContain}>
                        <StyledText variant='title' style = {{width:298}}>Welcome to One Step at a Time</StyledText>
                        <StyledText variant='subtitle'>Just take a look and take action!</StyledText>
                    </View>
                </View>
                <StyledButton lable='Explore' icon="arrow-forward" sizeIcon={25} variant='large'></StyledButton>
            </View>
        </LinearGradient>

    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        gap:208,
        paddingTop:240
    },
    mainContentContain:{
        gap:40,
        alignItems:'center',
        justifyContent:"center"
    },
    textContain:{
        gap:24
    }
})

export default WelcomeFrame;
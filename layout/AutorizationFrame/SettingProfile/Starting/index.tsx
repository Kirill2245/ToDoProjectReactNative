import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { useAuth } from "@/context/AuthContext";
import { useMainContent } from "@/context/MainContentContext";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";

const Starting = () => {
    const {openFeature} = useMainContent()
    const {closeAuthForm} = useAuth()
    const handleStart = () => {
        openFeature()
        closeAuthForm()
    }
    return (
        <View style = {styles.contain}>
            <StyledText variant="titleAutor">Well done!</StyledText>
            <StyledText 
                variant="subtitle" 
                style = {{marginHorizontal:50, marginBottom:212}}
            >
                Take a step closer to your journey of a better and healthy life.
            </StyledText>
            <Image source={require('../../../../assets/images/Group4.png')} style = {styles.img}/>
            <StyledButton
                lable="Let’s Start" 
                icon="arrow-forward-outline" 
                sizeIcon={24} 
                style = {styles.btn}
                onPress={handleStart}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    contain:{
        flex:1,
        width:'100%',
        paddingVertical:42,
        paddingHorizontal:4,
        alignItems:'center'
    },
    img:{
        width:223,
        height:220,
        marginBottom:118
    },
    btn:{
       height:60,
       paddingHorizontal: 22
    }
})
export default Starting
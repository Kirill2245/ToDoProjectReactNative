import { GRADIENT } from '@/constants/ColorConst';
import { useAuth } from '@/context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from "react-native";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';


const AutorizationFrame = () => {
    const {isLoginFormOpen, isSignUpOpen} = useAuth()
    return (
        <LinearGradient
            colors={GRADIENT.PRYMARY.LIST_COLORS }
            locations={GRADIENT.PRYMARY.COUNT_COLORS }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style = {{flex:1}}
        >
            <View style = {styles.container}>
                {isLoginFormOpen && <LoginForm/>}
                {isSignUpOpen && <SignUpForm/>}
            </View>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:39,
        paddingTop: 62,
        paddingBottom:81,
    },

})

export default AutorizationFrame
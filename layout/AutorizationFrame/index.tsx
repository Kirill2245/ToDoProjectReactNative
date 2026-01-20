import { GRADIENT } from '@/constants/ColorConst';
import { useAuth } from '@/context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { StyleSheet, View } from "react-native";
import LoginForm from './LoginForm';
import SettingProfile from './SettingProfile';
import SignUpForm from './SignUpForm';


const AutorizationFrame = () => {
    const {isLoginFormOpen, isSignUpOpen} = useAuth()
    const [isShowSettingProfile, setIsShowSettingProfile] = useState(false)
    return (
        <LinearGradient
            colors={GRADIENT.PRYMARY.LIST_COLORS }
            locations={GRADIENT.PRYMARY.COUNT_COLORS }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style = {{flex:1}}
        >
            <View style = {isShowSettingProfile ? styles.containerSetting : styles.containerAuthor}>
                {isLoginFormOpen && <LoginForm/>}
                {isSignUpOpen && <SignUpForm onShowSetting={() => setIsShowSettingProfile(true)}/>}
                {isShowSettingProfile && <SettingProfile/>}
            </View>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    containerAuthor:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:39,
        paddingTop: 62,
        paddingBottom:81,
    },
    containerSetting:{
        flex:1
    },
})

export default AutorizationFrame
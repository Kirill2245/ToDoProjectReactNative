
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import OnBoardingNav from "./OnBoardingNav";
import SplashScreen from "./SplashScreen";
import WelcomeFrame from "./WelcomeFrame";

const OnBoarding = () => {
    const [showSplash, setShowSplash] = useState<boolean>(true)
    const [isShowWelcomeFarme,setIsShowWelcomeFarme] = useState<boolean>(false)
    const handleChildData = (data:boolean):void => {
        setIsShowWelcomeFarme(data)
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false)
        },10000)
        return () => clearTimeout(timer);
    },[])
    return (
        <View style = {styles.container}>
             {isShowWelcomeFarme ? 
                <WelcomeFrame/> : 
                showSplash ? 
                <SplashScreen /> : 
                <OnBoardingNav 
                    onSendData={(data:boolean) => handleChildData(data)}>
                </OnBoardingNav>}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
    }
})

export default OnBoarding;
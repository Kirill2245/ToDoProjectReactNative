
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import OnBoardingNav from "../OnBoardingNav";
import SplashScreen from "../SplashScreen";
const OnBoarding = () => {
    const [showSplash, setShowSplash] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false)
        },10000)
        return () => clearTimeout(timer);
    },[])
    return (
        <View style = {styles.container}>
             {showSplash ? <SplashScreen /> : <OnBoardingNav></OnBoardingNav>}
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
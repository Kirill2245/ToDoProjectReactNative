import OnBoarding from "@/layout/OnBoarding";
import { StatusBar, StyleSheet, View } from "react-native";

export default function Index(){
    return(
        <View style = {styles.mainScreenContain}>
            <StatusBar
            barStyle={"dark-content"}
            />
            <OnBoarding/>
        </View>
    )
};

const styles = StyleSheet.create({
    mainScreenContain:{
        
    }
})
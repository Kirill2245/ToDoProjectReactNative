import OnBoarding from "@/layout/OnBoarding";
import { StyleSheet, View } from "react-native";

export default function Index(){
    return(
        <View style = {styles.mainScreenContain}>
            <OnBoarding/>
        </View>
    )
};

const styles = StyleSheet.create({
    mainScreenContain:{
    }
})
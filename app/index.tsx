import Main from "@/layout/Main";
import { StatusBar, StyleSheet, View } from "react-native";

export default function Index(){
    return(
        <View style = {styles.mainScreenContain}>
            <StatusBar
            barStyle={"dark-content"}
            />
            <Main/>
        </View>
    )
};

const styles = StyleSheet.create({
    mainScreenContain:{
        flex:1
    }
})
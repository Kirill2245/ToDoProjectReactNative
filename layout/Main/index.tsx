import { useAuth } from '@/context/AuthContext';
import { StyleSheet, View } from "react-native";
import AutorizationFrame from '../AutorizationFrame';
import OnBoarding from "../OnBoarding";
const Main = () => {
    const {isAuthFormOpen} = useAuth()
    return(
        <View style = {styles.container}>
            {isAuthFormOpen ? <AutorizationFrame/> : <OnBoarding/>}
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },

})
export default Main
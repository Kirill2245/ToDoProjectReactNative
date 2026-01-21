import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";

const Profile = () => {
    return (
        <View style = {styles.section}>
            <StyledText>Profile</StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    section:{
        flex:1,
    },
})
export default Profile
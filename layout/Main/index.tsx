import { useAuth } from '@/context/AuthContext';
import { useMainContent } from '@/context/MainContentContext';
import { StyleSheet, View } from "react-native";
import AutorizationFrame from '../AutorizationFrame';
import Feature from '../Feature';
import OnBoarding from "../OnBoarding";

const Main = () => {
    const { isAuthFormOpen, isAuthUser } = useAuth();
    const { isShowFeature } = useMainContent();

    const renderContent = () => {
        if (isShowFeature || isAuthUser) {
            return <Feature />; 
        } else if (isAuthFormOpen) {
            return <AutorizationFrame />; 
        } else {
            return <OnBoarding />; 
        }
    };

    return (
        <View style={styles.container}>
            {renderContent()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Main;
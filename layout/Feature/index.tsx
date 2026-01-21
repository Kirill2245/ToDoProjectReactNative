import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CreateTaskModal from "../Modals/CreateTaskModal";
import Home from "../Section/Home";
import Profile from "../Section/Profile";
import Reflect from "../Section/Reflect";
import Track from "../Section/Track";
import NavMenu from "./NavMenu";

const Feature = () => {
    const insets = useSafeAreaInsets();
    const [selectSection, setSelectSection] = useState<number>(0)
    const [isOpenModalCreate,setIsOpenModalCreate] = useState<boolean>(false)
    const renderSection = ():React.ReactNode => {
        switch (selectSection){
            case 0:
                return <Home/>
            case 1:
                return <Track/>
            case 2:
                return <Reflect/>
            case 3:
                return <Profile/>
        }
    }
    const onSelectSection = (selectDate:number):void => {
        setSelectSection(selectDate)
    }
    return (
        <View style = {[styles.featureContain, {paddingBottom:insets.bottom}]} >
            {renderSection()}
            <CreateTaskModal isOpen = {isOpenModalCreate} onClose={() => setIsOpenModalCreate(false)}/>
            <View style = {styles.contain}>
                <NavMenu onSelect={(selectDate:number) => onSelectSection(selectDate)} onOpenModalCreate={() => setIsOpenModalCreate(true)}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    featureContain:{
        flex:1,
        position:'relative',
        backgroundColor:'#fff',
        boxSizing:'border-box'
    },
    contain:{
        position:'relative',
        backgroundColor:'#fff'
    }
})
export default Feature
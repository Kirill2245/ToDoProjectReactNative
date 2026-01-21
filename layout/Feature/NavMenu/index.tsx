import StyledButton from "@/components/StyledButton";
import { COLORS } from "@/constants/ColorConst";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import HomeIcon from "./Icon/HomeIcon";
import ReflectIcon from "./Icon/ReflectIcon";
import SettingsIcon from "./Icon/SettingsIcon";
import UserIcon from "./Icon/UserIcon";

interface NavMenuProps {
    onSelect:(data:number) => void;
}
const NavMenu:React.FC<NavMenuProps> = ({onSelect}) => {
    const [isBtnActive, setIsBtnActive] = useState<number>(0)
    const btnList = [
        {
            lable:'Home',
            icon:<HomeIcon active = {isBtnActive == 0}/>
        },
        {
            lable:'Track',
            icon:<SettingsIcon  active = {isBtnActive == 1}/>
        },
        {
            lable:'Reflect',
            icon:<ReflectIcon  active = {isBtnActive == 2}/>
        },
        {
            lable:'Profile',
            icon:<UserIcon  active = {isBtnActive == 3}/>
        },
    ]
    useEffect(() => {
        onSelect(isBtnActive)
    },[isBtnActive,onSelect])
    return (
        <View style = {styles.menuContain}>
            <View style = {styles.relativeContain}>
                <StyledButton icon="add-outline" variant="circule" style = {styles.addBtn} />
                <View style = {styles.navMenuBox}>
                    {btnList.map((item,index) => (
                        <StyledButton 
                            lable={item.lable} 
                            key = {index}
                            variant="menuBtn" 
                            isActive = {index == isBtnActive}
                            onPress={() => setIsBtnActive(index)}
                        >
                            {item.icon}
                        </StyledButton>))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    menuContain:{
        width:'100%',
        height:62,
        position:'absolute',
        bottom:0,
        zIndex:999,
    },
    relativeContain:{
        position:'relative',
        flex:1,
        backgroundColor:'#ffff',
    },
    addBtn:{
        position:'absolute',
        top:-28,
        left:'50%',
        transform: [{ translateX: '-50%' }],
        opacity:1,
        zIndex:1000
    },
    navMenuBox:{
        width:'100%',
        height:62,
        flexDirection:'row',
        borderTopWidth:0.9,
        borderTopColor:COLORS.MID_GREY,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: -4, 
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        gap:0
    }
})
export default NavMenu
import StyledButton from "@/components/StyledButton";
import { COLORS } from "@/constants/ColorConst";

import OnBoardingContent from "@/components/OnBoardingContent";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MySvgComponent from "./SvgNav";

type OnBoardingNavPromise = {
    onSendData:(data: boolean) => void
} 
const OnBoardingNav: React.FC<OnBoardingNavPromise> = ({onSendData}) => {
    const listSvg = [{id:0},{id:1},{id:2}]
    const [onSelectId,setOnSelectId] = useState<number>(0)
    const [checkedList, setChecedList] = useState<number[]>([0])
    const [isShowWelcomeFarme,setIsShowWelcomeFarme] = useState<boolean>(false)
    const contendList = [
        {
            img:require('../../../assets/images/Group.png'), 
            title:"Keep calm, be aware and focused",
            subTitle:"Reflect your daily acts and build habits that are one step closer to your goal."
        },
        {
            img:require('../../../assets/images/Group2.png'), 
            title:"Get your things done with less rush",
            subTitle:"Plan your days in details and achieve them one step at a time."
        },
        {
            img:require('../../../assets/images/Group3.png'), 
            title:"Exercise more & breathe better",
            subTitle:"Learn, measure and practise self-love with gratitude and compassion. "
        },
    ]
    const nextPress = (): void => {
        onSelectId < 2 
            ? (setOnSelectId(onSelectId + 1), setChecedList([...checkedList, onSelectId + 1]))
            : (setOnSelectId(0), setChecedList([0]), setIsShowWelcomeFarme(true));
    }
    useEffect(() => {
        onSendData(isShowWelcomeFarme)
    },[isShowWelcomeFarme, onSendData])
    return (
        <View style = {styles.navContain}>
            <OnBoardingContent 
                title= {contendList[onSelectId].title}
                subTitle= {contendList[onSelectId].subTitle}
                image= {contendList[onSelectId].img}
                />
            <View style = {styles.navMenu}>
                <StyledButton  variant="square" icon="arrow-forward" onPress={nextPress} skeletonDelay={300}></StyledButton>
                <View style = {styles.svgContain}>
                    {listSvg.map((item) => <MySvgComponent key={item.id} isActive = {checkedList.includes(item.id)}/>)}
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    navContain:{
        width:"100%",
        height:"100%",
        backgroundColor:COLORS.PRIMARY_BACKGROUND_BLUE,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        gap:66,
        paddingBottom:40,
        paddingTop:140
    },
    navMenu:{
        alignItems:"center",
        gap:34
    },
    svgContain:{
        flexDirection:"row",
        gap:12.66,
        height:4,
        width:209
    }
})
export default OnBoardingNav
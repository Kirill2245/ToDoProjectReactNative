import StyledCheckBox from "@/components/StyledCheckBox"
import StyledText from "@/components/StyledText"
import { COLORS } from "@/constants/ColorConst"
import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"

type ItemListProps = {
    text:string;
    onPressNext:() => void;
}
const ItemList:React.FC<ItemListProps> = ({text,onPressNext}) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    useEffect(() => {
        if (isChecked){
            onPressNext()
            setIsChecked(!isChecked)
        }
    },[isChecked])
    return (
        <View 
            style = {[
                styles.contain,
                isChecked ? styles.isActive : null
            ]}
        >
            <StyledCheckBox 
                checked = {isChecked} 
                onCheck={() => setIsChecked(!isChecked)}
                variant="circle"
            />
            <StyledText variant="medium">{text}</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    contain:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:COLORS.LIGHT_GREY,
        borderRadius:20,
        alignItems:'center',
        height:48,
        paddingHorizontal:12,
        gap:15
    },
    isActive:{
        borderWidth:1,
        borderColor:COLORS.PRIMARY_BUTTON_COLOR
    }
})
export default ItemList
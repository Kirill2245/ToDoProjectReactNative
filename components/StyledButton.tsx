import { COLORS } from "@/constants/ColorConst";

import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import CircularSkeleton from "./CircularSkeleton";
import StyledText from "./StyledText";
type StyledButtonProps = TouchableOpacityProps & {
    lable?:string;
    icon?: React.ComponentProps<typeof Ionicons>["name"];
    variant?:"small" | "medium" | "large" | "circule" | "square";
    sizeIcon?:number;
    skeletonDelay?: number;
};
const StyledButton: React.FC<StyledButtonProps> = ({skeletonDelay = 1000, sizeIcon = 41.82 ,variant,lable,icon, disabled,...props}) => {
    const [isShowSkeleton,setIsShowSkeleton] = useState<boolean>(true)
    const [contentRendered, setContentRendered] = useState<boolean>(false);
    const contentRef = useRef<View>(null);
    useEffect(() => {
        
        let timer:number;
        if (contentRendered) {
        timer = setTimeout(() => {
            setIsShowSkeleton(false);
        }, skeletonDelay);
        }

        return () => {
        if (timer) clearTimeout(timer); 
        };
    }, [contentRendered, skeletonDelay]);

    const handleContentLayout = () => {
        setContentRendered(true);
    };
    return (
        <TouchableOpacity
            {...props}
            disabled = {disabled}
            style = {[
                styles.base,
                variant === "square" ? styles.square : null,
                variant === "large" ? styles.large : null
            ]}
        >
            {isShowSkeleton && (
                <CircularSkeleton />
            )}
            
            <View 
                ref={contentRef}
                onLayout={handleContentLayout}
                style={[
                styles.contentContainer,
                isShowSkeleton && styles.contentHidden
                ]}
            >
                {lable && <StyledText variant="button-text">{lable}</StyledText>}
                {icon && (
                    <Ionicons 
                        name={icon} 
                        size={sizeIcon} 
                        color={COLORS.PRIMARY_BUTTON_TEXT_COLOR} 
                    />
                )}
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    base:{
        borderRadius:21.45,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:10,
        paddingVertical:5,
        boxSizing:"border-box",
        backgroundColor:COLORS.PRIMARY_BUTTON_COLOR,
        flexDirection:"row",
        elevation: 20,
        shadowColor: COLORS.PRIMARY_BUTTON_COLOR,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 3.84,
        minHeight: 50,
    },
    square:{
        width:92.86,
        height:92.86,
    },
    large:{
        width:318,
        height:60,
        justifyContent:"space-between",
        paddingHorizontal:20
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentHidden: {
        opacity: 0,
        display:'none'
    },
})
export default StyledButton
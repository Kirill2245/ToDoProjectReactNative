import { COLORS } from "@/constants/ColorConst";

import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import CircularSkeleton from "./CircularSkeleton";
import StyledText from "./StyledText";
type StyledButtonProps = TouchableOpacityProps & {
    lable?:string;
    icon?: React.ComponentProps<typeof Ionicons>["name"];
    variant?:"small" | "medium" | "large" | "circule" | "square" | 'largeLight';
    sizeIcon?:number;
    skeletonDelay?: number;
    image?: ImageSourcePropType;
};
const StyledButton: React.FC<StyledButtonProps> = ({image ,skeletonDelay = 1000, sizeIcon = 41.82 ,variant,lable,icon,style, disabled,...props}) => {
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
                style,
                styles.base,
                variant === "square" ? styles.square : null,
                variant === "large" ? styles.large : null,
                variant === 'largeLight' ? styles.largeLight : null,
                variant === 'circule' ? styles.circule :null
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
                {image && <Image source = {image}/>}
                {lable && <StyledText variant={variant === 'largeLight' ? "button-text-light" : "button-text"}>{lable}</StyledText>}
                {icon && 
                    <Ionicons 
                        name={icon} 
                        size={sizeIcon} 
                        color={COLORS.PRIMARY_BUTTON_TEXT_COLOR} 
                    />
                }
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
    largeLight:{
        width:318,
        height:56,
        gap:10,
        paddingHorizontal:45,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#ffff',
        color:COLORS.TITLE_TEXT_COLOR,
        elevation: 12,
        shadowColor: '#070707',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.6,
        shadowRadius: 1.84,
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
    circule:{
        borderRadius:'50%',
        width:56,
        height:56,
        paddingHorizontal:0,
        paddingVertical:0,
        opacity:1
    }
})
export default StyledButton
import StyledButton from "@/components/StyledButton";
import StyledCheckBox from "@/components/StyledCheckBox";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ColorConst";
import { useMainContent } from "@/context/MainContentContext";
import { formatTimeRange } from "@/helpers/dateHelp";
import { loadImage } from "@/helpers/images";
import { Todo } from "@/types/TodoType";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";
type ToDoItemProps = {
    id:Todo['id'];
    title:Todo['title'];
    completed:Todo['completed'];
    time:Todo['timeRange'];
    img:Todo['img']
}
const ToDoItem:React.FC<ToDoItemProps> = ({id,time,title,img,completed}) => {
    const timeText = formatTimeRange(time);
    const {onCheckTodo, onDeleteTodo} = useMainContent()
    return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={true}
                style={styles.scrollContainer}
            >
                <View style = {styles.item}>
                    <Image source={loadImage(img)} style = {{width:30,height:30}}/>
                    <View style = {styles.textConatin}>
                        <StyledText variant="medium" style = {{
                            fontWeight:'bold',
                            textDecorationLine:completed ? 'line-through' : 'none'}}
                        >
                            {title}
                        </StyledText>
                        <StyledText 
                            variant="small"
                            style = {{
                                textDecorationLine:completed ? 'line-through' : 'none'
                            }}
                        >
                            {timeText}
                        </StyledText>
                    </View>
                    <StyledCheckBox checked = {completed} onCheck={() => onCheckTodo(id)} variant="circleIcons"/>
                </View>
                <StyledButton lable="Clear" variant = "clearBtn" onPress={() => onDeleteTodo(id)}/>
            </ScrollView>

       
    );
}
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    scrollContainer: {
        width: '100%',
        height: 94,
        gap:20
    },
    item:{
        width:screenWidth - 32,
        backgroundColor:COLORS.ITEM_TODO,
        marginRight:4,
        flexDirection:'row',
        gap:11,
        alignItems:'center',
        padding:16,
        borderRadius:16,
        boxSizing:'border-box'
    },
    textConatin:{
        marginRight:'auto'
    }
})
export default ToDoItem
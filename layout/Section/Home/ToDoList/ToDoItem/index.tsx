import StyledText from "@/components/StyledText";
import { formatTimeRange } from "@/helpers/dateHelp";
import { loadImage } from "@/helpers/images";
import { Todo } from "@/types/TodoType";
import React from "react";
import { View } from "react-native";
import { Image } from "react-native-elements";
type ToDoItemProps = {
    title:Todo['title'];
    completed:Todo['completed'];
    time:Todo['timeRange'];
    img:Todo['img']
}
const ToDoItem:React.FC<ToDoItemProps> = ({time,title,img,completed}) => {
    
    const timeText = formatTimeRange(time);
    return (
        <View>
            <Image source={loadImage(img)} style = {{width:30,height:30}}/>
            <StyledText>{title}</StyledText>
            <StyledText>{timeText}</StyledText>
        </View>
    );
}

export default ToDoItem
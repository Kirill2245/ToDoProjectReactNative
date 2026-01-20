import StyledText from "@/components/StyledText";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ItemList from "./ItemList";
type QuestionProps = {
    title:string;
    arrayVariant:string[];
    onPressNext:() => void;
}
const Question:React.FC<QuestionProps> = ({title,arrayVariant, onPressNext}) => {
    return (
        <View style = {styles.questionContain}>
            <StyledText>{title}</StyledText>
            <FlatList
                data = {arrayVariant}
                keyExtractor={(el) => arrayVariant.indexOf(el).toString()}
                renderItem={({item}) => (
                    <ItemList text={item} onPressNext={onPressNext}/>
                )}
                style = {styles.list}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    questionContain:{
        maxHeight:290,
        maxWidth:312,
        gap:31
    },
    list:{
        gap:24,
        flex:1
    },
    listContainer: {
        gap: 24, 
    },
})
export default Question
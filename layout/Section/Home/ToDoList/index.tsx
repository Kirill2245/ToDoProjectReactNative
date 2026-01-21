import StyledText from "@/components/StyledText";
import { Todo } from "@/types/TodoType";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ToDoItem from "./ToDoItem";

type ToDoListProps = {
    todos:Todo[];

}
const ToDoList:React.FC<ToDoListProps> = ({todos}) => {
    return (
        <View>
            <FlatList
                data={todos}
                keyExtractor={(todo) => todo.id.toString()}
                renderItem={({item}) => (
                    <ToDoItem time={item.timeRange} img={item.img} title={item.title} completed = {item.completed} id = {item.id}/>
                    
                )}
                ListEmptyComponent={
                        <View style={styles.emptyContainer}>
                            <StyledText variant="title">📝 There are no tasks</StyledText>
                        </View>
                    }
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    listContainer: {
        gap: 8, 
    },
    emptyContainer: {
        padding: 20,
        alignItems: 'center'
    }
})
export default ToDoList
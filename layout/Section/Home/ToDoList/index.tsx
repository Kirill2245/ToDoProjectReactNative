import { Todo } from "@/types/TodoType";
import React from "react";
import { FlatList, View } from "react-native";
import ToDoItem from "./ToDoItem";

type ToDoListProps = {
    todos:Todo[];

}
const ToDoList:React.FC<ToDoListProps> = ({todos}) => {
    console.log(todos)
    return (
        <View>
            <FlatList
                data={todos}
                keyExtractor={(todo) => todo.id.toString()}
                renderItem={({item}) => (
                    <ToDoItem time={item.timeRange} img={item.img} title={item.title} completed = {item.completed}/>
                    
                )}
            />
        </View>
    );
}

export default ToDoList
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ColorConst";
import { useMainContent } from "@/context/MainContentContext";
import { isSameDays } from "@/helpers/dateHelp";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CalendarHeader from "./CalendarHeader";
import ToDoList from "./ToDoList";

const Home = () => {
    const {todosList} = useMainContent()
    const [currentDate, setCurrentData] = useState<Date>(new Date())

    const filteredTodos = todosList.filter(todo => 
        isSameDays(todo.date, currentDate)
    );
    return (
        <View style = {styles.section}>
            <View style = {styles.header}>
                <StyledText >Seize the day, Slesha!</StyledText>
                <CalendarHeader/>
            </View>
            <View style = {styles.contain}>
                <ToDoList todos={filteredTodos}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section:{
        flex:1,
        backgroundColor:COLORS.BRIGHT_BLUE,
        paddingTop:58,
        gap:12
    },
    contain:{
        flex:1,
        backgroundColor:'#fff',
        borderRadius:24,
        padding:16
    },
    header:{
        paddingHorizontal:21,
        gap:12
    }
})
export default Home
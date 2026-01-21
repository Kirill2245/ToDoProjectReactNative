import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ColorConst";
import { useAuth } from "@/context/AuthContext";
import { useMainContent } from "@/context/MainContentContext";
import { isSameDays } from "@/helpers/dateHelp";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CalendarHeader from "./CalendarHeader";
import ToDoList from "./ToDoList";

const Home = () => {
    const {todosList} = useMainContent()
    const [currentDate, setCurrentData] = useState<Date>(new Date())
    const {user} = useAuth()
    const filteredTodos = todosList.filter(todo => 
        isSameDays(todo.date, currentDate)
    );
    const selectDate = (date:Date):void => {
        setCurrentData(date)
    }
    return (
        <View style = {styles.section}>
            <View style = {styles.header}>
                <StyledText >{`Seize the day, ${user?.name}!`}</StyledText>
                <CalendarHeader selectDate={(date:Date) => selectDate(date)}/>
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
        gap:12,
        width:'100%',
        height:'auto',
    }
})
export default Home
import StyledButton from "@/components/StyledButton";
import StyledModal from "@/components/StyledModal";
import { useMainContent } from "@/context/MainContentContext";
import { TodoTime } from "@/types/TodoType";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import DateSlide from "./DateSlide";
import MainSlide from "./MainSlide";
import TimeSlide from "./TimeSlide";

type CreateTaskModalProps = {
    isOpen:boolean;
    onClose: () => void;
}
const CreateTaskModal:React.FC<CreateTaskModalProps> = ({isOpen,onClose}) => {
    const {onCreateTodo} = useMainContent()
    const today = new Date().toISOString().split('T')[0];
    const [isShowSlideDate, setOnShowSlide] = useState(false)
    const [isShowSlideTime, setIsShowSlideTime] = useState<boolean>(false)
    const [dateRange, setDateRange] = useState<TodoTime>(null);
    const [selectDate, setSelectedDate] = useState<string>('')
    const [titleTask, setTitleTask] = useState<string>('')
    const [isShowCreateBtn, setIsShowCraeteBtn] = useState(false)
    const onSelectDate = (date:string) => {
        setSelectedDate(date)
        setOnShowSlide(false)
    }
    const onBack = () => {
        if (isShowSlideDate || isShowSlideTime) {
            setOnShowSlide(false);
            setIsShowSlideTime(false); 
        } else {
            onClose();
        }
    };
    const handleSetDateRange = (date:TodoTime):void => {
        setDateRange(date)
    }
    useEffect(() => {
        if (dateRange && selectDate.length != 0 && titleTask.length != 0){
            setIsShowCraeteBtn(true)
        }
        else{
            setIsShowCraeteBtn(false)
        }
    },[dateRange,selectDate,titleTask])
    const createTask = () => {
        onCreateTodo(titleTask, dateRange, new Date(selectDate))
        setDateRange(null)
        setTitleTask('')
        setSelectedDate('')
    }
    return (
        <StyledModal isOpen = {isOpen} onClose={onClose}>
            <View style = {styles.contain}>
                <View style = {styles.controlPanel}>
                    <StyledButton image={require('../../../assets/images/back.png')} onPress={() => onBack()} variant="closeModal"></StyledButton>
                    {!isShowCreateBtn ? 
                        <StyledButton 
                        image={require('../../../assets/images/finish.png')} 
                        onPress={() => onClose()} 
                        variant="closeModal"/>:
                        <StyledButton lable="Create" variant="craete" onPress={() => createTask()}/>
                    }
                    
                </View>
                {(!isShowSlideDate && !isShowSlideTime) && <MainSlide 
                    isShowDate={() => setOnShowSlide(true)} 
                    isShowTime={() => setIsShowSlideTime(true)} 
                    selectDate={selectDate}
                    selectTimeRange = {dateRange}
                    selectTitleTask = {titleTask}
                    setTitle={(title:string) => setTitleTask(title)}
                />}
                {isShowSlideDate && <DateSlide onSelectDate={(date:string) => onSelectDate(date)}/>}
                {isShowSlideTime && <TimeSlide setTimeRange={(date:TodoTime) => handleSetDateRange(date)}/>}
            </View>
        </StyledModal>
    );
}

const styles = StyleSheet.create({
    contain:{
        flex:1,
    },
    controlPanel:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})
export default CreateTaskModal
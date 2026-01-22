import StyledInput from '@/components/StyledInput';
import StyledText from '@/components/StyledText';
import TouchableSelectImage from '@/components/TouchableSelectImage';
import { COLORS } from '@/constants/ColorConst';
import { TimeRange, TodoTime } from '@/types/TodoType';
import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, View } from "react-native";
type MainSlideProps = {
    isShowDate:() => void;
    isShowTime:() => void;
    setTitle:(title:string) => void;
    selectDate?:string ;
    selectTimeRange:TodoTime | TimeRange;
    selectTitleTask:string ;

}
const formatTimeRange = (dateRange: TimeRange) => {
  if (!dateRange || !dateRange.start || !dateRange.end) {
    return '';
  }

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    const minutesStr = minutes > 0 ? `:${minutes.toString().padStart(2, '0')}` : '';
    
    return `${hours}${minutesStr} ${ampm}`;
  };

  return `${formatTime(dateRange.start)} to ${formatTime(dateRange.end)}`;
};
const MainSlide:React.FC<MainSlideProps> = ({setTitle,isShowTime,isShowDate,selectDate,selectTimeRange,selectTitleTask}) => {
    return (
        <View style={styles.contain}>
            <TouchableSelectImage/>
            <View style = {styles.inputConatain}>
                <StyledInput 
                    placeholder='New Task' 
                    variant='stells' 
                    value={selectTitleTask} 
                    onChangeText={setTitle}
                    maxLength={50}
                />
                <StyledText variant='medium' style = {{color:COLORS.MID_GREY}}>
                    {selectTitleTask.length != 0 ? `${selectTitleTask.length}/50`:'Tap to rename'}
                </StyledText>
            </View>
            <View style = {styles.form}>
                <StyledInput 
                    placeholder='Date' 
                    variant='craeterTask'
                    rightIcon = {
                        <Ionicons name='calendar-outline' size={20} onPress={() => isShowDate()}/>
                    }
                    onPress={() => isShowDate()}
                    value={selectDate}
                />
                <StyledInput 
                    placeholder='Timing' 
                    variant='craeterTask'
                    rightIcon = {
                        <Ionicons name='time-outline' size={20}/>
                    }
                    placeholderTextColor={COLORS.TITLE_TEXT_COLOR}
                    onPress={() => isShowTime()}
                    value={selectTimeRange !== 'All Day' && selectTimeRange != null ? formatTimeRange(selectTimeRange): 'All Day'}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        paddingHorizontal: 3,
        alignItems:'center'
    },
    image: {
        width: 64, 
        height: 83, 
        resizeMode: 'contain', 
        marginBottom:12
    },
    form:{
        width:'100%',
        height:257,
        backgroundColor:'#fff',
        borderRadius:12,
        paddingVertical:12,
        paddingHorizontal:12
    },
    inputConatain:{
        width:120,
        gap:15,
        marginBottom:39,
        alignItems:'center'
    },

});

export default MainSlide;
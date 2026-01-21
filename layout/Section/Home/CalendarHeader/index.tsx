import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ColorConst";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
type CalendarHeaderProps = {
    selectDate:(date:Date) => void
}
const CalendarHeader:React.FC<CalendarHeaderProps> = ({selectDate}) => {
    const [currentDate,setCurrentData] = useState(new Date());
    const [weekDays, setWeekDays] = useState<{date: Date, dayName: string, dayNumber: string, isToday: boolean}[]>([]);
    useEffect(() => {
        selectDate(currentDate)
    },[selectDate,currentDate])
    useEffect(() => {
        const today = new Date();
        const days = [];
        
        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            
            days.push({
                date,
                dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
                dayNumber: date.getDate().toString(),
                isToday: date.toDateString() === currentDate.toDateString()
            });
        }
        
        setWeekDays(days);
    }, [currentDate]);

    return (
        <View style={styles.calendarBox}>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {weekDays.map((day, index) => (
                    <TouchableOpacity 
                        key={index}
                        style={[
                            styles.dayContainer,
                            day.isToday && styles.todayContainer
                        ]}
                        onPress={() => setCurrentData(day.date)}
                    >
                        
                        <StyledText variant="medium" style = { day.isToday ?{color:'#fff'}:{color:COLORS.MID_GREY}}>
                            {day.dayNumber}
                        </StyledText>
                        <StyledText variant="medium" style = { day.isToday ?{color:'#fff'}:{color:COLORS.MID_GREY}}>{day.dayName}</StyledText>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    calendarBox: {
        width: '100%',
        height: 48,
    },
    scrollContent: {
        alignItems: 'center',
    },
    dayContainer: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    todayContainer: {
        backgroundColor: COLORS.PRIMARY_BUTTON_COLOR,
        borderRadius: '50%',
    },
    todayNumber: {
        color: '#fff',
    }
});

export default CalendarHeader;
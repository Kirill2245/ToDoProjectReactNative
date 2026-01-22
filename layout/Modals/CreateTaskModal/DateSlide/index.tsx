import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ColorConst";
import { getLocalDateString } from "@/helpers/dateHelp";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from 'react-native-calendars';

type DateSlideProps = {
    onSelectDate:(date:string) => void 
}

const DateSlide:React.FC<DateSlideProps> = ({onSelectDate}) => {


    const getCurrentDateTime = () => {
        return new Date();
    };

    const getTodayString = () => {
        return getLocalDateString();
    };

    const getMinDate = () => {
        const now = getCurrentDateTime();
        if (now.getHours() >= 22) {
            const tomorrow = new Date(now);
            tomorrow.setDate(tomorrow.getDate() + 1);
            return getLocalDateString(tomorrow);
        }
        return getTodayString();
    };

    const todayString = getTodayString();
    const minDate = getMinDate();
    const [selectedDate, setSelectedDate] = useState(minDate);

    useEffect(() => {
        setSelectedDate(minDate);
    }, []);

    return (
        <View style={styles.containe}>
            <StyledText variant="title">
                Today
            </StyledText>
            <View style={styles.calendarContain}>
                <Calendar
                    current={minDate} 
                    minDate={minDate} 
                    onDayPress={(day) => {
                        setSelectedDate(day.dateString);
                        onSelectDate(day.dateString);
                    }}
                    markedDates={{
                        [selectedDate]: { 
                            selected: true, 
                            selectedColor: COLORS.PRIMARY_BUTTON_COLOR 
                        }
                    }}
                    theme={{
                        calendarBackground: 'transparent',
                        todayTextColor: COLORS.NETURAL,
                        arrowColor: 'black',
                        textSectionTitleColor: COLORS.NETURAL_BLUE,
                        textMonthFontWeight: '800',
                        textDayHeaderFontWeight: '800',
                        monthTextColor: COLORS.NETURAL_BLUE,
                        textDayFontWeight: '800',
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 14,
                        textDayFontSize: 16,
                        textDisabledColor: COLORS.NETURAL,
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containe: {
        flex: 1,
        alignItems: 'center',
        gap:55
    },
    calendarContain: {
        width: 342,
        height: 297
    }
});

export default DateSlide;
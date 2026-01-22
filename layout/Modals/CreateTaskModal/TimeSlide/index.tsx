import StyledInput from "@/components/StyledInput";
import StyledText from "@/components/StyledText";
import StyledToggleSwitch from "@/components/StyledToggleSwitch";
import { TodoTime } from "@/types/TodoType";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

type TimeSlideProps = {
    setTimeRange: (range: TodoTime) => void
}

const TimeSlide: React.FC<TimeSlideProps> = ({ setTimeRange }) => {
    const [isShowGetTime, setIsShowGetTime] = useState<boolean>(false);
    const [isOnAllDate, setIsOnAllDate] = useState<boolean>(false);
    const [dateRange, setDateRange] = useState<TodoTime>(null);
    const [startTime, setStartTime] = useState<string>("02 : 00");
    const [endTime, setEndTime] = useState<string>("04 : 00");
    const [startAmPm, setStartAmPm] = useState<'AM' | 'PM'>('AM');
    const [endAmPm, setEndAmPm] = useState<'AM' | 'PM'>('PM');

    const parseTimeWithAmPm = (timeStr: string, amPm: 'AM' | 'PM'): number => {
        const [hoursStr, minutesStr] = timeStr.split(':').map(s => s.trim());
        let hours = parseInt(hoursStr, 10);
        const minutes = parseInt(minutesStr || '0', 10);
        

        if (amPm === 'PM' && hours < 12) {
            hours += 12;
        }

        if (amPm === 'AM' && hours === 12) {
            hours = 0;
        }
        
        return hours * 60 + minutes; 
    };


    const toggleAmPm = (type: 'start' | 'end') => {
        if (type === 'start') {
            setStartAmPm(prev => prev === 'AM' ? 'PM' : 'AM');
        } else {
            setEndAmPm(prev => prev === 'AM' ? 'PM' : 'AM');
        }
    };

    useEffect(() => {
        if (isOnAllDate) {
            setDateRange('All Day');
        } else if (isShowGetTime && startTime && endTime) {
            const startDate = new Date();
            const endDate = new Date();
            
            const startTotalMinutes = parseTimeWithAmPm(startTime, startAmPm);
            const endTotalMinutes = parseTimeWithAmPm(endTime, endAmPm);
            
            startDate.setHours(
                Math.floor(startTotalMinutes / 60),
                startTotalMinutes % 60,
                0,
                0
            );
            
            endDate.setHours(
                Math.floor(endTotalMinutes / 60),
                endTotalMinutes % 60,
                0,
                0
            );
            
            if (endTotalMinutes <= startTotalMinutes) {
                endDate.setDate(endDate.getDate() + 1);
            }
            
            setDateRange({
                start: startDate,
                end: endDate
            });
        } else {
            setDateRange(null);
        }
    }, [isOnAllDate, isShowGetTime, startTime, endTime, startAmPm, endAmPm]);

    const handleAllDayToggle = (is: boolean) => {
        setIsOnAllDate(is);
        if (is) {
            setIsShowGetTime(false);
        }
    };

    const handleSpecificTimeToggle = (is: boolean) => {
        setIsShowGetTime(is);
        if (is) {
            setIsOnAllDate(false);
        }
    };

    useEffect(() => {
        dateRange != null && setTimeRange(dateRange);
    }, [dateRange, setTimeRange]);

    return (
        <View style={styles.contain}>
            <StyledText variant="title">Choose the timing</StyledText>
            
            <View style={styles.selectBox}>
                <View style={styles.lable}>
                    <Image source={require('../../../../assets/images/tabler_clock-24.png')} style={styles.image} />
                    <StyledText variant="subtitle" style={{ fontWeight: 'bold' }}>All-day</StyledText>
                </View>
                <StyledToggleSwitch
                    isOn={isOnAllDate}
                    onToggle={handleAllDayToggle}
                />
            </View>
            
            <View style={styles.selectBox}>
                <View style={styles.lable}>
                    <Ionicons name="time-outline" size={24} />
                    <StyledText variant="subtitle" style={{ fontWeight: 'bold' }}>Specific time</StyledText>
                </View>
                <StyledToggleSwitch
                    isOn={isShowGetTime}
                    onToggle={handleSpecificTimeToggle}
                />
            </View>
            
            {isShowGetTime && (
                <View style={styles.inputContain}>
                    <View style={styles.box}>
                        <View style={styles.containLable}>
                            <StyledText variant="small" style={{ opacity: 0.5 }}>Start time</StyledText>
                            <StyledInput
                                placeholder="02 : 00"
                                value={startTime}
                                onChangeText={setStartTime}
                            />
                        </View>
                        <StyledText 
                            onPress={() => toggleAmPm('start')}
                        >
                            {startAmPm}
                        </StyledText>
                    </View>
                    
                    <View style={styles.box}>
                        <View style={styles.containLable}>
                            <StyledText variant="small" style={{ opacity: 0.5 }}>End Time</StyledText>
                            <StyledInput
                                placeholder="04 : 00"
                                value={endTime}
                                onChangeText={setEndTime}
                            />
                        </View>
                        <StyledText 
                            onPress={() => toggleAmPm('end')}
                        >
                            {endAmPm}
                        </StyledText>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 4
    },
    selectBox: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 41,
    },
    image: {
        width: 24,
        height: 24
    },
    lable: {
        flexDirection: 'row',
        gap: 15,
    },
    inputContain: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10
    },
    box: {
        flexDirection: 'row',
        gap: 9,
        alignItems: 'center',
    },
    containLable: {
        width: 104,
        gap: 8
    },
});

export default TimeSlide;
import { TodoTime } from '@/types/TodoType';
import { isSameDay } from 'date-fns';
import * as Localization from 'expo-localization';
export const isSameDays = (date1: Date, date2: Date): boolean => {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
    };

export const formatTimeRange = (timeRange: TodoTime): string => {
        if (timeRange === null) {
            return 'All Day';
        }
        
        if (timeRange === 'All Day') {
            return 'All Day';
        }
        
        try {
            const startDate = new Date(timeRange.start);
            const endDate = new Date(timeRange.end);
            
            // Получаем локаль устройства
            const locale = Localization.getLocales()[0];
            const localeCode = locale.languageCode || 'ru';
            
            // Определяем формат в зависимости от локали
            const timeOptions: Intl.DateTimeFormatOptions = {
                hour: '2-digit',
                minute: '2-digit'
            };
            
            const dateOptions: Intl.DateTimeFormatOptions = {
                day: '2-digit',
                month: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            };
            
            const startTime = startDate.toLocaleTimeString(localeCode, timeOptions);
            const endTime = endDate.toLocaleTimeString(localeCode, timeOptions);
            
            // Проверяем, один ли это день
            if (isSameDay(startDate, endDate)) {
                return `${startTime} - ${endTime}`;
            } else {
                const startDateStr = startDate.toLocaleDateString(localeCode, dateOptions);
                const endDateStr = endDate.toLocaleDateString(localeCode, dateOptions);
                return `${startDateStr} - ${endDateStr}`;
            }
        } catch (error) {
            console.error('Ошибка форматирования времени:', error);
            return 'Неверный формат времени';
        }
    };
export const formatDateToYMD = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
};
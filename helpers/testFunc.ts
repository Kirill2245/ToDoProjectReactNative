import { Todo, TodoTime } from "@/types/TodoType";

// Функция для создания тестовых данных с динамическими датами и изображениями
export function generateMockTodos(count: number = 15): Todo[] {
  const todos: Todo[] = [];
  const now = new Date();
  
  // Типы времени для разнообразия
  const timeTypes: ('morning' | 'afternoon' | 'evening' | 'allday' | 'null')[] = 
    ['morning', 'afternoon', 'evening', 'allday', 'null'];
  
  // Список заголовков
  const titles = [
    "Утренняя зарядка",
    "Встреча с командой",
    "Обед",
    "Тренировка",
    "Чтение книги",
    "Прием у врача",
    "Покупки",
    "Кино",
    "Ужин с друзьями",
    "Работа над проектом",
    "Изучение английского",
    "Уборка дома",
    "Прогулка в парке",
    "Посещение выставки",
    "Визит к родственникам"
  ];
  
  // Путь к изображению по умолчанию
  const DEFAULT_IMAGE = '/assets/images/def.png';
  
  // Массив случайных изображений для разнообразия (можно добавить больше путей)
  const imagePaths = [
    DEFAULT_IMAGE,
    DEFAULT_IMAGE,
    DEFAULT_IMAGE,
    DEFAULT_IMAGE,
    DEFAULT_IMAGE
  ];
  
  for (let i = 0; i < count; i++) {
    // Случайная дата в диапазоне 4 дней (от сегодня до +4 дня)
    const daysOffset = Math.floor(Math.random() * 4);
    const date = new Date(now);
    date.setDate(date.getDate() + daysOffset);
    
    // Случайный тип времени
    const timeType = timeTypes[Math.floor(Math.random() * timeTypes.length)];
    let timeRange: TodoTime;
    
    switch(timeType) {
      case 'morning':
        date.setHours(9 + Math.floor(Math.random() * 3), Math.floor(Math.random() * 60));
        timeRange = {
          start: new Date(date),
          end: new Date(date.getTime() + 60 * 60 * 1000) // +1 час
        };
        break;
      case 'afternoon':
        date.setHours(13 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 60));
        timeRange = {
          start: new Date(date),
          end: new Date(date.getTime() + 90 * 60 * 1000) // +1.5 часа
        };
        break;
      case 'evening':
        date.setHours(18 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 60));
        timeRange = {
          start: new Date(date),
          end: new Date(date.getTime() + 120 * 60 * 1000) // +2 часа
        };
        break;
      case 'allday':
        date.setHours(0, 0, 0, 0);
        timeRange = 'All Day';
        break;
      case 'null':
        date.setHours(0, 0, 0, 0);
        timeRange = null;
        break;
    }
    
    // Случайное изображение (в основном дефолтное, иногда null)
    const randomImageIndex = Math.floor(Math.random() * imagePaths.length);
    const img = imagePaths[randomImageIndex]; // 20% без изображения
    
    todos.push({
      id: i + 1,
      title: titles[Math.floor(Math.random() * titles.length)],
      description: `Описание для задачи ${i + 1}`,
      date: new Date(date),
      timeRange,
      completed: Math.random() > 0.7, // 30% выполненных задач
      img
    });
  }
  
  // Сортируем по дате
  return todos.sort((a, b) => a.date.getTime() - b.date.getTime());
}
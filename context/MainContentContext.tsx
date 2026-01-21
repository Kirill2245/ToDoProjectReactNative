import { generateMockTodos } from '@/helpers/testFunc';
import { Todo } from '@/types/TodoType';
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface MainContentContextType {
    isShowFeature:boolean;
    todosList:Todo[];
    openFeature:() => void;
    onCheckTodo:(id:Todo['id']) => void;
    onDeleteTodo:(id:Todo['id']) => void;
}

const MainContentContext = createContext<MainContentContextType | undefined>(undefined);

interface MainContentProviderProps {
    children: ReactNode;
}

export const MainContentProvider:React.FC<MainContentProviderProps> = ({children}) => {
    const [isShowFeature,setIsShowFeature] = useState<boolean>(false)
    const [todosList, setTodosList] = useState<Todo[]>(generateMockTodos(11))
    const openFeature = () => {
        setIsShowFeature(true)
    }
    const onCheckTodo = (id:Todo["id"]) => {
        setTodosList(todosList.map((todo) => (todo.id === id ? {...todo, completed: !todo.completed} : todo)))
    }
    const onDeleteTodo = (id:Todo["id"]) => {
        setTodosList(todosList.filter((todo) => todo.id !== id)) 
    }
    const value: MainContentContextType = {
        isShowFeature,
        todosList,
        openFeature,
        onCheckTodo,
        onDeleteTodo
    }
    return (
        <MainContentContext.Provider value={value}>
            {children}
        </MainContentContext.Provider>
    );
}

export const useMainContent = () => {
      const context = useContext(MainContentContext);
      if (context === undefined) {
        throw new Error('useMainContent must be used within an AuthProvider');
      }
      return context;
}
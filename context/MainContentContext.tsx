import { generateMockTodos } from '@/helpers/testFunc';
import { Todo } from '@/types/TodoType';
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface MainContentContextType {
    isShowFeature:boolean;
    todosList:Todo[];
    openFeature:() => void
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
    const value: MainContentContextType = {
        isShowFeature,
        todosList,
        openFeature
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
export type TimeRange = {
    start: Date;
    end: Date;
};

export type TodoTime = TimeRange | 'All Day' | null;

export interface Todo {
    id: number; 
    title: string;
    description?: string; 
    date: Date;
    timeRange: TodoTime;
    completed: boolean;
    img:string;
}
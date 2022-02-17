import { Category } from "./category";

export interface PizzaState {
    Categories: Category[],
    addOrder: (payload: string) => void,
    removeOrder: (id: number) => void
}
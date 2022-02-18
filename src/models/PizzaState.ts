import { Category } from "./category";
import { OrderState } from "./OrderState";

export interface PizzaState {
    Categories: Category[],
    activeCategory: (id: string) => void;
    addOrder: (payload: OrderState) => void,
    removeOrder: (id: string) => void
}
import create from "zustand"
import produce from "immer";
import { PizzaState } from "../models/PizzaState";
import { categories, products } from "../__mockup/data";
import { OrderState } from "../models/OrderState";
import { Category } from "../models/category";

const useStore = create<PizzaState>((set) => ({
    Categories: [ ...categories ],
    Product: [ ...products ],
    Orders: [{}],
    activeCategory: (id: string) =>
        set(
            produce((draft) => {
                let categoryByID = draft.Categories.filter((category: Category) => category.id === id);
                let categoryInactive = draft.Categories.filter((category: Category) => category.active === true);
                draft.Categories[categoryInactive].active = false;
                draft.Categories[categoryByID].active = true;
            })
        ),
    addOrder: (payload: OrderState) =>
        set(
            produce((draft) => {
               draft.Orders.push({...payload})
            })
        ),
    removeOrder: (id: string) => 
    set(
        produce((draft) => {
            let index = draft.Orders.findIndex((order: OrderState) => order.product_id === id);
            draft.Orders.splice(index, 1);
        })
    ),
}));

export default useStore;
import create from "zustand"
import produce from "immer";
import { Category } from "../models/category";
import { PizzaState } from "../models/PizzaState";

const useStore = create<PizzaState>((set) => ({
    Categories: [ {} as Category ],
    addOrder: (payload: string) =>
        set(
            produce((draft) => {
            })
        ),
    removeOrder: (id: Number) => 
    set(
        produce((draft) => {
        })
    ),
}));

export default useStore;
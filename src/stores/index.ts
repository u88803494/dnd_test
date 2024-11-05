import { create } from "zustand";
import { DragItem } from "../types";

interface StoreState {
  droppedItems: DragItem[];
  addItem: (item: DragItem) => void;
  // updateItem: (index: number, newItem: Item) => void;
}

const useItemStore = create<StoreState>((set) => ({
  droppedItems: [],
  addItem: (item) => set((state) => ({
    droppedItems: [...state.droppedItems, item]
  })),
  // updateItem: (index, newItem) => set((state) => {
  //   const newDroppedItems = [...state.droppedItems]
  //   newDroppedItems[index] = newItem
  //   return { droppedItems: newDroppedItems }
  // }),
}));

export default useItemStore;
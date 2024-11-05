import { create } from "zustand";
import { DragItem } from "../types";

interface StoreState {
  selectedUuid: string;
  droppedItems: DragItem[];
  addItem: (item: DragItem) => void;
  selectItem: (uuid: string) => void;
  // updateItem: (index: number, newItem: Item) => void;
}

const useItemStore = create<StoreState>((set) => ({
  selectedUuid: '',
  droppedItems: [],
  addItem: (item) => set((state) => ({
    droppedItems: [...state.droppedItems, item]
  })),
  selectItem: (uuid) => set(() => ({
    selectedUuid: uuid
  }))
  // updateItem: (index, newItem) => set((state) => {
  //   const newDroppedItems = [...state.droppedItems]
  //   newDroppedItems[index] = newItem
  //   return { droppedItems: newDroppedItems }
  // }),
}));

export default useItemStore;
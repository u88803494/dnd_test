import { create } from "zustand";
import { DragItem } from "../types";

interface StoreState {
  selectedUuid: string;
  droppedItems: DragItem[];
  addItem: (item: DragItem) => void;
  selectItem: (uuid: string) => void;
  updateItem: (uuid: string, newData: Partial<DragItem>) => void;
}

const useItemStore = create<StoreState>((set) => ({
  selectedUuid: '',
  droppedItems: [],
  addItem: (item) => set((state) => ({
    droppedItems: [...state.droppedItems, item]
  })),
  selectItem: (uuid) => set(() => ({
    selectedUuid: uuid
  })),
  updateItem: (uuid, newData) => set((state) => {
    const updatedItems = state.droppedItems.map(item =>
      item.uuid === uuid ? { ...item, ...newData } : item
    );
    return { droppedItems: updatedItems };
  }),
}));

export default useItemStore;
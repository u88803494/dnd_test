export interface DragData {
  type: 'text' | 'image';
  width?: number;
  height?: number;
  url?: string;
  text?: string;
}

export interface DragItem extends DragData {
  uuid: string;
}

export interface DragItem {
  uuid: string;
  type: 'text' | 'image';
  width?: number;
  height?: number;
  url?: string;
  text?: string;
}

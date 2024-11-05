export interface ImageItem {
  width: number;
  height: number;
  url: string;
  type: 'image';
}

export interface TextItem {
  text: string;
  type: 'text';
}

export type DragItem = ImageItem | TextItem;

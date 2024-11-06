import { useEffect, useState } from "react";
import useItemStore from "../stores";
import { DragItem } from "../types";

const Editor = () => {
  const { selectedUuid, droppedItems, updateItem } = useItemStore();

  const selectedItem = droppedItems.find(i => i.uuid === selectedUuid) as DragItem;

  const [url, setUrl] = useState<string>(selectedItem?.url ?? '');
  const [width, setWidth] = useState<number>(selectedItem?.width ?? 300);
  const [height, setHeight] = useState<number>(selectedItem?.height ?? 300);

  useEffect(() => {
    if (selectedItem.type === "image") {
      setUrl(selectedItem?.url ?? '');
      setWidth(selectedItem?.width ?? 300);
      setHeight(selectedItem?.height ?? 300);
    }
  }, [selectedItem.height, selectedItem.type, selectedItem.url, selectedItem.width, selectedUuid])

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(e.target.value))
  }

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(e.target.value))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      updateItem(selectedItem.uuid, { url, width, height })
    }
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateItem(selectedItem.uuid, { text: e.target.value });
  };

  if (selectedItem.type === 'image') {
    return (
      <div className="space-y-2">
        <div className="space-y-1">
          <label>URL：</label>
          <input
            className="border w-full p-1"
            type="text"
            value={url}
            onChange={handleUrlChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="space-y-1">
          <label>{"寬度(px)："}</label>
          <input
            className="border w-full p-1"
            value={width}
            type="number"
            onChange={handleWidthChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="space-y-1">
          <label>{"高度(px)："}</label>
          <input
            className="border w-full p-1"
            value={height}
            type="number"
            onChange={handleHeightChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div>輸入完按下 Enter 變更</div>
      </div>
    )
  }

  return (
    <div>
      <input
        className="border w-full p-1"
        type="text"
        onChange={handleTextChange}
        value={selectedItem?.text || ''}
      />
    </div>
  )
};

export default Editor;

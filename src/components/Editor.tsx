import useItemStore from "../stores"
import { DragItem } from "../types"

const Editor = () => {
  const { selectedUuid, droppedItems, updateItem } = useItemStore()

  const selectedItem = droppedItems.find(i => i.uuid === selectedUuid) as DragItem

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateItem(selectedItem.uuid, { text: e.target.value });
  };

  if (selectedItem.type === 'image') {
    return (
      <div>
        image editor
      </div>
    )
  }

  return (
    <div>
      <input
        className="border"
        type="text"
        onChange={handleTextChange} 
        value={selectedItem?.text || ''}
      />
    </div>
  )
}

export default Editor
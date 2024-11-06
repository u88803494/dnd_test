import { useDrop } from 'react-dnd';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import useItemStore from '../stores';
import { DragData } from '../types';

const Main = () => {
  const { droppedItems, addItem, selectItem } = useItemStore()

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item: DragData) => {
      const newItem = {
        uuid: uuidv4(),
        ...item,
      }
      addItem(newItem)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  }))

  return (
    <div className="flex-1 relative">
      <nav className="w-full h-8 sticky top-0 flex justify-center items-center bg-white border">
        <div>
          This is a fixed header, no need to modify
        </div>
      </nav>
      <main
        className={clsx(
          "h-[calc(100vh-32px)]",
          {
            'bg-blue-100': canDrop,
            'border-dashed border-2 border-blue-500': isOver
          }
        )}
        ref={drop}
      >
        {droppedItems?.length > 0 && (
          droppedItems?.map((item) => (
            <div key={item.uuid} onClick={() => selectItem(item.uuid)}>
              {item.type === 'image' ? (
                <img
                  alt="dropped"
                  className="object-cover"
                  src={item.url}
                  height={item.height}
                  width={item.width}
                />
              ) : (
                <div>{item.text}</div>
              )}
            </div>
          )))
        }
      </main>
    </div>
  )
}

export default Main;

import { useDrop } from 'react-dnd'
import { useState } from 'react'
import clsx from 'clsx'

interface DragItem {
  type: 'text' | 'image'
}

const Main = () => {

  const [droppedItems, setDroppedItems] = useState<string[]>([])

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item: DragItem) => {
      setDroppedItems((prev) => [...prev, item.type])
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  }))

  return (
    <div className="w-3/4 relative">
      <nav className="w-full h-8 sticky top-0 flex justify-center items-center bg-white border">
        <div>
          This is a fixed header, no need to modify
        </div>
      </nav>
      <main
        className={clsx(
          "px-2 py-4 h-[calc(100vh-32px)]",
          {
            'bg-blue-100': canDrop,
            'border-dashed border-2 border-blue-500': isOver
          }
        )}
        ref={drop}
      >
        {droppedItems.map((item, index) => (
          <div key={index} className="my-2 p-2 border border-slate-300">
            {item} 元件放置於此
          </div>
        ))}
      </main>
    </div>
  )
}

export default Main

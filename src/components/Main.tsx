import { useDrop } from 'react-dnd'
import clsx from 'clsx'
import useItemStore from '../stores'
import { DragItem } from '../types'

const Main = () => {
  const { droppedItems, addItem } = useItemStore()

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item: DragItem) => {
      addItem(item)
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
          "h-[calc(100vh-32px)]",
          {
            'bg-blue-100': canDrop,
            'border-dashed border-2 border-blue-500': isOver
          }
        )}
        ref={drop}
      >
        {droppedItems.map((item, index) => (
          <div key={index}>
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
        ))}
      </main>
    </div>
  )
}

export default Main

import { ReactNode } from "react"
import { useDrag } from "react-dnd"
import { ImageItem, TextItem } from "../types"

interface ButtonProps {
  children: ReactNode
  type: string
}

const defaultImageItem: ImageItem = {
  width: 300,
  height: 300,
  url: 'https://i.imgur.com/OL2RhAx.jpeg',
  type: 'image',
}

const defaultTextItem: TextItem = {
  text: 'Hello from Meepshop!',
  type: 'text',
}

const Button = (props: ButtonProps) => {
  const { children, type } = props

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: type === 'image' ? defaultImageItem : defaultTextItem,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))


  return (
    <button
      className={`py-2 border border-slate-950 rounded-md ${isDragging ? 'opacity-50' : 'opacity-100'}`}
      ref={drag}
    >
      {children}
    </button>
  )
}

export default Button

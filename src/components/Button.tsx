import { ReactNode } from "react"
import { useDrag } from "react-dnd"

interface ButtonProps {
  children: ReactNode
  type: string
}

const Button = (props: ButtonProps) => {
  const { children, type } = props

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { type },
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

import Button from "./Button"

const Sidebar = () => {
  return (
    <aside className="h-screen w-1/4 p-4 flex flex-col justify-center border-r-2">
      <div className="flex flex-col justify-center space-y-2">
        <Button>
          圖片元件
        </Button>
        <Button>
          文字元件
        </Button>
      </div>
    </aside>
  )
}

export default Sidebar
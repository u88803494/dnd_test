import useItemStore from "../stores";
import Button from "./Button";
import Editor from "./Editor";

const Sidebar = () => {
  const { selectedUuid } = useItemStore();

  return (
    <aside className="w-1/4 h-screen p-4 flex flex-col justify-center border-r-2 sticky top-0">
      {selectedUuid ? (
        <Editor />
      ) : (
        <div className="flex flex-col justify-center space-y-2">
          <Button type="image">
            圖片元件
          </Button>
          <Button type="text">
            文字元件
          </Button>
        </div>
      )}
    </aside>
  )
};

export default Sidebar;

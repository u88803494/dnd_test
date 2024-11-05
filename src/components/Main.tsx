const Main = () => {
  return (
    <div className="w-3/4 relative">
      <nav className="w-full h-8 sticky flex justify-center items-center bg-white border">
        <div>
          This is a fixed header, no need to modify
        </div>
      </nav>
      <main className="px-2 py-4">
        主內容
      </main>
    </div>
  )
}

export default Main
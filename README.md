# React DND Editor

這是一個支援拖放功能的前端應用程式，使用 React 和 Tailwind CSS，能夠透過側邊欄添加或編輯項目，並且在畫面上進行即時調整。

## 功能

- **拖放 (Drag and Drop)**：可將項目從側邊欄拖放至主畫面。
- **編輯項目**：支援圖片或文字項目的屬性調整，包含 URL、寬度和高度等。
- **即時儲存**：在更新項目後，即時保存狀態並展示變更結果。
- **固定側邊欄**：側邊欄不會隨著主畫面捲動，保持靜止顯示。

## 技術棧

- **React**：前端框架，用於構建 UI 和管理狀態。
- **Tailwind CSS**：用於快速設計和佈局樣式。
- **React DnD**：管理拖放行為。

## 專案結構

```plaintext
.
├── src/
│   ├── components/
│   │   ├── Button.tsx            # 按鈕元件，整合拖曳功能
│   │   ├── Editor.tsx            # 編輯區，提供項目編輯功能
│   │   ├── Main.tsx              # 主畫面，包含拖放區域
│   │   └── Sidebar.tsx           # 側邊欄
│   ├── stores/
│   │   └── index.ts              # 狀態管理 store
│   └── types/
│       └── index.ts              # 類型定義
├── README.md                     # 專案說明文件
├── package.json                  # 專案依賴管理
└── tsconfig.json                 # TypeScript 設定
```

## 開發說明

- **新增項目**：在側邊欄中選擇不同的項目（圖片或文字），並拖放至主畫面。
- **編輯項目**：點擊主畫面中的項目以啟用編輯功能，編輯屬性後按下 Enter 鍵保存。
- **固定側邊欄**：側邊欄被設定為 `position: fixed`，因此即使捲動主畫面，它仍保持不動。

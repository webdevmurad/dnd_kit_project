import PlusIcon from "../icons/PlusIcon"
import { useState } from "react"
import {Column, Id} from "../types.ts";
import ColumnContainer from "./ColumnContainer.tsx";

function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([])

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    }

    setColumns([...columns, columnToAdd])
  }

  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter(col => col.id !== id)
    setColumns(filteredColumns)
  }

  return (
    <div
      className="
        m-auto
        flex
        min-h-screen
        w-full
        items-center
        overflow-x-auto
        overflow-y-hidden
        px-[40px]
      "
    >
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
          {
            columns.map((col) => (
              <ColumnContainer
                key={col.id}
                column={col}
                deleteColumn={deleteColumn}
              />
            ))
          }
        </div>
        <button
          onClick={() => {
            createNewColumn()
          }}
          className="
            h-[60px]
            w-[350px]
            min-w-[350px]
            cursor-pointer
            rounded-lg
            bg-mainBackgroundColor
            border-2
            border-columnBackgroundColor
            p-4
            ring-rose-500
            hover:ring-2
            flex
            gap-2
          "
        >
          <PlusIcon />
          Добавить колонку
        </button>
      </div>
    </div>
  )
}

function generateId() {
  return Math.floor(Math.random() * 10001)
}

export default KanbanBoard
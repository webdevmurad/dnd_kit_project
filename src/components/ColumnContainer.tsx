import {Column, Id} from "../types.ts";
import TrashIcon from "../icons/TrashIcon.tsx";

interface Props {
    column: Column
    deleteColumn: (id: Id) => void
}

function ColumnContainer(props: Props) {
    const { column, deleteColumn } = props

    return (
        <div className="
            bg-columnBackgroundColor
            w-[350px]
            h-[500px]
            max-h-[500px]
            rounded-md
            flex
            flex-col
        ">
            <div className="
                bg-mainBackgroundColor
                text-md
                h-[60px]
                cursor-grab
                rounded-md
                rounded-b-none
                p-3
                font-bold
                border-columnBackgroundColor
                border-4
                flex
                items-center
                justify-between
            ">
                <div
                    className="
                        flex
                        gap-2
                    "
                >
                    <div className="
                        flex
                        justify-center
                        items-center
                        bg-columnBackgroundColor
                        px-2
                        py-1
                        text-sm
                        rounded-full
                    ">
                        0
                    </div>

                    { column.title }
                </div>

                <button
                    onClick={() => {
                        deleteColumn(column.id)
                    }}
                    className="
                    stroke-gray-500
                    hover:stroke-white
                    hover:bg-columnBackgroundColor
                    rounded
                    px-1
                    text-sm
                    rounded-full"
                >
                    <TrashIcon />
                </button>
            </div>

        </div>
    );
}

export default ColumnContainer;
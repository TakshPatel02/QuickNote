import { HeartIcon } from "lucide-react";
import React from "react";

const NoteCard = ({
  elem,
  idx,
  updateNote,
  deleteNote,
  addToWishList,
  WishList,
  removeFromWishList,
}) => {
  const isWished = WishList.some(
    (w) => w.title === elem.title && w.content === elem.content
  );

  return (
    <div
      key={idx}
      className="relative w-full border border-(--border) rounded-md p-3 sm:p-4 mb-3 sm:mb-4 bg-(--bg-card) text-(--text-main)"
    >
      <h2 className="text-center font-bold text-lg sm:text-xl mb-3 sm:mb-4 capitalize pr-8">
        {elem.title}
      </h2>
      <hr className="mb-3 sm:mb-4" />
      <pre className="whitespace-pre-wrap wrap-break-word text-sm sm:text-base">
        <code>{elem.content}</code>
      </pre>
      <div className="buttons flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-3 sm:mt-4">
        <button
          className="w-full sm:w-1/2 bg-(--bg) text-(--text-main) py-2 rounded-md text-sm sm:text-base hover:bg-(--bg-sidebar) transition-colors"
          onClick={() => updateNote(idx)}
        >
          Edit Note
        </button>
        <button
          className="w-full sm:w-1/2 bg-(--bg) text-(--text-main) py-2 rounded-md text-sm sm:text-base hover:bg-(--bg-sidebar) transition-colors"
          onClick={() => deleteNote(idx)}
        >
          Delete Note
        </button>
      </div>
      <button
        onClick={() => addToWishList(elem)}
        onDoubleClick={() => removeFromWishList(elem)}
        className="absolute top-3 sm:top-4 right-3 sm:right-4"
      >
        {isWished ? (
          <HeartIcon
            size={20}
            className="fill-(--text-main) stroke-(--text-main)"
          />
        ) : (
          <HeartIcon size={20} className="stroke-(--text-main)" />
        )}
      </button>
    </div>
  );
};

export default NoteCard;

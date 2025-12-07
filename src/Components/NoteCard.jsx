import { HeartIcon } from "lucide-react";
import React from "react";

const NoteCard = ({
  elem,
  idx,
  updateNote,
  deleteNote,
  addToWishList,
  WishList,
  removeFromWishList
}) => {
  const isWished = WishList.some(
    (w) => w.title === elem.title && w.content === elem.content
  );

  return (
    <div
      key={idx}
      className="relative w-full border border-(--border) rounded-md p-4 mb-4 bg-(--bg-card) text-(--text-main)"
    >
      <h2 className="text-center font-bold text-xl mb-4 capitalize">
        {elem.title}
      </h2>
      <hr className="mb-4" />
      <pre className="whitespace-pre-wrap wrap-break-word">
        <code>{elem.content}</code>
      </pre>
      <div className="buttons flex justify-center gap-4 mt-4">
        <button
          className="w-1/2 bg-(--bg) text-(--text-main) py-2 rounded-md"
          onClick={() => updateNote(idx)}
        >
          Edit Note
        </button>
        <button
          className="w-1/2 bg-(--bg) text-(--text-main) py-2 rounded-md"
          onClick={() => deleteNote(idx)}
        >
          Delete Note
        </button>
      </div>
      <button 
        onClick={() => addToWishList(elem)}
        onDoubleClick={() => removeFromWishList(elem)}
      >
        {isWished ? (
          <HeartIcon className="absolute top-4 right-4 fill-(--text-main) stroke-(--text-main)"/>
        ) : (
          <HeartIcon className="absolute top-4 right-4 stroke-(--text-main)" />
        )}
      </button>
    </div>
  );
};

export default NoteCard;

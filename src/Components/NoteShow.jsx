import React from "react";
import NoteCard from "./NoteCard";

const NoteShow = ({ task , deleteNote , updateNote , addToWishList , WishList , removeFromWishList }) => {
  return (
    <div className="w-1/2 h-full mt-4 flex flex-col">
      <h1 className="text-center text-2xl font-bold text-(--text-heading) mb-4">
        Recent Notes
      </h1>
      {task.length === 0 && (
        <p className="text-(--text-main) text-center mt-2">No Notes Available</p>
      )}
      <div className="flex-1 overflow-y-scroll hide-scrollbar">
        {task.map((elem , idx) => (
          <NoteCard 
            idx={idx}
            elem={elem}
            key={idx}
            updateNote={updateNote}
            deleteNote={deleteNote}
            addToWishList={addToWishList}
            WishList={WishList}
            removeFromWishList={removeFromWishList}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteShow;

import React, { useEffect, useState } from "react";
import NoteForm from "../Components/NoteForm";
import NoteShow from "../Components/NoteShow";

const Notes = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });
  const [task, setTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [WishList, setWishList] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes")) || [];
    setTask(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(task));
  }, [task]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    if (editIndex !== null) {
      copyTask[editIndex] = form;
      setTask(copyTask);
      setEditIndex(null);
    } else {
      copyTask.push(form);
      setTask(copyTask);
    }
    setForm({ title: "", content: "" });
  };

  const deleteNote = (idx) => {
    const deleteTask = [...task];
    if (confirm("Are you sure you want to delete this note?")) {
      deleteTask.splice(idx, 1);
      setTask(deleteTask);
    }
  };

  const updateNote = (idx) => {
    setForm({
      title: task[idx].title,
      content: task[idx].content,
    });
    setEditIndex(idx);
  };

  const addToWishList = (note) => {
    const exists = WishList.some(
      (w) => w.title === note.title && w.content === note.content
    );
    if (exists) return;

    const updated = [...WishList, note];
    setWishList(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const removeFromWishList = (note) => {
    const updated = WishList.filter(
      (w) => !(w.title === note.title && w.content === note.content)
    );
    setWishList(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="w-full h-[calc(100vh-65px)] bg-(--bg) overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-4 md:gap-8 h-full px-4 md:px-4">
        <NoteForm
          form={form}
          setForm={setForm}
          submitHandler={submitHandler}
          editIndex={editIndex}
        />
        <NoteShow
          task={task}
          updateNote={updateNote}
          deleteNote={deleteNote}
          addToWishList={addToWishList}
          WishList={WishList}
          removeFromWishList={removeFromWishList}
        />
      </div>
    </div>
  );
};

export default Notes;

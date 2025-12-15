import React from "react";

const NoteForm = ({ form, setForm, submitHandler }) => {
  return (
    <div className="w-full md:w-1/2 h-auto md:h-full mt-2 md:mt-4">
      <h1 className="text-center text-xl sm:text-2xl font-bold text-(--text-heading) mb-3 md:mb-4">
        Create Notes
      </h1>
      <form className="inputs" onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder="Enter your notes title here..."
          className="w-full p-3 sm:p-4 mb-3 md:mb-4 border border-(--border) rounded-md text-(--text-main) bg-(--bg-sidebar) text-sm sm:text-base"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Enter your notes here..."
          className="border border-(--border) p-3 sm:p-4 mb-3 md:mb-4 h-48 sm:h-64 md:h-96 w-full bg-(--bg-sidebar) rounded-md text-(--text-main) hide-scrollbar text-sm sm:text-base"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
        ></textarea>
        <button className="w-full text-(--text-main) bg-(--bg-sidebar) py-3 sm:py-4 rounded-md hover:scale-102 transition-all duration-200 text-sm sm:text-base">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default NoteForm;

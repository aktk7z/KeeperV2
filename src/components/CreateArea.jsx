import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const handleOnSubmit = (event) => {
    props.addHandler(note);
    // 注意：如果Input跟Textarea不是受控组件的话，画面上的文字将不会被清除
    setNote({ title: "", content: "" });
    event.preventDefault(); // 阻止表单提交后重新渲染整个页面
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={handleOnChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleOnChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

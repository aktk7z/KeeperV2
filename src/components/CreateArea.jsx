import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleExpand = () => {
    setIsExpanded(true);
  };

  return (
    <div>
      <form className="create-note" onSubmit={handleOnSubmit}>
        {isExpanded && (
          <input
            onChange={handleOnChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onClick={handleExpand}
          onChange={handleOnChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

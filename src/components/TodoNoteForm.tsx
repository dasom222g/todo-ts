import React from 'react';

function TodoNoteForm() {
  // 로직 부분
  // 화면 부분
  return (
    <div>
      <div className="todo__detail-desc">
        <textarea
          placeholder="Write a note.."
        ></textarea>
      </div>
      <div className="button-area">
        <button type="button" className="button-base button-base--cancel">Cancel</button>
        <button type="button" className="button-base">Confirm</button>
      </div>
    </div>
  )
}

export default TodoNoteForm
import React from 'react';
import '../stylesheets/Modal.scss'

export default function Modal({body, toggleOpen, handleSubmit}) {
  return (
    <div id="modal">
      <div className="modal-inner">
        <div className="body">
          {body}
        </div>
        <div className="footer">
          <button onClick={handleSubmit}>Confirm</button>
          <span className="divider"></span>
          <button onClick={() => toggleOpen(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
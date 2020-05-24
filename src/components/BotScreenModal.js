import React,{useState} from 'react';
import '../style/Modal.scss';

const botModal = ({isOpen, close }) => {
  return (
    <div>
    {
      isOpen ?
      <div>
      <div className="Modal-overlay" onClick={close} />
        <div className="Modal">
        <p className="title"></p>
          <div className="content">
                This is the image
          </div>
          <div className="button-wrap">
            <button onClick={close}>Close</button>
          </div>
        </div>
      </div>
      :
      null
    }
    </div>
  )
}
export default botModal;
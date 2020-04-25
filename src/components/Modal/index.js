import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import {useClickOutside} from 'customHook';

import './styles.scss';

const Modal = ({onClose, children}) => {
    const clickRef = useRef();
    useClickOutside(clickRef, onClose);

    return (
        ReactDOM.createPortal((
            <div className="modal">
                <section ref={clickRef} className="modal_inner">
                    <span onClick={onClose} className="modal_close" />
                    {children}
                </section>
            </div>
        ), document.body)
    )
}

export default Modal;
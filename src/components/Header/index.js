import React, {useCallback, useState} from 'react';
import Modal from 'components/Modal';
import InformationBox from './InformationBox';

import './styles.scss';

const Header = () => {
    const [openModal, setOpenModal] = useState(false);
    const toggleHandler = useCallback(() => setOpenModal(!openModal), [openModal]);

    return (
        <>
            {openModal && <Modal onClose={toggleHandler}>
                <InformationBox />
            </Modal>}
            <header className="app-header">
                <div className="app-header_inner">
                    Car Gallery
                    <button onClick={toggleHandler} className="action-button">
                        Add Information
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;
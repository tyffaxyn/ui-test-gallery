import React from 'react';
import Loader from 'components/Loader';

import './styles.scss'

const Gallery = ({loading, children}) => {
    return (
        <div className="gallery">
            {children}
            {loading && <Loader />}
        </div>
    )
};

export default Gallery
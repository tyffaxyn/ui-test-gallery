import React from 'react';
import {useHandleImageError} from 'customHook';
import default_avatar from './assets/default_avatar.svg';

import './styles.scss';

const Avatar = ({imageSrc = default_avatar, alt = 'avatar'}) => {
    const handleError = useHandleImageError(default_avatar);

    return (
        <div className="avatar">
            <img className="avatar_image" onError={handleError} src={imageSrc} alt={alt} />
        </div>
    )
};

export default Avatar
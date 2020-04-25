import React from 'react';
import Avatar from "components/Avatar";
import LikeBox from "components/LikeBox";
import {useHandleImageError} from 'customHook';

import bad_image from './assets/bad_image.png';

import './styles.scss';

const Thumbnail = ({img: {urls, alt_description, ratio, color, liked_by_user, likes, user}, expandCallBack}) => {
    const handleError = useHandleImageError(bad_image);

    return (
        <div className={`thumbnail v${Math.ceil(ratio) || 1}`}>
            <div className="thumbnail_prev" style={{'--br-color': color}}>
                <img
                    onError={handleError}
                    className="thumbnail_image"
                    src={urls.small || bad_image}
                    alt={alt_description || ''}
                />
                <div className="thumbnail_overlay">
                    <button onClick={expandCallBack} className="thumbnail_button">Expand ↖</button>
                </div>
            </div>
            <div className="thumbnail_line">
                <Avatar imageSrc={user.profile_image.small} alt={user.name} />
                <span className="thumbnail_name">{user.first_name}</span>
                <LikeBox liked={liked_by_user} likes={likes} />
            </div>
        </div>
    )
};

export default React.memo(Thumbnail);
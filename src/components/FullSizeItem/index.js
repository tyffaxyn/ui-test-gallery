import React, {useMemo} from 'react';
import Avatar from 'components/Avatar';
import LikeBox from 'components/LikeBox';

import './styles.scss';

const FullSizeItem = ({data: {urls, color, description, updated_at, liked_by_user, likes, alt_description, user}}) => {
    let formattedDate = useMemo(() => {
        const opt = {year: 'numeric', month: 'long', day: 'numeric'};
        return new Intl.DateTimeFormat('default', opt).format(new Date(updated_at));
    }, [updated_at])

    return (
        <article style={{'--br-color': color}} className="full-box">
            <img
                className="full-image"
                src={urls.full}
                alt={alt_description || ''}
            />
            <div className="full-info">
                <div className="full-info_top-line">
                    <Avatar alt={user.name} imageSrc={user.profile_image.small} />
                    <span className="full-info_name">{user.name}</span>
                    <LikeBox liked={liked_by_user} likes={likes} />
                </div>
                <p>
                    {description}
                </p>
                <p>
                    Updated: <time>{formattedDate}</time>
                </p>
            </div>
        </article>
    )
}

export default FullSizeItem;
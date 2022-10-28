import React from 'react'
import PropTypes from 'prop-types'

import css from './Profile.module.css'

export default function Profile({username, tag, location, avatar, stats}) {
    return (
            <div className={css.description}>
            <img className={css.avatar} src={avatar} alt={username}/>
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
                <ul className={css.dataList}>
                    <li className={css.data}><span className={css.label}>Followers</span><span className={css.quantity}>{stats.followers}</span></li>
                    <li className={css.data}><span className={css.label}>Views</span><span className={css.quantity}>{stats.views}</span></li>
                    <li className={css.data}><span className={css.label}>Likes</span><span className={css.quantity}>{stats.likes}</span></li>
                </ul>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}
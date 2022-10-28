
import React from 'react'
import PropTypes from 'prop-types'

export default function CreateUser({username, tag, location, avatar, stats}) {
    return (
        <div>
            <img src={avatar} alt={username} width="240px" />
            <h2>{username}</h2>
            <p>@{tag}</p>
            <p>{location}</p>
                <ul>
                    <li><p>Followers</p><span>{stats.followers}</span></li>
                    <li><p>Views</p><span>{stats.views}</span></li>
                    <li><p>Likes</p><span>{stats.likes}</span></li>
                </ul>
        </div>
    )
}

CreateUser.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
}
import React from 'react'
import PropTypes from 'prop-types'

import css from './Friendlist.module.css'
import FriendListItem from './FriendListItem'

export default function Friendlist({ friends }) {
    return (
        <ul className={css.friendlist}>
            {friends.map(({avatar, name, isOnline, id}) => (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} ></FriendListItem>
            ))}
        </ul>
    )
}

Friendlist.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
    })).isRequired
}

// PropTypes.string, PropTypes.bool, PropTypes.number
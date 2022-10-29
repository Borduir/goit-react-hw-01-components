import React from 'react'
import PropTypes from 'prop-types'

import css from './Friendlist.module.css'

export default function Friendlist({ friends }) {
    return (
        <ul className={css.friendlist}>
            {friends.map(friend => (
            <li key={friend.friendId} className={css.item}>
  {friend.isOnline===true ? (<span className={css.online}></span>):(<span className={css.offline}></span>)}
  <img className={css.friendAvatar} src={friend.friendAvatar} alt="User avatar" width= "48" />
    <p className={css.friendName}>{friend.friendName}</p>
        </li>
        ))}
        </ul>
    )
}

Friendlist.propTypes = {friends: PropTypes.array.isRequired}
import React from 'react'

import css from './Friendlist.module.css'

export default function FriendListItem({avatar, name, isOnline}) {
    return (<li className={css.item}>
        {isOnline === true ? (<span className={css.online}></span>) : (<span className={css.offline}></span>)}
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>)
}
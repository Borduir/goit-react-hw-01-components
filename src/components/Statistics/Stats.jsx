import React from 'react'
import PropTypes from 'prop-types'

import css from './Stats.module.css'

export default function Statistics({ dataList, statTitle }) {
    const randomColor = () => {return '#' + Math.floor(Math.random() * 16777215).toString(16)}
    return (
        <section className={css.statistics}>
            {statTitle && (
        <h2 className={css.title}>{statTitle}</h2>
      )}
            <ul className={css.statList}>
                {dataList.map(data => (
                    <li key={data.id} className={css.item} style={{backgroundColor: `${randomColor()}`}}>
                        <span className={css.label}>{data.label}</span>
                        <span className={css.percentage}>{data.percentage}%</span>
                    </li>
                ))}
            </ul>
</section>
    )
}
Statistics.propTypes = {
    dataList: PropTypes.array.isRequired,
    statTitle: PropTypes.string
}
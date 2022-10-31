import React from 'react'
import PropTypes from 'prop-types'

import css from './Statistics.module.css'

export default function Statistics({ data, title }) {
    const randomColor = () => {return '#' + Math.floor(Math.random() * 16777215).toString(16)}
    return (
        <section className={css.statistics}>
            {title && (
        <h2 className={css.title}>{title}</h2>
      )}
            <ul className={css.statList}>
                {data.map(data => (
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
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    })).isRequired,
    title: PropTypes.string
}
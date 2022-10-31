import React from 'react'
import PropTypes from 'prop-types'

import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
  return (
      <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th className={css.tabletHead}>Type</th>
      <th className={css.tabletHead}>Amount</th>
      <th className={css.tabletHead}>Currency</th>
    </tr>
  </thead>
  <tbody>
        {items.map(item => (
      <tr key={item.id} className={css.tabletRow}>
      <td className={css.tabletCell}>{item.type}</td>
      <td className={css.tabletCell}>{item.amount}</td>
      <td className={css.tabletCell}>{item.currency}</td>
    </tr>)
    )}
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    })).isRequired
}

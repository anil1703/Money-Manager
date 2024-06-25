// Write your code here
import './index.css'

const TransactionItem = props => {
  const {detailsHistory, deletingSlary} = props
  const {id, titled, amounted, typed} = detailsHistory
  const deleteing = () => {
    deletingSlary(id)
  }
  return (
    <li className="inside-history">
      <p>{titled}</p>
      <p>
        <span>Rs</span> {amounted}
      </p>
      <p>{typed}</p>
      <button onClick={deleteing} data-testid="delete" className="butn-delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-style"
        />
      </button>
    </li>
  )
}

export default TransactionItem

// Write your code here
import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {balance, expenses, income} = this.props
    return (
      <ul className="ul-list">
        <li className="list-style">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="img-style"
          />
          <div>
            <p className="para-money">Your Balance</p>
            <p className="head-money" data-testid="balanceAmount">
              <span>Rs</span> {balance}
            </p>
          </div>
        </li>
        <li className="list-style-two">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
            alt="income"
            className="img-style"
          />
          <div>
            <p className="para-money">Your Income</p>
            <p className="head-money" data-testid="incomeAmount">
              <span>Rs</span> {income}
            </p>
          </div>
        </li>
        <li className="list-style-three">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
            alt="expenses"
            className="img-style"
          />
          <div>
            <p className="para-money">Your Expenses</p>
            <p className="head-money" data-testid="expensesAmount">
              <span>Rs</span> {expenses}
            </p>
          </div>
        </li>
      </ul>
    )
  }
}

export default MoneyDetails

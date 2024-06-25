import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: '',
    listo: [],
    optionId: transactionTypeOptions[0].optionId,
  }
  typingTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }
  typingRupees = event => {
    this.setState({
      amount: event.target.value,
    })
  }
  chaningOption = event => {
    this.setState({
      type: event.target.value,
    })
  }
  clickingButton = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const samplelisto = {
      id: uuidv4(),
      titled: title,
      amounted: parseInt(amount),
      typed: type,
    }
    this.setState(prevState => {
      return {
        listo: [...prevState.listo, samplelisto],
        title: '',
        amount: '',
        type: '',
      }
    })
  }
  deletingSlary = id => {
    this.setState(prevof => {
      const deletedList = prevof.listo.filter(echList => {
        return echList.id !== id
      })
      return {listo: deletedList}
    })
  }

  getExpenses = () => {
    const {listo} = this.state
    let expee = 0
    listo.forEach(eachTrans => {
      if (eachTrans.typed === transactionTypeOptions[1].displayText) {
        expee += eachTrans.amounted
      }
    })
    return expee
  }
  getIncome = () => {
    const {listo} = this.state
    let incoo = 0
    listo.forEach(eachTrans => {
      if (eachTrans.typed === transactionTypeOptions[0].displayText) {
        incoo += eachTrans.amounted
      }
    })
    return incoo
  }
  getBalance = () => {
    const {listo} = this.state
    let balance = 0
    let incomeAmount = 0
    let expenseAmount = 0
    listo.forEach(echTransaction => {
      if (echTransaction.typed === transactionTypeOptions[0].displayText) {
        incomeAmount += echTransaction.amounted
      } else {
        expenseAmount += echTransaction.amounted
      }
    })
    balance = incomeAmount - expenseAmount
    return balance
  }
  render() {
    const expee = this.getExpenses()
    const incoo = this.getIncome()
    const balance = this.getBalance()
    console.log(expee)
    console.log(incoo)
    console.log(balance)
    const {listo, title, amount} = this.state
    return (
      <div className="home">
        <div className="banner">
          <h1>Hi,Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails balance={balance} expenses={expee} income={incoo} />
        <div className="bottom">
          <div className="frm">
            <h1>Add Transaction</h1>
            <form>
              <label htmlFor="idtitle">TITLE</label>
              <input
                id="idtitle"
                type="text"
                onChange={this.typingTitle}
                placeholder="INPUT"
                className="input-style"
                value={title}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                id="amount"
                type="text"
                onChange={this.typingRupees}
                placeholder="AMOUNT"
                className="input-style"
                value={amount}
              />
              <label htmlFor="tyoe">TYPE</label>
              <select
                id="tyoe"
                onChange={this.chaningOption}
                className="input-style"
              >
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button onClick={this.clickingButton} className="butn-style">
                Add
              </button>
            </form>
          </div>
          <div className="hstry">
            <h1>History</h1>
            <ul className="history-list">
              <li className="list-history">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              {listo.map(eachItem => (
                <TransactionItem
                  deletingSlary={this.deletingSlary}
                  key={eachItem.key}
                  detailsHistory={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

import {Component} from 'react'

import './index.css'

import MoneyDetails from '../MoneyDetails'

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

class MoneyManger extends Component {
  state = {title: '', amount: '', optionId: ''}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  render() {
    const {title, amount, optionId} = this.state
    // console.log(typeof(amount))
    return (
      <div className="">
        <div className="">
          <h1 className="">Hi,Richard</h1>
          <p className="">Welcome back to your Money manager</p>
        </div>
        <MoneyDetails />
        <div className="">
          <h1 className="">Add Transaction</h1>
          <label htmlFor="title" className="">
            TITLE
          </label>
          <input
            onChange={this.onChangeTitle}
            id="title"
            className=""
            value={title}
            type="text"
          />
          <label htmlFor="amount" className="">
            AMOUNT
          </label>
          <input
            onChange={this.onChangeAmount}
            id="amount"
            className=""
            value={amount}
            type="text"
          />
          <label htmlFor="select" className="">
            Type
          </label>
          <select
            id="select"
            className="input"
            value={optionId}
            onChange={this.onChangeOptionId}
          >
            {transactionTypeOptions.map(eachOption => (
              <option key={eachOption.optionId} value={eachOption.optionId}>
                {eachOption.displayText}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

export default MoneyManger

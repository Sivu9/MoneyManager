// Write your code here
import {Component} from 'react'

import './index.css'

class MoneyDetails extends Component {
  state = {balance: '', income: '', expenses: ''}

  render() {
    const {balance, income, expenses} = this.state

    return (
      <div className="">
        <div className="">
          <img src="" className="" alt="" />
          <div className="">
            <h1 className="">Your Balance</h1>
            <p className="">
              Rs <span className="">{balance}</span>
            </p>
          </div>
        </div>
        <div className="">
          <img src="" className="" alt="" />
          <div className="">
            <h1 className="">Your Income</h1>
            <p className="">
              Rs <span className="">{income}</span>
            </p>
          </div>
        </div>
        <div className="">
          <img src="" className="" alt="" />
          <div className="">
            <h1 className="">Your Expenses</h1>
            <p className="">
              Rs <span className="">{expenses}</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails

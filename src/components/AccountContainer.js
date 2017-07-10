import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      searchTerm: '',
      transactions: []
    }
  }

  getTransactions() {
    const apiUrl = 'https://boiling-brook-94902.herokuapp.com/transactions'
    fetch(apiUrl)
    .then(res => res.json())
  }

  handleChange(search) {
    this.setState({
      searchTerm: search
    })
  }

  getTransactions() {
    const apiUrl = 'https://boiling-brook-94902.herokuapp.com/transactions'
    fetch(apiUrl)
    .then(res => res.json())
    .then(r => this.setState({
      transactions: r
      })
    )
  }

  componentWillMount() {
    this.getTransactions()
  }

  render() {
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)} />
        <TransactionsList search={this.state.searchTerm} transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer

import React from 'react'
import Transaction from './Transaction'

export default class TransactionsList extends React.Component {

    render() {
      if(this.props.transactions) {
        var filteredTransactions = []
        var allTransactions = []
        if (this.props.searchTerm.length > 0 && this.props.transactions) {
          filteredTransactions = this.props.transactions.filter((el) => el.description.toLowerCase().includes(this.props.searchTerm.toLowerCase()) || el.category.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
          allTransactions = filteredTransactions.map((el, i) => <Transaction key={i} transaction={el} />)
        } else {
          allTransactions = this.props.transactions
        }

      return (
        <table className="ui celled striped padded table">
          <tbody>
            <tr>
              <th>
                <h3 className="ui center aligned header">
                  Posted At
                </h3>
              </th>
              <th>
                <h3 className="ui center aligned header">
                  Description
                </h3>
              </th>
              <th>
                <h3 className="ui center aligned header">
                  Category
                </h3>
              </th>
              <th>
                <h3 className="ui center aligned header">
                  Amount
                </h3>
              </th>
            </tr>

            {allTransactions}

          </tbody>
        </table>
      )
    }

  }
}

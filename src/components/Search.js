import React from 'react'

export default class Search extends React.Component {

  constructor() {
    super()

    this.state = {
      searchTerm: ''
    }
  }

  updateSearch(event) {
    this.setState({
      searchTerm: event.target.value
    })
    this.props.handleChange(event.target.value)
  }



  render () {
    return (
      <div className="ui huge fluid icon input">
        <input
          onChange={this.updateSearch.bind(this)}
          type="text"
          placeholder={"Search your Recent Transactions"}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }

}

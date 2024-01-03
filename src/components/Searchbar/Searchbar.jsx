import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
// import { FormBtn, InputSearch, SearchbarStyled } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <FiSearch size="16px" />
          </button>

          <input
            type="text"
            name="search"
            onChange={this.handleChange}
            value={this.state.search}
            required
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

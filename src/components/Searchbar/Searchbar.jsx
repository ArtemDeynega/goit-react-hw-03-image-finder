import { Component } from 'react';
import { Header, Form, FormButton, ButtonLabel, FormIpnut } from '.';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    searchValue: '',
  };
  handleInputChange = evt => {
    this.setState({ searchValue: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const { searchValue } = this.state;
    if (searchValue.trim() === '') {
      toast.warn(`Введите слово для поиска 😕`);
      return;
    }

    this.props.onSubmit(searchValue.trim().toLowerCase());
    this.resetRequest();
  };
  resetRequest = () => {
    this.setState({ searchValue: '' });
  };
  render() {
    const { searchValue } = this.state;

    return (
      <>
        <Header>
          <Form onSubmit={this.handleSubmit}>
            <FormButton type="submit">
              <ImSearch
                style={{
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  color: 'black',
                }}
              />
              <ButtonLabel>Search</ButtonLabel>
            </FormButton>
            <FormIpnut
              placeholder="Search images and photos"
              value={searchValue}
              onChange={this.handleInputChange}
            />
          </Form>
        </Header>
      </>
    );
  }
}

import { Component } from 'react';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import imagesApi from 'service/imageApi';
import { toast, ToastContainer } from 'react-toastify';
import { GlobalStyles } from 'Styles/GlobalStyles/GlobalStyles';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    status: 'indle',
  };
  handleNewQuery = newRequest => {
    const { searchQuery } = this.props;
    if (newRequest !== searchQuery) {
      this.setState({ searchQuery: newRequest, page: 1, status: 'pending' });
    }
  };
  render() {
    console.log(this.state.searchQuery);
    return (
      <>
        <Searchbar onSubmit={this.handleNewQuery} />
        {/* <ImageGallery />
        <Loader />
        <Modal /> */}
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

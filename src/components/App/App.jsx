import { Component } from 'react';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import { GlobalStyles } from 'Styles/GlobalStyles/GlobalStyles';

export class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <Loader />
        <Modal />
        <GlobalStyles />
      </>
    );
  }
}

import { Component } from 'react';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';

import imagesApi from 'service/imageApi';
import { toast, ToastContainer } from 'react-toastify';
import { GlobalStyles } from 'Styles/GlobalStyles/GlobalStyles';

export class App extends Component {
  state = {
    gallery: [],
    searchQuery: '',
    page: 1,
    status: 'idle',
    error: null,
    showModal: false,
    modalImg: '',
    modalAlt: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const currentQuery = this.state.searchQuery;

    const prevPage = prevState.page;
    const currentPage = this.state.page;

    if (currentPage > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'auto',
      });
    }

    if (prevQuery !== currentQuery) {
      this.setState({ gallery: [], status: 'pending' });
    }
    if (prevQuery !== currentQuery || prevPage !== currentPage) {
      await imagesApi(currentQuery, currentPage)
        .then(data => {
          const images = data;

          if (images.length > 0) {
            images.map(({ id, tags, webformatURL, largeImageURL }) => {
              return this.setState(({ gallery }) => ({
                gallery: [
                  ...gallery,
                  { id, tags, webformatURL, largeImageURL },
                ],
                status: 'resolved',
              }));
            });
          } else {
            toast.warn(
              `По вашему запросу ${currentQuery} не чего не найдено 😕 `,
              {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
            this.setState({ status: 'idle' });
          }
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
          toast.error(`Что то пошло не так 😔`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  }
  handleNewQuery = newRequest => {
    const { searchQuery } = this.state;

    if (newRequest !== searchQuery) {
      this.setState({ searchQuery: newRequest, page: 1, status: 'pending' });
      toast.error();
    }
  };
  handleClickBtn = evt => {
    console.log(evt.code);
    this.setState(({ page }) => {
      return { page: page + 1, status: 'pending' };
    });
  };
  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  handClickImage = evt => {
    console.log(evt.target);
    const modalImg = evt.target.dataset.src;
    const modalAlt = evt.target.alt;

    this.setState({
      showModal: true,
      modalAlt,
      modalImg,
    });
  };
  render() {
    const { gallery, status, showModal, modalAlt, modalImg } = this.state;
    console.log(modalAlt);
    return (
      <>
        <Searchbar onSubmit={this.handleNewQuery} />

        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <>
            {showModal && (
              <Modal
                onCloseModal={this.toogleModal}
                modalAlt={modalAlt}
                modalImg={modalImg}
              />
            )}

            <ImageGallery gallery={gallery} onClickImg={this.handClickImage} />
            <Button onClickBtn={this.handleClickBtn} />
          </>
        )}
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

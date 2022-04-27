import PropTypes from 'prop-types';
import { GalleryItem, ImgGalleryItem } from '.';

export const ImageGalleryItem = ({ tags, cardImg, modalImg, onClick }) => {
  return (
    <>
      <GalleryItem onClick={onClick}>
        <ImgGalleryItem src={cardImg} alt={tags} data-src={modalImg} />
      </GalleryItem>
    </>
  );
};
ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  cardImg: PropTypes.string.isRequired,
  modalImg: PropTypes.string.isRequired,
};

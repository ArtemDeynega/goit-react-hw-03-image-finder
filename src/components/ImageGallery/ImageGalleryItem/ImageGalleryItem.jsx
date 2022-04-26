import PropTypes from 'prop-types';
import { GalleryItem, ImgGalleryItem } from '.';

export const ImageGalleryItem = ({ tags, cardImg, modalImg }) => {
  return (
    <>
      <GalleryItem>
        <ImgGalleryItem src={cardImg} alt={tags} />
      </GalleryItem>
    </>
  );
};
ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  cardImg: PropTypes.string.isRequired,
  modalImg: PropTypes.string.isRequired,
};

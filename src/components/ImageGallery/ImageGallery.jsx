import PropTypes from 'prop-types';
import { Gallery } from '.';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ gallery }) => {
  return (
    <>
      <Gallery>
        {gallery.map(({ id, tags, largeImageURL, webformatURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              tags={tags}
              cardImg={largeImageURL}
              modalImg={webformatURL}
            />
          );
        })}
      </Gallery>
    </>
  );
};
ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};

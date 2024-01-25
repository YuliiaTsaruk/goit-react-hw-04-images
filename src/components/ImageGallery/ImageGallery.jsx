import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ( {items} ) => {
  return (
    <GalleryList>
      {items.map(item => {
        const { webformatURL, largeImageURL, tags } = item;
        return (
          <ImageGalleryItem
            image={webformatURL}
            largeImage={largeImageURL}
            tags={tags}
            key={webformatURL}
          ></ImageGalleryItem>
        );
      })}
    </GalleryList>
  );
};

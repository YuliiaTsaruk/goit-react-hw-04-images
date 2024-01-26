import { ImgModal } from 'components/Modal/Modal';
import { useState } from 'react';
import { GalleryElement, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, largeImage, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <GalleryElement onClick={openModal}>
        <Image src={image} alt={tags} />
      </GalleryElement>
      {isModalOpen && (
        <ImgModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          largeImage={largeImage}
          tags={tags}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
        />
      )}
    </>
  );
};

import { ImgModal } from 'components/Modal/Modal';
import { useState } from 'react';
import { GalleryElement, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({image, largeImage, tags}) => {

const [isModalOpen, setIsModalOpen] = useState (false);

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

}


// export class ImageGalleryItem extends Component {
//   state = {
//     isModalOpen: false,
//   };

  // openModal = () => {
  //   this.setState({ isModalOpen: true });
  // };

  // closeModal = () => {
  //   this.setState({ isModalOpen: false });
  // };

//   render() {
//     const { image, largeImage, tags } = this.props;
//     const { isModalOpen } = this.state;

    // return (
    //   <>
    //     <GalleryElement onClick={this.openModal}>
    //       <Image src={image} alt={tags} />
    //     </GalleryElement>
    //     {isModalOpen && (
    //       <ImgModal
    //         isOpen={isModalOpen}
    //         onRequestClose={this.closeModal}
    //         largeImage={largeImage}
    //         tags={tags}
    //         shouldCloseOnOverlayClick={true}
    //         shouldCloseOnEsc={true}
    //       />
    //     )}
    //   </>
    // );
//   }
// }
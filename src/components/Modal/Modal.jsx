import Modal from 'react-modal';
import { ModalImg } from './Modal.styled';

const customStyles = {
  overlay: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1200,
  },
  content: {
    position: 'relative',
    overflow: 'auto',
    outline: 'none',
    border: 'none',
    background: 'none',
  },
};

Modal.setAppElement('#root');

export const ImgModal = ({ isOpen, onRequestClose, largeImage, tags }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Large image"
    >
      <ModalImg src={largeImage} alt={tags} />
    </Modal>
  );
};

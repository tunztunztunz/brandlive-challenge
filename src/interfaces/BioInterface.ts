import ModalInterface from "./ModalInterface";

export default interface BioInterface extends ModalInterface {
  image: string;
  isOpen: boolean;
  setSelectedModal: (val: {
      name: string, 
      position: string,
      bio: string
  }) => void;
}
export default interface ModalInterface {
  name: string;
  position: string;
  bio: string;
  setIsOpen: (val: boolean) => void;
}
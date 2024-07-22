interface IModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<IModalProps> = ({
  title,
  children,
  onClose,
}: IModalProps) => {
  return (
    <>
      <h3>{title}</h3>
      {children}
      <button onClick={onClose}>Exit</button>
    </>
  );
};

export default Modal;

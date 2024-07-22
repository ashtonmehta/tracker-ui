interface IHeaderProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title, ...attributes }) => {
  return <h1 className="text-3xl font-bold" {...attributes}>{title}</h1>;
};

export default Header;

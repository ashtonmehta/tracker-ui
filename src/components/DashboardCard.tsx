interface IDashboardCardProps {
    title: string;
    children?: React.ReactNode;
}

const DasboardCard: React.FC<IDashboardCardProps> = ({ title, children }: IDashboardCardProps) => {
  return (
    <div>
        <h3>{title}</h3>
        {children}
    </div>
  );
}

export default DasboardCard;
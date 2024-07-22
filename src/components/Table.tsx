export interface IColumn<T> {
  key: keyof T;
  header: string;
}

interface ITableProps<T> extends React.HTMLAttributes<HTMLTableElement> {
  columns: IColumn<T>[];
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const Table = <T,>({
  columns,
  items,
  renderItem,
  ...attributes
}: ITableProps<T>) => {
  return (
    <table {...attributes}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key.toString()}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>{renderItem(item)}</tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default Table;

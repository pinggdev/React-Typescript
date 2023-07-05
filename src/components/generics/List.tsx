type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
// export const List = <T extends string | number>({ items, onClick }: ListProps<T>) => {
export const List = <T extends { id: number }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {JSON.stringify(item)}
          </div>
        );
      })}
    </div>
  );
};

// Generic Component, dapat menggunakan semua type data yang akan digunakan jika diperlukan, jadi kita tidak usah menginisialisasi lagi satu persatu tipe data pada item seperti string[], number[], dan lain sebagainya.
// Hanya menggunkan Element <T> tapi bisa bebas memakai label apa saja.
// Hal ini dapat membuat kita memakai berbagai type data

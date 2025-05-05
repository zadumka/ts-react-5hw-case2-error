import css from './SearchBox.module.css';

export default function SearchBox({
  value,
  onSearch,
}: {
  value: string;
  onSearch: (searchText: string) => void;
}) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      value={value}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

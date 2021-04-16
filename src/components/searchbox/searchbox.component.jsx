export const SearchBox = ({ textToSearch, updateSearchTermListener }) => {
  return (
    <div>
      <input
        type="search"
        placeholder=""
        value={textToSearch}
        onChange={(e) => updateSearchTermListener(e.target.value)}
      />
    </div>
  );
};

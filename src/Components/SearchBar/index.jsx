const SearchBar = ({
    searchInput, 
    setSearchInput,
}) => {

  return (
    <div>
        <input
        className="rounded-lg border border-black w-80 p-2 mb-4 focus:outline-none"
        type='text' 
        placeholder='search' 
        onChange={(e)=> setSearchInput(e.target.value)}
        value={searchInput}
        />
    </div>
  )
}

export {SearchBar}
import { Search } from "../Icons/Search";
import "./SearchNavBar.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SearchNavBar = ({searchTypedValue, setSearchTypedValue, closeModal}) => {

  const navigate = useNavigate()


  const closeDetailAndCheckout = ()=>{
    if(searchTypedValue !== ''){
      closeModal()
      navigate(`/search/${searchTypedValue}`)
      setSearchTypedValue('')
    }
  }

  return (
    <div className="header-search-bar">
      <input
        placeholder="Type to Search"
        className="header-search-bar-input"
        type="text"
        name="searchValue"
        autoComplete="off"
        value={searchTypedValue}
        onChange={(e) => setSearchTypedValue(e.target.value)}
      />
        <button className="header-search-bar-button" onClick={closeDetailAndCheckout}>
          <Search />
        </button>
    </div>
  );
};

export { SearchNavBar };

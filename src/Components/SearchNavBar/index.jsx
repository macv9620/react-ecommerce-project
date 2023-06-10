import { Search } from "../Icons/Search";
import "./SearchNavBar.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/ContextAppProvider";

// eslint-disable-next-line react/prop-types
const SearchNavBar = ({searchTypedValue, setSearchTypedValue}) => {

  const{setShowDetail, setShowCheckoutSide} = useAppContext()

  const navigate = useNavigate()


  const closeDetailAndCheckout = ()=>{
    if(searchTypedValue !== ''){
      setShowDetail(false)
      setShowCheckoutSide(false)
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

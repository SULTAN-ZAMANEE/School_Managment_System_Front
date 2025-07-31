import { Search } from 'lucide-react';
import React,{useState} from 'react';

const SearchBar = ({ 
  placeholder = "ابحث هنا...", 
  onSearch = () => {},
  size = "md",
  className = "" 
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`mx-4 d-flex ${className}`}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="btn btn-outline-primary" type="button" onClick={handleSearch}>
          <Search size={16} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
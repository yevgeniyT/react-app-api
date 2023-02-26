import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
    const { data, handler } = props;
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        setSearchInput(prevState => prevState = e.target.value);
    };

    useEffect(() => {
        handler(data.filter((character) => {
            return character.name.match(searchInput);
        }));
    }, [searchInput]);

    return (
        <div className='search-body'>
            <div className='search-container'>
                <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    onChange={handleChange}
                    value={searchInput}
                    className="search-input"

                />
                <a href="#" className="search-btn">
                    <FaSearch className='fas' />
                </a>
            </div>
        </div>
    )

};

export default SearchBar;
import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SearchBar = (props) => {
    const { data, handler } = props;
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        setSearchInput(prevState => prevState = e.target.value);
    };

    useEffect(() => {
        handler(data.filter((character) => {
            return character.name.toUpperCase().match(searchInput.toUpperCase());
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
                <Link to="#" className="search-btn">
                    <FaSearch className='fas' />
                </Link>
            </div>
        </div>
    )

};

export default SearchBar;
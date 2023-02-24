import React, { useState } from 'react'

const SearchBar = (props) => {
    const { data } = props;

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        data.name.filter((data) => {
            return data.name.match(searchInput);
        });
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />

            <table>
                <tr>
                    <th>Country</th>
                    <th>Continent</th>
                </tr>

                {data.map((data) => {

                    <div>
                        <tr>
                            <td>{data.name}</td>
                        </tr>
                    </div>
                    return data
                })}
            </table>

        </div>
    )

};

export default SearchBar;
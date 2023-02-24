import React, { useState, useEffect } from 'react'

const SearchBar = (props) => {
    const { data } = props;
    const [searchInput, setSearchInput] = useState("");
    const [found, setFound] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(prevState => prevState = e.target.value);
    };

    useEffect(() => {
        if (searchInput.length > 0) {
            setFound(data.filter((character) => {
                return character.name.match(searchInput);
            }));
            console.log(found); // remove when finish with displaying the match
        }
    }, [searchInput]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />

            {/* <table>
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
            </table> */}
        </div>
    )

};

export default SearchBar;
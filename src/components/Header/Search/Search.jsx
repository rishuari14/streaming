import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Search = ({ setSearchModal }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    let { data } = useFetch(
        `https://api.tvmaze.com/search/shows?q=${query}`
    );
    console.log(data)

    if (!query.length) {
        data = null;
    }

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for shows"
                    value={query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setSearchModal(false)}
                />
            </div>
            <div className="search-result-content">
                {!data?.length && (
                    <div className="start-msg">
                        Start typing to see the shows you are looking for.
                    </div>
                )}
                <div className="search-results">
                    {data && data.map((item) => (
                        <div
                            className="search-result-item"
                            key={item.show.id}
                            onClick={() => {
                                navigate("/product/" + item.show.id);
                                setSearchModal(false);
                            }}
                        >
                            <div className="image-container">
                              {item && item.show && item.show.image && item.show.image.medium && <img
                                src={
                                        item.show.image.medium
                                    }
                                />}
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item.show.name}
                                </span>
                                <span className="desc">
                                {item.show.summary}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;

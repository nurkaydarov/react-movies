import React, {useState} from 'react';

function Search (props){
    const {handleSearch = Function.prototype,} = props;
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');




    const handleKey = (event) => {
        if(event.key === "Enter")
        {
            handleSearch(search, type);
        }
    }

    const handleFilter = (event) => {
        setType(event.target.dataset.type );
        handleSearch(search, event.target.dataset.type);
    }

        return(

                <div className="row">
                    <div className="col s12">
                        <div className="input-field ">
                            <input
                                placeholder="Search"
                                id="email_inline"
                                type="search"
                                className="validate"
                                value = {search}
                                onChange={(e) => setSearch( e.target.value)}
                                onKeyDown={handleKey}
                            />
                            <button className='btn search-btn'
                                    onClick={() => handleSearch(search, type)}>
                                Search
                            </button>

                            <div className="radioButtons">
                                <label >
                                    <input name="type"
                                           className="with-gap"
                                           type="radio"
                                           checked={type === 'all'}
                                           onChange={handleFilter}
                                           data-type='all'
                                    />
                                    <span>All</span>
                                </label>

                                <label>
                                    <input name="type"
                                           className="with-gap"
                                           type="radio"
                                           data-type="movie"
                                           checked={type === 'movie'}
                                           onChange={handleFilter}
                                    />
                                    <span>Movies only</span>
                                </label>

                                <label>
                                    <input name="type"
                                           className="with-gap"
                                           type="radio"
                                           data-type="series"
                                           checked={type === 'series'}
                                           onChange={handleFilter}
                                    />
                                    <span>Series only</span>
                                </label>
                            </div>



                        </div>
                    </div>
                </div>

        )

}

export {Search};
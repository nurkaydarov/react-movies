import React from 'react';

class Search extends React.Component{
    constructor(props) {
        super(props);

       this.state = {
            search: '',
            type: 'all',
        }

        this.handleKey = this.handleKey.bind(this);
       this.handleFilter = this.handleFilter.bind(this);

    }

    handleKey(event){
        if(event.key === "Enter")
        {
            this.props.handleSearch(this.state.search, this.state.type);
        }
    }

    handleFilter(event){
        this.setState(() =>
            ({type: event.target.dataset.type}), () => {
                this.props.handleSearch(this.state.search, this.state.type)
            }


        );
    }

    render(){
        return(


                <div className="row">
                    <div className="col s12">
                        <div className="input-field ">
                            <input
                                placeholder="Search"
                                id="email_inline"
                                type="search"
                                className="validate"
                                value = {this.state.search}
                                onChange={(e) => this.setState({search: e.target.value, type: e.target.dataset.type})}
                                onKeyDown={this.handleKey}
                            />
                            <button className='btn search-btn'
                                    onClick={() => this.props.handleSearch(this.state.search, this.state.type)}>
                                Search
                            </button>

                            <div className="radioButtons">
                                <label >
                                    <input name="type"
                                           className="with-gap"
                                           type="radio"
                                           checked={this.state.type === 'all'}
                                           onChange={this.handleFilter}
                                           data-type='all'
                                    />
                                    <span>All</span>
                                </label>

                                <label>
                                    <input name="type"
                                           className="with-gap"
                                           type="radio"
                                           data-type="movie"
                                           checked={this.state.type === 'movie'}
                                           onChange={this.handleFilter}
                                    />
                                    <span>Movies only</span>
                                </label>

                                <label>
                                    <input name="type"
                                           className="with-gap"
                                           type="radio"
                                           data-type="series"
                                           checked={this.state.type === 'series'}
                                           onChange={this.handleFilter}
                                    />
                                    <span>Series only</span>
                                </label>
                            </div>



                        </div>
                    </div>
                </div>

        )
    }
}

export {Search};
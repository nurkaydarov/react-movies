import React from "react";
import {Movies} from "../components/Movies";
import {Search} from "../components/Search";
import {Preloader} from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY ;

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loading: true,

        }

        this.handleSearch = this.handleSearch.bind(this);


    }



  componentDidMount(){
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false,}))
            .catch((error) => {
                console.log(error);
                this.setState({loading: false});
            })
    }



    handleSearch(str,type = 'all') {
        this.setState({loading: true});


            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
                .then(response => response.json())
                .then(data => this.setState({movies: data.Search, loading: false}))
                .catch((error) => {
                    console.log(error);
                    this.setState({loading: false})
                });

    }


    render(){
        const {movies, loading} = this.state;

        return(
            <main className="container content">
                <Search handleSearch = {this.handleSearch} />

                {
                    loading ?
                        <Preloader />
                        :
                        (<Movies movies={movies}/>)
                }
            </main>
        )
    }


}
export {Main};
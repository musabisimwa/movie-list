import React, { Component} from "react";
import data from '../assets/data/data';
import Card from "../components/Card";
export default class List extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true,
        };
    }
    async componentDidMount() {


        const moviesJSON =data ;
        

        if (moviesJSON) {
            this.setState({
                data: moviesJSON,
                loading: false
            })
        }


    }
    render() {
        const { data, loading } = this.state;

        if (loading) {
            return <h1> loading ...</h1>
        }
        return <div className="row">
            {data.map(
                movie => <div key={movie.id}className="col-sm">

                <Card   movie={movie} />
                </div>
                )}
        </div>;
    }
}


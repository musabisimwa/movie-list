import React from "react";
import PropTypes from 'prop-types'

const Card = ({ movie }) => {
    return <div className="card">

        <img src={movie.img.src} className="card-img-top" alt=""  />
        <h6 className="card-title">{`# ${movie.ranking} - ${movie.title}  (${movie.year})`}</h6>
        <ul>
            <li>{`Distributor ${movie.distributor}`}</li>
            <li>{`amount ${movie.amount}`}</li>
        </ul>
    </div>
};
Card.propTypes = {
    movie: PropTypes.shape({
        img: PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string
        }),
        ranking: PropTypes.number,
        title: PropTypes.string,
        year: PropTypes.string,
        amount: PropTypes.number,
        distributor: PropTypes.string

    }).isRequired
}

export default Card;
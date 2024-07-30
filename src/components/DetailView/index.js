import React from "react";
import './DetailView.css'

const DetailView = ({ pokemon }) => {
    const { id, name, type, sprite, height, weight } = pokemon

    return (
        <section className="detail-view">
            <img src={sprite} className="sprite-image" alt={sprite}/>
            <div className="data-wrapper">
                <h1 className="data-name">Id: {id} {name}</h1>
                <p className="data-char">Type: {type}</p>
                <p className="data-char">Taille : {height} cm </p>
                <p className="data-char">Poids: {weight} g </p>
            </div>
        </section>
    )
}

export default DetailView
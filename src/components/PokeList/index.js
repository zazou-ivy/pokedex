import React, {useState, useEffect} from 'react'
import './PokeList.css'
import PokeCell from '../PokeCell'

const PokeList = ({handleOnClick}) => {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            const data = await response.json()
            const pokemonList = data.results.slice(0, data.results.length).map(item =>item).flat()
            setPokemon(pokemonList)
        }


        fetchData()
    }, [])



    return (
        <section className="poke-list">
            {pokemon.map((pokeClass, id) => {
                return (
                    <PokeCell key={id} pokeClass={id} handleOnClick={handleOnClick}/>
                )
            })}
        </section>
    )
}

export default PokeList
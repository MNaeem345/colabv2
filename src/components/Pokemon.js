import React, { useEffect } from 'react';
import '../components/Pokemon.css';
import SearchInput from '../components/SearchInput';
import DescriptionCard from '../PokemonDetails/DescriptionCard'
import AbilitiesCard from "../PokemonDetails/AbilitiesCard";
import { getPokemons, URL } from "../api/PokemonApi";
import { extractData } from "../Helper/extractData";
import { useDispatch } from "react-redux";
import * as types from "../redux/actionType";
import { Container } from '@material-ui/core';



export default function PokemonBattle() {
    const dispatch = useDispatch();
  // intialaze the pokemon state to the best pokemon ever
  useEffect(() => {
    getPokemons(`${URL}/pikachu`).then(({ data }) => {
      dispatch({ type: types.SET_POKEMON, payload: extractData(data) });
    });
  }, [dispatch]);
  return (
    <section id="pokebattle" >
        <div className='container'>
            <Container maxWidth="md">
            <h1 className="heading">Pokemon Api</h1>
            <p className='poke-desc'>My first successful api used was the pokemon api and there were many things that I wished I could done to make 
                that project better. One thing being the ability to search all of the Pokemons in the api, as you can do here.
            </p>
            <SearchInput/>
            <div className='PokemonDetails'>
            <DescriptionCard />
            <AbilitiesCard />
            </div>
            </Container>
        </div>

    </section>
    
  )
}
import { useState } from "react"
import axios, { Axios } from "axios";
import { Button, Navbar, Text } from "../../components";
import { useEffect } from "react";
import { Formik, Form, useFormik, ErrorMessage } from "formik";
import * as yup from 'yup';
import React from "react";

const Pokedex = () => {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false)
  const [pokemon, setPokemon] = useState({
    name: pokemonName,
    species: "",
    img:"",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const SearchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((Response) => {
      console.log(Response);
      setPokemon({
        name: pokemonName,
        img: Response.data.sprites.other.showdown.front_default,
        species: Response.data.species.name,
        hp: Response.data.stats[0].base_stat,
        attack: Response.data.stats[1].base_stat,
        defense: Response.data.stats[2].base_stat,
        type: Response.data.types[0].type.name,
      })
    });
    setPokemonChosen(true)
  };

  const formMik = useFormik({
    initialValues: {
      name: pokemonName,
    },
    onSubmit: (values) => console.log(values),
    validationSchema: yup.object({
      name: yup.string().required(),
    })
  });
  
  return (

    <><Navbar></Navbar>
    <div>
      <form onSubmit={formMik.handleSubmit}>

        <div className="flex justify-center">
          <div className="justify-center relative mr-3 md:mr-0 hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>

            <input type="text" id="search" className="flex justify-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-15 pl-10 p-2" placeholder="Search..."
              onChange={(event) => {
                setPokemonName(event.target.value);
              } } />
            {formMik.errors.name && (
              <Text>{formMik.errors.name}</Text>
            )}
          </div>
        </div>
      </form>
      <div className="grid justify-items-center mt-4">
        <button onClick={SearchPokemon} className="btn-default overflow-hidden relative w-52 bg-stone-50 text-gray-900 py-2 px-2 rounded-xl font-bold uppercase transition-all duration-100 -- hover:shadow-md border border-stone-100 hover:bg-gradient-to-t hover:from-stone-100 before:to-stone-50 hover:-translate-y-[3px]">Search</button>
      </div>
      <div className="grid justify-items-center DisplaySection mt-10">
        {!pokemonChosen ? (
          <h1>Please choose a Pokemon</h1>
        ) : (
          <>

            <img className="w-80" src={pokemon.img} />
            <h1 className="text-3xl font-bold italic">{pokemon.name.toUpperCase()}</h1>
            <h2 className="mt-2">Species : {pokemon.species}</h2>
            <h2>Type : {pokemon.type}</h2>
            <h3>Hp : {pokemon.hp}</h3>
            <h3>Attack : {pokemon.attack}</h3>
            <h3>Defense : {pokemon.defense}</h3>
          </>
        )}
      </div>
    </div></>
    
  )
}

export default Pokedex
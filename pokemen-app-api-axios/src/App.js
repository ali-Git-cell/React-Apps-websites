import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPgeUrl, setCurrentPgeUrl] = useState([
    "https://pokeapi.co/api/v2/pokemon",
  ]);

  const [nextPgeUrl, setNextPgeUrl] = useState();
  const [prevPgeUrl, setPrevPgeUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPgeUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPgeUrl(res.data.next);
        setPrevPgeUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });

    return () => cancel();
  }, [currentPgeUrl]);

  function gotoNxtpage() {
    setCurrentPgeUrl(nextPgeUrl);
  }

  function gotoPrevpage() {
    setCurrentPgeUrl(prevPgeUrl);
  }

  if (loading) return "Loading....";

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        gotoNxtpage={nextPgeUrl ? gotoNxtpage : null}
        gotoPrevpage={prevPgeUrl ? gotoPrevpage : null}
      />
    </>
  );
}

export default App;

// const poke_Api = async () => {
//   try {
//     const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
//     console.log(res.data);
//   } catch (err) {
//     // Handle Error Here
//     console.error(err);
//   }
// };

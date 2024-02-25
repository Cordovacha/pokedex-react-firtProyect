import { useContext } from "react";
import { PokeballIconSmall } from "../../assets/pokeBall";
import { PokemonsList } from "../../components/PokemonList";
import { PokemonContext } from "../../context/PokemonContext";

import styles from "./style.module.scss";
import { Pagination } from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";
import { Filters } from "../../components/Filters";

export const Home = () => {
  const { pokemonsFiltered } = useContext(PokemonContext);
  const { page, nextPage, previousPage, backToHome } = usePagination();

  let perPage = 12;

  return (
    <div className={styles.home}>
      <header>
        <div onClick={backToHome}>
          <PokeballIconSmall />
          <span>Pokedex</span>
        </div>
      </header>
      <Filters />
      <PokemonsList
        pokemonsUrls={pokemonsFiltered}
        page={page}
        perPage={perPage}
      />
      <Pagination
        page={page}
        perPage={perPage}
        nextPage={nextPage}
        previousPage={previousPage}
        maxItems={pokemonsFiltered?.length!}
      />
    </div>
  );
};

import axios from "axios";
import { getDate } from "../function/getDate";

//987은 오류나는 숫자임
const catchRandomPokemon = async (prevNum) => {
  let pokemonInfo;
  let pokemonImgAndTypes;

  const randomNum = (prevNum = Array) => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  const num = randomNum(prevNum);

  try {
    //포켓몬의 종 / 이름 / 특징설명을 한국어로 가져오기 위한 API
    //생성된 난수 번호의 포켓몬 데이터를 가져옵니다.
    const getPokemonInfo = async (num) => {
      return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${num}`);
    };

    //포켓몬의 썸네일 이미지 / 포켓몬의 환경특성을 가져옵니다.
    const getPokemonImgAndTypes = async (num) => {
      return axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
    };

    await axios.all([getPokemonInfo(num), getPokemonImgAndTypes(num)]).then(
      axios.spread((res1, res2) => {
        pokemonInfo = res1.data;
        pokemonImgAndTypes = res2.data;
      })
    );
  } catch (error) {
    console.log(error);
  }

  if (
    !pokemonInfo.genera.filter((item) => {
      return item.language.name === "ko";
    })
  ) {
    console.log("오류검출");
    return;
  }

  const getPokemon = async () => {
    const [{ genus }] = pokemonInfo.genera.filter((item) => {
      return item.language.name === "ko";
    });
    const [{ name }] = pokemonInfo.names.filter((item) => {
      return item.language.name === "ko";
    });
    const koFlavor = pokemonInfo.flavor_text_entries.filter((item) => {
      return item.language.name === "ko";
    });
    const typeUrls = pokemonImgAndTypes.types.map((item) => {
      return item.type.url;
    });

    const imgUrl = pokemonImgAndTypes.sprites.front_default;

    let types = [];
    const getTypes = async (typeUrls) => {
      for (const typeUrl of typeUrls) {
        const { data } = await axios.get(typeUrl);

        let type = data.names.filter((item) => {
          if (item.language.name === "ko") {
            return item.name;
          }
        });

        return type;
      }
    };
    let type = await getTypes(typeUrls);
    type.forEach((item) => {
      types.push(item.name);
    });
    types.push(genus);

    const newPokemon = {
      pokemonId: num,
      name,
      flavorText: koFlavor[0].flavor_text,
      imgUrl,
      types,
      catchDate: getDate(),
    };

    return newPokemon;
  };
  const pokemon = getPokemon();
  console.log(pokemon);
  return pokemon;
};

const savePokemon = async (newPokemon) => {
  await axios.post(`${process.env.REACT_APP_AXIOS_URL}/pokemons`, newPokemon);
};

const releasePokemon = async (pokemonId) => {
  await axios.delete(
    `${process.env.REACT_APP_AXIOS_URL}/pokemons/${pokemonId}`
  );
};

export { catchRandomPokemon, savePokemon, releasePokemon };

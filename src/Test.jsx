import React from "react";
import axios from "axios";

//1000대까지 난수 생성
const randomNum = () => {
  return Math.floor(Math.random() * 1000) + 1;
};

//포켓몬의 종 / 이름 / 특징설명을 한국어로 가져오기 위한 API
//생성된 난수 번호의 포켓몬 데이터를 가져옵니다.
const getPokemonInfo = async (num) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${num}`);
};

//포켓몬의 썸네일 이미지 / 포켓몬의 환경특성을 가져옵니다.
const getPokemonImgAndTypes = async (num) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
};

const Test = () => {
  const dataFetch = async () => {
    const num = randomNum();
    console.log(num);
    try {
      await axios.all([getPokemonInfo(num), getPokemonImgAndTypes(num)]).then(
        axios.spread((res1, res2) => {
          const pokemonInfo = res1.data;
          const pokemonImgAndTypes = res2.data;
          console.log(pokemonImgAndTypes);
          console.log(pokemonInfo);

          if (
            pokemonInfo.genera.filter((item) => {
              return item.language.name === "ko";
            })
          ) {
            const [{ genus }] = pokemonInfo.genera.filter((item) => {
              return item.language.name === "ko";
            });
            const [{ name }] = pokemonInfo.names.filter((item) => {
              return item.language.name === "ko";
            });
            const koFlavor = pokemonInfo.flavor_text_entries.filter(
              (item, index) => {
                if (item.language.name === "ko") {
                  return item.flavor_text;
                }
              }
            );
            const typeUrls = pokemonImgAndTypes.types.map((item) => {
              return item.type.url;
            });
            const imgUrl = pokemonImgAndTypes.sprites.front_default;
            let types = [];
            let getTypes = async (typeUrls) => {
              for (const typeUrl of typeUrls) {
                const response = await axios.get(typeUrl);
                const data = response.data;
                pokemonInfo.names.filter((item) => {
                  if (item.language.name === "ko") {
                    types.push(item.name);
                  }
                });
              }
            };
            getTypes(typeUrls);
            types.push(genus);
            const newPokemon = {
              pokemonId: num,
              name,
              flavorText: koFlavor[0].flavor_text,
              imgUrl,
              types,
            };
            return newPokemon;
          } else {
            console.log("데이터 요청 실패");

            dataFetch();
          }
        })
      );
    } catch (error) {
      console.log("데이터 요청 실패");
      dataFetch();
    }
  };
  dataFetch();

  return <div>test</div>;
};
export default Test;

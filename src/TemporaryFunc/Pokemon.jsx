import axios from "axios";
import { useState } from "react";

function Pokemon() {
  const [imgSrc, setImgSrc] = useState("");
  const [pokemon, setPokemon] = useState({});

  const dataFetch = async () => {
    //1100대까지 난수 생성
    const Num = Math.floor(Math.random() * 1100) + 1;
    // 생성된 난수 번호의 포켓몬 데이터를 가져옵니다.
    try {
      //포켓몬의 종 / 이름 / 특징설명을 한국어로 가져오기 위한 API
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${Num}/`
      );
      //포켓몬의 썸네일 이미지 / 포켓몬의 환경특성을 가져옵니다.
      const response2 = await axios.get(`
      https://pokeapi.co/api/v2/pokemon/${Num}/`);

      const data = response.data;
      const data2 = response2.data;

      // 한국어로 된 정보들만 가져오겠습니다.
      const [{ genus }] = data.genera.filter((item) => {
        return item.language.name === "ko";
      });
      const [{ name }] = data.names.filter((item) => {
        return item.language.name === "ko";
      });
      const koFlavor = data.flavor_text_entries.filter((item, index) => {
        if (item.language.name === "ko") {
          return item.flavor_text;
        }
      });
      const typeUrls = data2.types.map((item) => {
        return item.type.url;
      });
      //이미지 정보는 언어가 필요없으니 그냥 할당해서 쓰겠어요...
      const imgUrl = data2.sprites.front_default;
      // 한국어로 된 타입의 정보들을 가져오겠습니다.
      // foreach나 map은 async 를 기다려주지 않더군요...
      // 그리하여... for of문을 썼읍니다...
      let types = [];
      let getTypes = async (typeUrls) => {
        for (const typeUrl of typeUrls) {
          const response = await axios.get(typeUrl);
          const data = response.data;
          data.names.filter((item) => {
            if (item.language.name === "ko") {
              types.push(item.name);
            }
          });
        }
      };
      //여기서도 어김없이 이 getTypes함수를 await로 가져옵니다.. 이건되네요
      await getTypes(typeUrls);

      //새로운 포켓몬 객체를 반환합니다.
      //실제로직에서는 아마 닉네임과 코멘트도 같이 들어가겠지요?
      const newPokemon = {
        id: Num,
        name,
        genus,
        flavorText: koFlavor[0].flavor_text,
        imgUrl,
        types,
      };
      setPokemon(newPokemon);
    } catch (error) {
      console.log(error);
      dataFetch();
    }
  };

  return (
    <div>
      <div>데이터 가져오기 실습</div>
      <button onClick={dataFetch}>난수 지정하고 포켓몬 데이터 가져오기</button>

      <div>가져온 데이터 출력해보기</div>

      <div
        style={{
          width: "100px",
          height: "100px",
        }}
      >
        {pokemon && <img src={pokemon.imgUrl} alt="이미지"></img>}
      </div>

      <div>{pokemon.id}</div>
      <div>{pokemon.name}</div>
      <div>타입</div>
      <div>{pokemon.genus}</div>
      <div>{pokemon.flavorText}</div>
      {pokemon.types?.map((type) => {
        return <div>{type}</div>;
      })}
    </div>
  );
}

export default Pokemon;

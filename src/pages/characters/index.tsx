import styles from "./char.module.css";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
});

type character = {
  name: string;
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  status: string;
  species: string;
  firstSeen: string;
  episode: string[];
};

export default function Char() {
  const [page, setPage] = useState(1);
  const [characterData, setCharacterData] = useState<character[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  useEffect(() => {
    try {
      axios
        .get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then((data) => {
          const firstSeen = data.data.results.map(
            (el: character) => el.episode[0]
          );
          Promise.all(firstSeen.map((el: string) => axios.get(el))).then(
            (data2) => {
              const firstSeenName = data2.map((el) => el.data.name);
              for (let i = 0; i < data.data.results.length; i++) {
                data.data.results[i].firstSeen = firstSeenName[i];
              }
              setCharacterData(data.data.results);
              setLoading(false);
              setError(false);
            }
          );
        });
    } catch (err) {
      setError(true);
    }
  }, [page]);

  const firstWordCapital = (str: string) => {
    return str[0] ? str[0].toUpperCase() + str.slice(1) : "";
  };
  if (isError) return <h1>Error!!!</h1>;
  if (isLoading) return <h1>Loading......</h1>;
  return (
    <>
      <h1 className={montserrat.className}>Characters</h1>
      <div className={styles.container}>
        {characterData.map((el) => (
          <div
            className={styles.characterCard + " " + montserrat.className}
            key={el.id}
          >
            <img src={el.image} alt={el.name} />
            <div>
              <div>
                <span>{el.name}</span>
                <div>
                  <div className={styles[el.status]}></div>
                  <span>
                    {firstWordCapital(el.status)} - {el.species}
                  </span>
                </div>
              </div>
              <div>
                <span>Last known location:</span>
                <span>{el.location.name}</span>
              </div>
              <div>
                <span>First seen in:</span>
                <span>{el.firstSeen}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

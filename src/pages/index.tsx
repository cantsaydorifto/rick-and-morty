import styles from "./first.module.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
});

function First() {
  return (
    <>
      <h1 className={montserrat.className}>Rick and Morty Wiki</h1>
      <div className={`${styles.peace} container flex-row `}>
        <div className="left">
          <img
            src="https://wallpaperaccess.com/full/4224153.png"
            alt="Peace Among Worlds"
          />
        </div>
        <div className={`right ${montserrat.className}`}>
          <h2>Explore the Wacky World of Rick and Morty</h2>
          <p>
            The Rick And Morty Wiki is an encyclopedia dedicated to housing an
            informative database for all subject matter related to Rick And
            Morty - an American adult animated science-fiction sitcom. The
            series follows the misadventures of Rick Sanchez, a cynical mad
            scientist, and his good-hearted but fretful grandson Morty Smith.
          </p>
          <div>
            <p>Get Started</p>
            <img
              src="https://media.tenor.com/hNJdYeRXq3sAAAAi/pickle-rick.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default First;

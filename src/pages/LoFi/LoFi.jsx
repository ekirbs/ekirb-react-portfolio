// import React from 'react';

// import "./style.css";

// export default function Contact() {
//   return (
//     <div className="loFiCard">
//       <h1 className="loFiCardHeading">Hangout Room</h1>
//       <p className="loFiCardContent">
//         Put in a nice stylized dayjs api display here.  Also a music generator, maybe even a place to play a game.  People should want to hang out on my portfolio.
//       </p>
//       <p className="loFiCardContent">
//         `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
//         illo inventore veritatis et quasi architecto beatae vitae dicta sunt
//         explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
//         odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
//         voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
//         quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
//         eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
//         voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
//         corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
//         Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
//         quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
//         voluptas nulla pariatur?`
//       </p>
//       <p className="loFiCardContent">
//         `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
//         illo inventore veritatis et quasi architecto beatae vitae dicta sunt
//         explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
//         odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
//         voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
//         quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
//         eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
//         voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
//         corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
//         Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
//         quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
//         voluptas nulla pariatur?`
//       </p>
//       <p className="loFiCardContent">
//         `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
//         illo inventore veritatis et quasi architecto beatae vitae dicta sunt
//         explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
//         odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
//         voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
//         quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
//         eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
//         voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
//         corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
//         Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
//         quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
//         voluptas nulla pariatur?`
//       </p>
//     </div>
//   );
// }

import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./components/Styles/app.css";
import LofiList from "./components/lofilist";
import Library from "./components/Library";
import "./style.css";
import Nav from "./components/Nav";
// import Landing from "./components/Landing";
// document.title = "Lofify";

export default function LoFi() {
  const [music, setMusic] = useState(LofiList);
  const [currentmusic, setCurrentmusic] = useState(music[0]);
  const [isplaying, setIsplaying] = useState(false);
  const [librarystatus, setLibrarystatus] = useState(false);
  return (
    <div className="loFiCard">
      <h1 className="loFiCardHeading">Lofify: Lofi Music Player</h1>
      {/* <h1 className="loFiCardHeading">Hangout Room</h1> */}
      <div className="LoFi">
        {/* <Landing /> */}
        <Nav librarystatus={librarystatus} setLibrarystatus={setLibrarystatus} />
        <main className="main-container">
          <Song currentMusic={currentmusic} isplaying={isplaying} />
          <Player
            currentMusic={currentmusic}
            setCurrentmusic={setCurrentmusic}
            isplaying={isplaying}
            setIsplaying={setIsplaying}
            music={music}
            setMusic={setMusic}
          />
        </main>
        <Library
          librarystatus={librarystatus}
          music={music}
          setMusic={setMusic}
          setCurrentmusic={setCurrentmusic}
          setIsplaying={setIsplaying}
        />
      </div>
    </div>
  );
}
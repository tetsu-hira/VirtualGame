import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
import { UserData } from './Top';
import { TeamData } from './Top';

const Match = () => {
  const [player, setPlayer] = useState([]);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [player3, setPlayer3] = useState([]);
  const [player4, setPlayer4] = useState([]);
  const [player5, setPlayer5] = useState([]);
  const [player6, setPlayer6] = useState([]);
  const [player7, setPlayer7] = useState([]);
  const [player8, setPlayer8] = useState([]);

  const plan = useContext(UserData);
  const team = useContext(TeamData);

  const handleClickMatch = () => {
    setPlayer1(player.find((v) => v.name === plan[0].name));
    setPlayer2(player.find((v) => v.name === plan[1].name));
    setPlayer3(player.find((v) => v.name === plan[2].name));
    setPlayer4(player.find((v) => v.name === plan[3].name));
    setPlayer5(player.find((v) => v.name === team[0].name));
    setPlayer6(player.find((v) => v.name === team[1].name));
    setPlayer7(player.find((v) => v.name === team[2].name));
    setPlayer8(player.find((v) => v.name === team[3].name));

    console.log({player1});
    console.log({player2});
    console.log({player3});
    console.log({player4});
  }
  // ランダムな数値
  const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  useEffect(() => {
    const id = setInterval(() => {
      if (countA > 16) {
        alert("Aチームの勝ち！")
        setCountA(0);
        setCountB(0);
        setPlayer1("");
        setPlayer2("");
        setPlayer3("");
        setPlayer4("");
        setPlayer5("");
        setPlayer6("");
        setPlayer7("");
        setPlayer8("");
      } else if (countB > 16) {
        alert("Bチームの勝ち！")
        setCountA(0);
        setCountB(0);
        setPlayer1("");
        setPlayer2("");
        setPlayer3("");
        setPlayer4("");
        setPlayer5("");
        setPlayer6("");
        setPlayer7("");
        setPlayer8("");
      } else if (countA > 14 && (countA - countB) > 1) {
        alert("Aチームの勝ち！")
        setCountA(0);
        setCountB(0);
        setPlayer1("");
        setPlayer2("");
        setPlayer3("");
        setPlayer4("");
        setPlayer5("");
        setPlayer6("");
        setPlayer7("");
        setPlayer8("");
      } else if (countB > 14 && (countB - countA) > 1) {
        alert("Bチームの勝ち！")
        setCountA(0);
        setCountB(0);
        setPlayer1("");
        setPlayer2("");
        setPlayer3("");
        setPlayer4("");
        setPlayer5("");
        setPlayer6("");
        setPlayer7("");
        setPlayer8("");
      } else if (countA <= 16 && player1.power > 0 ) {
        setCountA(countA + 1);
        console.log(countA);
      }
    }, 1000);
    return () => clearInterval(id);
  },[countA,countB,player1,player2,player3,player4,player5,player6,player7,player8]);

  useEffect(() => {
    getPlayer()
  }, [])
  const getPlayer = async () => {
    const response = await axios.get('/api/player');
    setPlayer(response.data.players)
  }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log(countA)
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer)
  //   }
  // },[countA])

  return (
    <>
      <div className="StartSpace">
        <button className="StartButton" onClick={handleClickMatch}>Start</button>
        <div className="Point">
          <div className="PointFlex">
            <div className="PointTeamA">
              <div className="name">A</div>
              <div className="point">{countA}</div>
            </div>
            <div className="PointRow">-</div>
            <div className="PointTeamB">
              <div className="name">B</div>
              <div className="point">{countB}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Match;
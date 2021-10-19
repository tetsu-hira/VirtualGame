import axios from 'axios';
import React, { useContext, useEffect, useState, useRef } from 'react';
// import axios from 'axios';
import { UserData } from './Top';
import { TeamData } from './Top';

const Match = () => {
  const [player, setPlayer] = useState([]);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const plan = useContext(UserData);
  const team = useContext(TeamData);

  const handleClickMatch = () => {
    const player1 = player.find((v) => v.name === plan[0].name);
    const player2 = player.find((v) => v.name === plan[1].name);
    const player3 = player.find((v) => v.name === plan[2].name);
    const player4 = player.find((v) => v.name === plan[3].name);
    const player5 = player.find((v) => v.name === team[0].name);
    const player6 = player.find((v) => v.name === team[1].name);
    const player7 = player.find((v) => v.name === team[2].name);
    const player8 = player.find((v) => v.name === team[3].name);

    const refX = useRef(countA);
    useEffect(() => {
      refX.current = countA;
    }, [countA]);
    useEffect(() => {
      setInterval(() => {
        console.log(refX.current);
      }, 1000);
    }, []);
  }

  useEffect(() => {
    getPlayer()
  }, [])
  const getPlayer = async () => {
    const response = await axios.get('/api/player');
    setPlayer(response.data.players)
  }

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
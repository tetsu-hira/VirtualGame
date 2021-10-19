import { result } from "lodash";
import React, { createContext, useState} from "react";
import Match from "./Match";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const UserData = createContext({});
export const TeamData = createContext({});

const MC = [
  {
    id: 10,
    name: "MC仕掛",
    work: "MC"
  }, {
    id: 11,
    name: "MC プログラム作成",
    work: "MC-PRG"
  }, {
    id: 12,
    name: "MC1-40",
    work: "MC1-40"
  }, {
    id: 13,
    name: "MC1-50",
    work: "MC1-50"
  }, {
    id: 14,
    name: "VM53R",
    work: "VM53R"
  }, {
    id: 15,
    name: "VM73",
    work: "VM73"
  }
]
const LE = [
  {
    id: 20,
    name: "LE仕掛",
    work: "LE"
  }, {
    id: 21,
    name: "LE",
    work: "LE"
  }, {
    id: 22,
    name: "LEプログラム作成",
    work: "LE-PRG"
  }, {
    id: 23,
    name: "森精機",
    work: "LE-MORI"
  }, {
    id: 24,
    name: "中村留",
    work: "LE-TOME"
  }
]
const MV = [
  {
    id: 30,
    name: "MV仕掛",
    work: "MV"
  }, {
    id: 31,
    name: "MV-2",
    work: "MV-2"
  }, {
    id: 32,
    name: "MV-3",
    work: "MV-3"
  }, {
    id: 33,
    name: "MV-J",
    work: "MV-J"
  }, {
    id: 34,
    name: "材料取り",
    work: "ZAIRYO"
  }, {
    id: 35,
    name: "DU",
    work: "DU"
  }, {
    id: 36,
    name: "SO",
    work: "SO"
  }
]
const HQ = [
  {
    id: 40,
    name: "HQ仕掛",
    work: "HQ"
  }, {
    id: 41,
    name: "岡熱",
    work: "OKAYA"
  }, {
    id: 42,
    name: "大和精",
    work: "DAIWA"
  }, {
    id: 43,
    name: "社内HQ",
    work: "HQ1"
  }, {
    id: 44,
    name: "ウメトク熱処理",
    work: "UMETOKU HQ"
  }, {
    id: 45,
    name: "中信高周波",
    work: "KOSHUHA"
  }, {
    id: 46,
    name: "室蘭ヒート",
    work: "MUROHI"
  }
]
const SL = [
  {
    id: 50,
    name: "SGL仕掛",
    work: "SGL"
  }
]
const SG = [
  {
    id: 60,
    name: "SG仕掛",
    work: "SG"
  }
]
const CG = [
  {
    id: 70,
    name: "CG仕掛",
    work: "CG"
  }, {
    id: 71,
    name: "CG-1",
    work: "CG-1"
  }, {
    id: 72,
    name: "CG-2",
    work: "CG-2"
  }
]
const PG = [
  {
    id: 80,
    name: "PG仕掛",
    work: "PG"
  }, {
    id: 81,
    name: "PG プログラム作成",
    work: "PG-PRG"
  }, {
    id: 82,
    name: "PG-O",
    work: "PG-O"
  }, {
    id: 83,
    name: "PGX",
    work: "PGX"
  }, {
    id: 84,
    name: "SPG",
    work: "SPG"
  }
]
const ED = [
  {
    id: 90,
    name: "ED仕掛",
    work: "ED"
  }
]
const EH = [
  {
    id: 100,
    name: "EDH仕掛",
    work: "EDH"
  }, {
    id: 101,
    name: "EDH",
    work: "EDH"
  }, {
    id: 102,
    name: "EDH-NC",
    work: "EDH-NC"
  }
]
const JG = [
  {
    id: 110,
    name: "JG仕掛",
    work: "JG-0"
  }, {
    id: 111,
    name: "JG",
    work: "JG"
  }, {
    id: 112,
    name: "JG-NC",
    work: "JG-NC"
  }
]
const WQ = [
  {
    id: 120,
    name: "WE水仕掛",
    work: "WEQ"
  }, {
    id: 121,
    name: "WE プログラム作成",
    work: "WE-PRG"
  }
]
const WP = [
  {
    id: 130,
    name: "WE油仕掛",
    work: "WEP"
  }
]
const MT = [
  {
    id: 140,
    name: "MC2仕掛",
    work: "MC2"
  }, {
    id: 141,
    name: "MC2-1",
    work: "MC2-1"
  }, {
    id: 142,
    name: "MC2-2",
    work: "MC2-2"
  }, {
    id: 143,
    name: "MC2-3",
    work: "MC2-3"
  }, {
    id: 144,
    name: "MC2-4",
    work: "MC2-4"
  }, {
    id: 145,
    name: "MC2-5",
    work: "MC2-5"
  }, {
    id: 146,
    name: "MC2-6",
    work: "MC2-6"
  }, {
    id: 147,
    name: "モデル NC 作成",
    work: "MODEL-NC"
  }
]
const CH = [
  {
    id: 150,
    name: "検査仕掛",
    work: "CHK"
  }, {
    id: 151,
    name: "検ﾍﾞｱﾄﾞ",
    work: "CHK1"
  }, {
    id: 152,
    name: "検ｺﾝﾄﾚ",
    work: "CHK2"
  }, {
    id: 153,
    name: "検他",
    work: "CHK3"
  }, {
    id: 154,
    name: "検ATOS",
    work: "ATOS"
  }
]
const FL = [
  {
    id: 160,
    name: "仕上仕掛",
    work: "FIN"
  }, {
    id: 161,
    name: "LM",
    work: "LM"
  }, {
    id: 162,
    name: "FL",
    work: "FL"
  }, {
    id: 163,
    name: "仕上",
    work: "FIN"
  }, {
    id: 164,
    name: "バラシ",
    work: "BARASI"
  }, {
    id: 165,
    name: "組立",
    work: "BUILD"
  }
]
const EN = [
  {
    id: 170,
    name: "完了仕掛",
    work: "END"
  }, {
    id: 171,
    name: "出荷",
    work: "SHIP"
  }, {
    id: 172,
    name: "設計保管",
    work: "SEKKEI"
  }, {
    id: 173,
    name: "生産管理保管",
    work: "SEIKAN"
  }
]
const a = "a"


const Top = () => {
  const [plan, setPlan] = useState([]);
  const [team, setTeam] = useState([]);
  const [count, setCount] = useState("a");
  const [ mcName, setMCName] = useState(MC[0].name);
  const [ leName, setLEName] = useState(LE[0].name);
  const [ mvName, setMVName] = useState(MV[0].name);
  const [ hqName, setHQName] = useState(HQ[0].name);
  const [ slName, setSLName] = useState(SL[0].name);
  const [ sgName, setSGName] = useState(SG[0].name);
  const [ cgName, setCGName] = useState(CG[0].name);
  const [ pgName, setPGName] = useState(PG[0].name);
  const [ edName, setEDName] = useState(ED[0].name);
  const [ ehName, setEHName] = useState(EH[0].name);
  const [ jgName, setJGName] = useState(JG[0].name);
  const [ wqName, setWQName] = useState(WQ[0].name);
  const [ wpName, setWPName] = useState(WP[0].name);
  const [ mtName, setMTName] = useState(MT[0].name);
  const [ chName, setCHName] = useState(CH[0].name);
  const [ flName, setFLName] = useState(FL[0].name);
  const [ enName, setENName] = useState(EN[0].name);

  const clickAddMC = () => {setCount(count + a); setPlan([...plan, {name: mcName, count: count }]);}
  const clickAddLE = () => {setCount(count + a); setPlan([...plan, {name: leName, count: count }]);}
  const clickAddMV = () => {setCount(count + a); setPlan([...plan, {name: mvName, count: count }]);}
  const clickAddHQ = () => {setCount(count + a); setPlan([...plan, {name: hqName, count: count }]);}
  const clickAddSL = () => {setCount(count + a); setPlan([...plan, {name: slName, count: count }]);}
  const clickAddSG = () => {setCount(count + a); setPlan([...plan, {name: sgName, count: count }]);}
  const clickAddCG = () => {setCount(count + a); setPlan([...plan, {name: cgName, count: count }]);}
  const clickAddPG = () => {setCount(count + a); setPlan([...plan, {name: pgName, count: count }]);}
  const clickAddED = () => {setCount(count + a); setPlan([...plan, {name: edName, count: count }]);}
  const clickAddEH = () => {setCount(count + a); setPlan([...plan, {name: ehName, count: count }]);}
  const clickAddJG = () => {setCount(count + a); setPlan([...plan, {name: jgName, count: count }]);}
  const clickAddWQ = () => {setCount(count + a); setPlan([...plan, {name: wqName, count: count }]);}
  const clickAddWP = () => {setCount(count + a); setPlan([...plan, {name: wpName, count: count }]);}
  const clickAddMT = () => {setCount(count + a); setPlan([...plan, {name: mtName, count: count }]);}
  const clickAddCH = () => {setCount(count + a); setPlan([...plan, {name: chName, count: count }]);}
  const clickAddFL = () => {setCount(count + a); setPlan([...plan, {name: flName, count: count }]);}
  const clickAddEN = () => {setCount(count + a); setPlan([...plan, {name: enName, count: count }]);}
  const clickBtoMC = () => {setCount(count + a); setTeam([...team, {name: mcName, count: count }]);}
  const clickBtoLE = () => {setCount(count + a); setTeam([...team, {name: leName, count: count }]);}
  const clickBtoMV = () => {setCount(count + a); setTeam([...team, {name: mvName, count: count }]);}
  const clickBtoHQ = () => {setCount(count + a); setTeam([...team, {name: hqName, count: count }]);}
  const clickBtoSL = () => {setCount(count + a); setTeam([...team, {name: slName, count: count }]);}
  const clickBtoSG = () => {setCount(count + a); setTeam([...team, {name: sgName, count: count }]);}
  const clickBtoCG = () => {setCount(count + a); setTeam([...team, {name: cgName, count: count }]);}
  const clickBtoPG = () => {setCount(count + a); setTeam([...team, {name: pgName, count: count }]);}
  const clickBtoED = () => {setCount(count + a); setTeam([...team, {name: edName, count: count }]);}
  const clickBtoEH = () => {setCount(count + a); setTeam([...team, {name: ehName, count: count }]);}
  const clickBtoJG = () => {setCount(count + a); setTeam([...team, {name: jgName, count: count }]);}
  const clickBtoWQ = () => {setCount(count + a); setTeam([...team, {name: wqName, count: count }]);}
  const clickBtoWP = () => {setCount(count + a); setTeam([...team, {name: wpName, count: count }]);}
  const clickBtoMT = () => {setCount(count + a); setTeam([...team, {name: mtName, count: count }]);}
  const clickBtoCH = () => {setCount(count + a); setTeam([...team, {name: chName, count: count }]);}
  const clickBtoFL = () => {setCount(count + a); setTeam([...team, {name: flName, count: count }]);}
  const clickBtoEN = () => {setCount(count + a); setTeam([...team, {name: enName, count: count }]);}

  const handleOnDragEnd = (result) => {
    const items = Array.from(plan);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPlan(items);
  }
  const handleOnDragStart = (result) => {
    const items = Array.from(team);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTeam(items);
  }

  console.log(plan)

  return (
    <div className="Process">
      <div className="ProcessContainer">
        <div className="ProcessMain">
          <div className="ProcessList">
            <h1>【設備一覧】</h1>
            <div className="ProcessList__Border">
              <div className="SelectBox">
                <select onChange={(e) =>{ setMCName(e.target.value)}} defaultValue={MC[0].name}>
                  { MC.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddMC} className="AddPlan">A</button>
                <button onClick={clickBtoMC} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setLEName(e.target.value)}} defaultValue={LE[0].name}>
                  { LE.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddLE} className="AddPlan">A</button>
                <button onClick={clickBtoLE} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setMVName(e.target.value)}} defaultValue={MV[0].name}>
                  { MV.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddMV} className="AddPlan">A</button>
                <button onClick={clickBtoMV} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setHQName(e.target.value)}} defaultValue={HQ[0].name}>
                  { HQ.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddHQ} className="AddPlan">A</button>
                <button onClick={clickBtoHQ} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setSLName(e.target.value)}} defaultValue={SL[0].name}>
                  { SL.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddSL} className="AddPlan">A</button>
                <button onClick={clickBtoSL} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setSGName(e.target.value)}} defaultValue={SG[0].name}>
                  { SG.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddSG} className="AddPlan">A</button>
                <button onClick={clickBtoSG} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setCGName(e.target.value)}} defaultValue={CG[0].name}>
                  { CG.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddCG} className="AddPlan">A</button>
                <button onClick={clickBtoCG} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setPGName(e.target.value)}} defaultValue={PG[0].name}>
                  { PG.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddPG} className="AddPlan">A</button>
                <button onClick={clickBtoPG} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setEDName(e.target.value)}} defaultValue={ED[0].name}>
                  { ED.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddED} className="AddPlan">A</button>
                <button onClick={clickBtoED} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setEHName(e.target.value)}} defaultValue={EH[0].name}>
                  { EH.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddEH} className="AddPlan">A</button>
                <button onClick={clickBtoEH} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setJGName(e.target.value)}} defaultValue={JG[0].name}>
                  { JG.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddJG} className="AddPlan">A</button>
                <button onClick={clickBtoJG} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setWQName(e.target.value)}} defaultValue={WQ[0].name}>
                  { WQ.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddWQ} className="AddPlan">A</button>
                <button onClick={clickBtoWQ} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setWPName(e.target.value)}} defaultValue={WP[0].name}>
                  { WP.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddWP} className="AddPlan">A</button>
                <button onClick={clickBtoWP} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setMTName(e.target.value)}} defaultValue={MT[0].name}>
                  { MT.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddMT} className="AddPlan">A</button>
                <button onClick={clickBtoMT} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setCHName(e.target.value)}} defaultValue={CH[0].name}>
                  { CH.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddCH} className="AddPlan">A</button>
                <button onClick={clickBtoCH} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setFLName(e.target.value)}} defaultValue={FL[0].name}>
                  { FL.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddFL} className="AddPlan">A</button>
                <button onClick={clickBtoFL} className="AddPlan">B</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e) =>{ setENName(e.target.value)}} defaultValue={EN[0].name}>
                  { EN.map((item) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddEN} className="AddPlan">A</button>
                <button onClick={clickBtoEN} className="AddPlan">B</button>
              </div>
            </div>
          </div>
          <div className="Result">
            <h1 className="teamA">【工程設計】</h1>
            <div className="ResultContainer">
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="Result__Border">
                  {(provided) => (
                    <div className="Result__Border" {...provided.droppableProps} ref={provided.innerRef}>
                      { plan.map((item, idx) => (
                        <Draggable key={item.count} draggableId={item.count} index={idx}>
                          {(provided) => (
                            <ul className="Flex" key={idx} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <li className="ResultName">{item.name}</li>
                            </ul>
                          )}
                        </Draggable>
                      )) }
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
            <hr></hr>
            <div className="ResultContainer">
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="Result__Border">
                  {(provided) => (
                    <div className="Result__Border" {...provided.droppableProps} ref={provided.innerRef}>
                      { team.map((item, idx) => (
                        <Draggable key={item.count} draggableId={item.count} index={idx}>
                          {(provided) => (
                            <ul className="Flex" key={idx} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <li className="ResultName">{item.name}</li>
                            </ul>
                          )}
                        </Draggable>
                      )) }
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
            <h1 className="teamB">【工程設計】</h1>
          </div>
          <div className="Start">
            <h1 className="teamA">【工程設計】</h1>
            <div className="StartContainer">
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="Start__Border">
                  {(provided) => (
                    <ul className="Start__Border" {...provided.droppableProps} ref={provided.innerRef}>
                      { plan.map((item, idx) => (
                        <Draggable key={item.count} draggableId={item.count} index={idx}>
                          {(provided) => (
                            <li className="Flex" key={idx} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <div className="StartName">{item.name}</div>
                              {/* <button className="DeleteButton" onClick={()=> handleRemoveTask(idx)}>Del</button> */}
                            </li>
                          )}
                        </Draggable>
                      )) }
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
            <UserData.Provider value={plan}>
            <TeamData.Provider value={team}>
            <Match />
            </TeamData.Provider>
            </UserData.Provider>
            <div className="StartContainer">
              <DragDropContext onDragEnd={handleOnDragStart}>
                <Droppable droppableId="Start__Border">
                  {(provided) => (
                    <div className="Start__Border" {...provided.droppableProps} ref={provided.innerRef}>
                      { team.map((item, idx) => (
                        <Draggable key={item.count} draggableId={item.count} index={idx}>
                          {(provided) => (
                            <div className="Flex" key={idx} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <div className="StartName">{item.name}</div>
                              {/* <button className="DeleteButton" onClick={()=> handleRemoveTeam(idx)}>Del</button> */}
                            </div>
                          )}
                        </Draggable>
                      )) }
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
            <h1 className="teamB">【工程設計】</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top;
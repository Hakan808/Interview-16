import React, { useState } from "react";

function App() {
  const PLAYERS = ["Ali", "Namık", "Eda", "Ebru", "Suzan", "Samet", "Engin", "Halit"];
  return <FormTeams players={PLAYERS} />;
}

const FormTeams = ({ players }) => {
  const [user, setUser] = useState(players);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("team1"); 

  const handleSelect = (name) => {
    if (selectedTeam === "team1") {
      setTeam1([...team1, name]);
    } else {
      setTeam2([...team2, name]);
    }
    setUser(user.filter((p) => p !== name));
  };


  const randomTeams = () => {
    const allPlayers = [...user, ...team1, ...team2];
    const random = allPlayers.sort(() => Math.random() - 0.5);

   
    const half = Math.ceil(random.length / 2);
    setTeam1(random.slice(0, half));
    setTeam2(random.slice(half));
    setUser([]);
  };

  const resetTeams = () => {
    setUser(players);
    setTeam1([]);
    setTeam2([]);
    setSelectedTeam("team1");
  };

  return (
    <div className="flex flex-col gap-6 items-center w-full min-h-screen p-4 bg-gray-50  transition-colors">

      <div className="flex gap-2 flex-wrap justify-center">
        {user.map((p) => (
          <button
            key={p}
            onClick={() => handleSelect(p)}
            className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
          >
            {p}
          </button>
        ))}
      </div>

     
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={() => setSelectedTeam("team1")}
          className={`px-4 py-2 rounded ${
            selectedTeam === "team1"
              ? "bg-green-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
          } hover:scale-105 transform transition`}
        >
          Takım 1
        </button>
        <button
          onClick={() => setSelectedTeam("team2")}
          className={`px-4 py-2 rounded ${
            selectedTeam === "team2"
              ? "bg-green-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
          } hover:scale-105 transform transition`}
        >
          Takım 2
        </button>
      </div>


      <div className="flex gap-4 flex-wrap justify-center">
        <button className="px-4 py-2 rounded bg-yellow-400 hover:bg-yellow-500 transition" onClick={randomTeams}>
          Karıştır
        </button>
        <button className="px-4 py-2 rounded bg-red-400 hover:bg-red-500 text-white transition" onClick={resetTeams}>
          Sıfırla
        </button>
      </div>

   
      <div className="flex flex-col sm:flex-row gap-6 mt-6 w-full justify-center">
        <div className="border p-4 min-w-[120px] rounded bg-white dark:bg-gray-800 shadow">
          <h2 className="font-bold mb-2 text-center text-gray-900 dark:text-white">Takım 1</h2>
          {team1.map((p) => (
            <p key={p} className="text-center text-gray-700 dark:text-gray-300">{p}</p>
          ))}
        </div>
        <div className="border p-4 min-w-[120px] rounded bg-white dark:bg-gray-800 shadow">
          <h2 className="font-bold mb-2 text-center text-gray-900 dark:text-white">Takım 2</h2>
          {team2.map((p) => (
            <p key={p} className="text-center text-gray-700 dark:text-gray-300">{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

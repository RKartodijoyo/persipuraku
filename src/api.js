// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    { number: 1, name: "Boaz Saloza", position: "FW" },
    { number: 2, name: "Fitrul Dwi Rustapa", position: "GK" },
    { number: 3, name: "Ricardo Salampessy", position: "DF" },
    { number: 4, name: "Thiago Amaral	", position: "MF" },
    { number: 5, name: "Yohanes Pahabol", position: "FW" },
    { number: 6, name: "Sylvano Comvalius", position: "FW" }
  ],
  all: function() {
    return this.players;
  },
  get: function(id) {
    const isPlayer = p => p.number === id;
    return this.players.find(isPlayer);
  }
};

export default PlayerAPI;

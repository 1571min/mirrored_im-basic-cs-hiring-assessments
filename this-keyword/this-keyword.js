// Example use :
//
// sport.playerNames();
// returns ["Lebron James plays basketball", "Kevin Durant plays basketball"]

var sport = {
  name: 'basketball',
  players: [
    { name: 'LeBron James', age: 31 },
    { name: 'Kevin Durant', age: 28 }
  ],
  playerNames: function() {
    let result = [];
    this.players.forEach(element => {
      let str = element.name + ' plays ' + this.name;
      result.push(str);
    });
    return result;
  }
};

module.exports = sport;

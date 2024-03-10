const streamers = [{ name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' }, { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' }, { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' }, { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }];


const filteredStreamers = streamers.filter(streamer => {
    return streamer.gameMorePlayed.toLowerCase() === 'league of legends' && streamer.age < 30;
});

console.log("Streamers que juegan League of Legends y tienen menos de 30 años:", filteredStreamers);
const listSong = [
    {
        title: 'Fortune Cookie',
        artist: 'Jkt48',
        genre: 'IndonesianPop',
        duration: 4.42
    },   
    {
        title: 'Heavy Rotation',
        artist: 'Jkt48',
        genre: 'IndonesianPop',
        duration: 4.42
    },   
    {
        title: 'Wonderwall',
        artist: 'Oasis',
        genre: 'BritRock',
        duration: 4.18
    },   
    {
        title: 'Stand By Me',
        artist: 'Oasis',
        genre: 'BritRock',
        duration: 5.56
    },   
    {
        title: 'Yellow',
        artist: 'Coldplay',
        genre: 'BritPop',
        duration: 4.26
    },   
    {
        title: 'The Scientist',
        artist: 'Coldplay',
        genre: 'BritPop',
        duration: 5.09
    },   
    {
        title: 'Robbers',
        artist: 'The1975',
        genre: 'Alternatif/Indie',
        duration: 4.14
    },   
    {
        title: 'About You',
        artist: 'The1975',
        genre: 'Alternatif/Indie',
        duration: 5.26
    },   
    {
        title: 'Anything You Want',
        artist: 'RealityClub',
        genre: 'IndonesianIndie',
        duration: 3.52
    },   
    {
        title: '2112',
        artist: 'RealityClub',
        genre: 'IndonesianIndie',
        duration: 5.56
    },   
]

function songsByArtist(listSong) {
    const groupSong = {};

    listSong.forEach(song => {
        if (!groupSong[song.artist]) {
            groupSong[song.artist] = [];
        }
        groupSong[song.artist].push(song);
    });

    return groupSong;
}

function songsByGenre(listSong) {
    const groupSong = {};

    listSong.forEach(song => {
        if (!groupSong[song.genre]) {
            groupSong[song.genre] = [];
        }
        groupSong[song.genre].push(song);
    });

    return groupSong;
}

function playSongLessThanOneHour(listSong) {
    const maxDuration = 60; // 60 minutes
  
    const selectedSongs = [];
    let totalDuration = 0;
  
    while (totalDuration < maxDuration) {
      const randomList = Math.floor(Math.random() * listSong.length);
      const randomSong = listSong[randomList];

      if (totalDuration + randomSong.duration <= maxDuration) {
        selectedSongs.push(randomSong);
        totalDuration = totalDuration + randomSong.duration;
      } else {
        break;
      }

    }
    console.log(totalDuration);
    return selectedSongs;
  }

const groupSongByArtist = songsByArtist(listSong);
console.log('Songs Group By Artist :', groupSongByArtist);

console.log('======================================')

const groupSongByGenre = songsByGenre(listSong);
console.log('Songs Group By Genre :', groupSongByGenre);

console.log('======================================')

const selectedSongs = playSongLessThanOneHour(listSong);
console.log("Selected songs less than 1 hour:", selectedSongs);

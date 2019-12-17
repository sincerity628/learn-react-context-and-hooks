import React, { useState } from 'react';
import uuid from 'uuid/v1';

const initSongs = [
  {id: 1, title: 'all i do'},
  {id: 2, title: 'i wish'},
  {id: 3, title: 'memories'}
];

const SongList = () => {
  const [songs, setSongs] = useState(initSongs);

  const addSong = () => {
    setSongs([...songs, { id: uuid(), title: 'new song' }]);
  };

  return (
    <div className="song-list">
      <ul>
        { songs.map(song => {
          return ( <li key={song.id}>{ song.title }</li> );
        }) }
      </ul>
      <button onClick={addSong}>add song</button>
    </div>
  );
}

export default SongList;

import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const initSongs = [
  {id: 1, title: 'all i do'},
  {id: 2, title: 'i wish'},
  {id: 3, title: 'memories'}
];

const SongList = () => {
  const [songs, setSongs] = useState(initSongs);
  const [age, setAge] = useState(20);

  useEffect(() => {
    console.log('use effect ran.', songs);
  }, [songs]);

  useEffect(() => {
    console.log('use effect ran.', age);
  }, [age]);

  const addSong = (title) => {
    setSongs([...songs, { id: uuid(), title: title }]);
  };

  return (
    <div className="song-list">
      <ul>
        { songs.map(song => {
          return ( <li key={song.id}>{ song.title }</li> );
        }) }
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>add 1 to age.{ age }</button>
    </div>
  );
}

export default SongList;

import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>name: </label>
      <input id="title" type="text" required value={title} onChange={handleChange} />
      <button>add new song</button>
    </form>
  );
}

export default NewSongForm;

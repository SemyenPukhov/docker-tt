import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');

  async function submitForm() {
    const response = await fetch('http://localhost:5000/user', {
      method: 'POST',
      body: JSON.stringify({ username }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log('data', data);

    setUsers(data.users);
  }

  useEffect(() => {
    console.log(users);
    async function fetchUsers() {
      const response = await fetch('http://localhost:5000/user');
      const data = await response.json();
      console.log('res', data);

      setUsers(data.users);
    }

    fetchUsers();
  }, []);

  return (
    <div className='App'>
      <h1>Title</h1>
      <div className='form'>
        <input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button onClick={submitForm}>Add</button>
      </div>
      <div className='container'>
        <div className='item'>{users.length}</div>
        {users.map((user, i) => (
          <div className='item' key={i}>
            {user.username}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

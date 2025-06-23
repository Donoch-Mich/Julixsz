import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Pobierz aktualną wartość z backendu przy załadowaniu komponentu
  useEffect(() => {
    fetch('http://localhost:5000/api/counter')
      .then(res => res.json())
      .then(data => {
        setCount(data.value);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  // Zaktualizuj backend po zmianie wartości
  const updateBackend = (newValue) => {
    setCount(newValue);
    fetch('http://localhost:5000/api/counter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: newValue }),
    }).catch(console.error);
  };

  if (loading) return <p>Ładowanie...</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: 20 }}>
      <h2>Licznik: {count}</h2>
      <button onClick={() => updateBackend(count - 1)}>-</button>
      <button onClick={() => updateBackend(count + 1)} style={{ marginLeft: 10 }}>+</button>
    </div>
  );
}

export default Counter;

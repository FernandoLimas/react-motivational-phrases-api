import styles from '../component/Card.module.css';
import { useState, useEffect } from 'react';

const Card = () => {
  const [data, setData] = useState({ slip: []});
  const [loading, setLoading] = useState(null);

  const handleClick = async () => {
    let url = 'https://api.adviceslip.com/advice';

    setLoading(true);

    await fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));

    setLoading(false);
  };

  return (
    <div className={styles.card}>
      <h1>Motivational Phrases</h1>
      <button onClick={handleClick}>Click Here</button>
      <p>{loading ? 'Loading...' : data.slip.advice}</p>
    </div>
  )
}

export default Card;

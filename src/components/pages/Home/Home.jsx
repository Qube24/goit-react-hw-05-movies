import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { fetchMovies } from 'components/fetchApi';
import css from './homeStyle.module.css';

function Home() {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    const fetchTrending = await fetchMovies();
    setTrending(fetchTrending.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <h2 className={css.pageTitle}>TOP TRENDING</h2>
      <ul className={css.list}>
        {trending.map(el => (
          <Link to={`/movies/${el.id}`} key={el.id} className={css.link}>
            <li key={el.id}>{el.title}</li>
          </Link>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Home;

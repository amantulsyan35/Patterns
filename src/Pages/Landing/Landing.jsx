import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <main className='landing-container'>
      <h1>{`Learning <Patterns />`}</h1>
      <section className='patterns-container'>
        <Link to='/singleton'>
          <div className='pattern-card'>
            <h4>Singleton Pattern </h4>
            <div className='pattern-card-img'>
              <img
                src='https://www.patterns.dev/img/remote/25efX9-640w.avif'
                alt=''
              />
            </div>
          </div>
        </Link>
        <Link to='/proxy'>
          <div className='pattern-card'>
            <h4>Proxy Pattern </h4>
            <div className='pattern-card-img'>
              <img
                src='https://www.patterns.dev/img/remote/1k7tQC-640w.avif'
                alt=''
              />
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default Landing;

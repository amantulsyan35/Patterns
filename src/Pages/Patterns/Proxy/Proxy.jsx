import './Proxy.css';
import { useState } from 'react';
import Xarrow, { Xwrapper } from 'react-xarrows';

const Proxy = () => {
  const [name, setName] = useState('John Doe');
  const [clicked, setClicked] = useState(false);
  const [getClicked, setGetClicked] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSet = () => {
    setClicked(true);
  };

  const handleGet = () => {
    setGetClicked(true);
  };

  return (
    <main className='proxy'>
      <section className='proxy-container'>
        <a href='https://www.patterns.dev/posts/proxy-pattern/'>
          [Read More About Proxy Pattern]
        </a>
        <div className='proxy-interactive-container'>
          <Xwrapper>
            <div id='main' className='proxy-interactive-input'>
              <label>
                <b>{getClicked ? `person.name = ${name}` : 'person.name'}</b>
              </label>
              <input type='text' onChange={handleChange} />
            </div>
            <div id='elem1' className='proxy-interactive'>
              <div className='proxy-interactive-object'>personProxy</div>
              <div className='proxy-interactive-method' onClick={handleGet}>
                get
              </div>
              <div className='proxy-interactive-method' onClick={handleSet}>
                set
              </div>
            </div>
            <div className='proxy-result'>
              <div className='proxy-interactive-object'>perosn</div>
              <div id='elem2' className='proxy-interactive-method'>
                <span>name</span>
                <span>{clicked ? name : 'John Doe'}</span>
              </div>
              <div className='proxy-interactive-method'>
                <span>age</span>
                <span>42</span>
              </div>
              <div className='proxy-interactive-method'>
                <span>nationality</span>
                <span>Indian</span>
              </div>
            </div>
            <Xarrow start='main' end='elem1' />
            <Xarrow start='elem1' end='elem2' />
          </Xwrapper>
        </div>
      </section>
    </main>
  );
};

export default Proxy;

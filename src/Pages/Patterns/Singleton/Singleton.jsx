import './Singleton.css';
import React from 'react';
import Xarrow, { Xwrapper } from 'react-xarrows';
import DraggableBox from '../../../component/DraggableBox/DraggableBox';
import SandboxComp from '../../../component/Sandbox/Sandbox.jsx';

const Singleton = () => {
  return (
    <main className='singleton'>
      <section className='singleton-container'>
        <a href='https://www.patterns.dev/posts/singleton-pattern/'>
          [Read More About Singleton Pattern]
        </a>
        <div className='singleton-interactive-container'>
          <Xwrapper>
            <div className='singleton-interactive'>
              <div id='main' className='interactive-object'>
                Counter
              </div>
              <div className='interactive-method-container'>
                <DraggableBox id='elem1' method='increment' />
                <DraggableBox id='elem2' method='decrement' />
              </div>
            </div>
            <Xarrow start='main' end='elem1' />
            <Xarrow start='main' end='elem2' />
          </Xwrapper>
        </div>
        <SandboxComp />
      </section>
    </main>
  );
};
export default Singleton;

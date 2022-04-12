import Draggable from 'react-draggable';
import { useXarrow } from 'react-xarrows';

const DraggableBox = ({ method, id }) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div id={id} className='interactive-method'>
        {method}
      </div>
    </Draggable>
  );
};

export default DraggableBox;

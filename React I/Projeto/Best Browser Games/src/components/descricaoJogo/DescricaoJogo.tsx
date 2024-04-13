import { useState } from 'react';

type DescriptionComponentType={
    initialText: string
    maxLength:number
}

const DescriptionComponent = (props:DescriptionComponentType) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <p>{showFullText ? props.initialText : props.initialText.slice(0, props.maxLength)}</p>
      {props.initialText.length > props.maxLength && (
        <button onClick={toggleShowText}>
          {showFullText ? 'Mostrar menos' : 'Mostrar mais'}
        </button>
      )}
    </div>
  );
};

export default DescriptionComponent;

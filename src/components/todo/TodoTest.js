import React from 'react';
const { useState, useRef, useEffect } = React;

const TodoTest = () => {
  const [isEditing, setEditing] = useState(false);
  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div>
      {isEditing && <input ref={inputRef} />}
      <button onClick={toggleEditing}>Edit</button>
    </div>
  );
};

export default TodoTest;

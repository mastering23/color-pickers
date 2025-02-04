export const ColorBtn = ({ onClickHandler, buttonText }) => {
  return <button onClick={onClickHandler}>{buttonText}</button>;
};


export const RandomColor = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'orange', 'brown', 'black', 'grey', 'white'];
  const heading = document.querySelector('#heading');
  const i = Math.floor(Math.random() * colors.length);
  const j = Math.floor(Math.random() * colors.length);

  heading.style.color = colors[i];
  heading.style.backgroundColor = colors[j];
};


export const RandomObjects = () => {
  const objects = ['🟢', '🔴', '🟡', '🔵', '🟣', '🟤', '🟠', '⚫', '⚪'];
  const heading2 = document.querySelector('#heading2');
  const i = Math.floor(Math.random() * objects.length);
  heading2.innerHTML = objects[i];
};

export default ColorBtn;

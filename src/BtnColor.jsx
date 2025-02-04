
const ColorBtn = () => {

return <button onClick={RandomColor}> RANDOM COLOR </button>;

}



const RandomColor = () =>{
  const colors = ['red','blue','green','yellow','pink','orange','brown','black','grey','white']
  const heading = document.querySelector('#heading'); 
  const i = Math.floor(Math.random() * colors.length);  
  heading.style.color = colors[i];
};

export default ColorBtn; RandomColor;
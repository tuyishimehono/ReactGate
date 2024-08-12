// import { useReducer } from "react";
// We have a state that is updating the counter by incrementing and decrementing it by one

// How can you archive this using the `useReducer` hook?

// function reducer(state, action){
//   if (action.type === 'increment'){
//     return {
//       count: state.count + 1
//     }
//   }
//   else if(action.type === 'decrement'){
//     return {
//       count: state.count - 1
//     }
//   }
//   // throw new Error
// }
// export default function Counter() {
//   const [state, dispatch] = useReducer(reducer, {count:0})
//   console.log('state',state)
//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={()=> dispatch({type:'increment'})}>Increment</button>
//       <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
//     </div>
//   );
// }

import { useState } from "react";

function ToggleButtons() {
  // these are initialColors: ['gray','gray','gray','gray','gray']
  const initialColors = Array(5).fill("gray");
  const [buttonColors, setButtonColors] = useState(initialColors);

  const handleClick = (index) => {
    const newColors = buttonColors.map((color, i) => {
      if (i === index) {
        return color === "gray" ? "blue" : "gray"; // Toggle between 'gray' and 'blue'
      }
      return color; // Return the same color for other buttons
    });

    setButtonColors(newColors);
  };
  return (
    <div>
      {buttonColors.map((color, index) => (
        <button
          key={index}
          style={{
            backgroundColor: color,
            padding: "10px",
            margin: "5px",
            border: "none",
          }}
          onClick={() => handleClick(index)}
        >
          Button {index + 1}
        </button>
      ))}
    </div>
  );
}

export default ToggleButtons;

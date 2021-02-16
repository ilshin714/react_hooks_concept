import React, {
  useEffect,
  useState,
  useReducer,
  Fragment,
  useRef,
  createContext,
  useContext,
} from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
//import reportWebVitals from "./reportWebVitals";
import { FaStar } from "react-icons/fa";
import { useInput } from "./useInput";
import { useFetch } from "./useFetch";
//import App from "./App";

//// -------------------------------- #1 The concept of destructuring
// const [first, second]= ["Keum Ji Kim", "David Shin", "Sandy Park"];
// console.log(first);
// console.log(second);
// const [,,third] =["Keum Ji Kim", "David Shin", "Sandy Park"];
// console.log(third);

// // -------------------------------- #2 Incorporating the useState
// function App() {
//   const [status, setStatus] = useState("Not Delivered");

//   return (
//     <div>
//       <h1>THe package is: {status}</h1>
//       <button onClick={() => setStatus("Delivered")}>Deilver</button>
//     </div>
//   );
// }

// // -------------------------------- #3 Building a checkbox with useStage
// function App(){
//   const [checked, setChecked] = useState(false);
//   return (
//     <div>
//       <input
//         type="checkbox"
//         value={checked}
//         onChange={() =>
//           setChecked((checked) => !checked)}
//         />

//       <p>{checked ? "checked" : "not checked"}</p>
//     </div>
//   )
// }

// // // -------------------------------- #4 Building a checkbox with useStage
// const createArray = (length) => [
//   ...Array(length)
// ];

// function Star({selected = false, onSelect}){
//   return <FaStar color={selected ? "red" : "gray"}
//     onClick={onSelect}
//   />;
// }

// function StarRating({totalStars = 5}){
//   const [
//     selectedStarts,
//     setSelectedStars
//   ] = useState(0);

//   return <>
//   {createArray(totalStars).map((n,i) => (
//       <Star key={i} selected ={selectedStarts > i} onSelect={() => setSelectedStars(i+1)}/>
//     )
//   )}
//   <p>{selectedStarts} of {totalStars}</p>

//   </>
// }

// function App(){
//   return <StarRating totalStars={10}/>
// }

// // -------------------------------- #4 Introducing useEffect , Working with dependency array
// function App(){
//   const [name, setName] = useState("Ilshin");
//   const [admin, setAdmin] = useState(false);
//   useEffect(() =>{
//     document.title = `Celebreate ${name}`;
//     console.log(`Celeberate ${name}`);
//   }, [name]);

//   useEffect(()=>{
//     console.log(`The user is: ${admin ? "admin" : "not admin"}`);
//   },[admin])

//   return(
//     <section>
//       <p>Congratulations {name}!</p>
//       <button onClick={()=> setName("Shinny")}>Change the winner</button>
//       <p>{admin? "Loogged in" : "not logged in"}</p>
//       <button onClick={() => setAdmin((admin) =>!admin)}>Login</button>
//     </section>
//   )
// }

// // -------------------------------- #5 Fetching data with useEffect
// function App(){
//   const [data, setData] = useState([]);
//   useEffect(()=>{
//     fetch(`https://api.github.com/users`)
//     .then(response => response.json())
//     .then(setData);
//   },[]);

//   if(data) {
//     return (
//       <div>
//       <ul>
//         {data.map((user) => (
//           <li key={user.id}>{user.login}</li>
//         ))}
//       </ul>
//       <button onClick={() => setData([])}>Remove Data</button>
//       </div>
//     )
//   }

//   return <p>No users</p>

// }

// // -------------------------------- #6 Handling complex state with useReducer

// function App(){
//   const [number, setNumber] = useReducer((number, newNumber)=> number + newNumber, 0)
//   return <h1 onClick = {()=> setNumber(1)}>
//    {number}
//   </h1>
// }

// // // -------------------------------- #7 Refactoring useState to useReducer
// function App(){
//   const [checked, toggle] = useReducer(
//     (checked) => !checked, false
//   );
//   return (
//     <Fragment>
//       <input
//         type="checkbox"
//         value={checked}
//         onChange={toggle}
//         />

//       <p>{checked ? "checked" : "not checked"}</p>
//     </Fragment>
//   )
// }

// // // -------------------------------- #8 dispatching actions with useReducer
// const initialState = {
//   message: "Hi"
// }

// function reducer(state, action){
//   //state.message == "Hi"? state.message="Hi": state.message="Hi"
//   switch(action.type){

//     case "yell":
//       return{
//         message : `HEY!! I JUST SAID ${state.message}`
//       };
//     case "whisper":
//       return{
//         message: `Excuse me I just said ${state.message}`
//       };
//     default:
//       return {
//         message: "Say something"
//       };
//   };
// };

// function App(){
//   const [state, dispatch] = useReducer(
//     reducer,
//     initialState
//   );

//   return (
//     <Fragment>
//       <p>Message: {state.message}</p>
//       <button onClick={() => dispatch({type: "yell"})}>YELL</button>
//       <button onClick={() => dispatch({type: "whisper"})}>WHISPER</button>
//     </Fragment>
//   )
// }

// // -------------------------------- #9 Managing from inputs with useRef
// function App(){
//   const sound = useRef();
//   const color = useRef();

//   const submit = (e) =>{
//     e.preventDefault();
//     const soundVal = sound.current.value;
//     const colorVal = color.current.value;
//     alert(`${soundVal} sounds like ${colorVal}`);
//     sound.current.value="";
//     color.current.value="";
//   }
//   return(
//     <form onSubmit={submit}>
//       <input
//         ref={sound}
//         type="text"
//         placeholder="sound..."/>
//       <input
//         ref={color}
//         type="color"/>
//       <button>ADD</button>
//     </form>
//   )
// }

// // -------------------------------- #10 Creating controlled components with useState
// function App() {
//   const [sound, setSound] = useState("");
//   const [color, setColor] = useState("#00000");

//   const submit = (e) => {
//     e.preventDefault();
//     alert(`${sound} sounds like ${color}`);
//     setSound("");
//     setColor("#000000");
//   };

//   return (
//     <form onSubmit={submit}>
//       <input
//         value={sound}
//         type="text"
//         placeholder="sound..."
//         onChange={(e) => setSound(e.target.value)}
//       />
//       <input
//         value={color}
//         type="color"
//         onChange={(e) => setColor(e.target.value)}
//       />
//       <button>ADD</button>
//     </form>
//   );
// }

// // -------------------------------- #11 reusing form logic with custom Hooks
// function App() {
//   const [titleProps, resetTitle] = useInput("");
//   const [colorProps, resetColor] = useInput("#00000");

//   const submit = (e) => {
//     e.preventDefault();
//     alert(`${titleProps.value} sounds like ${colorProps.value}`);
//     resetTitle();
//     resetColor();
//   };

//   return (
//     <form onSubmit={submit}>
//       <input
//         {...titleProps}
//         type="text"
//         placeholder="sound..."
//       />
//       <input
//         {...colorProps }
//         type="color"

//       />
//       <button>ADD</button>
//     </form>
//   );
// }

// // -------------------------------- #12 Placing data in context and Retrieving dta with useContext
// we have to coomment out ReactDOM.render here for this example
// export const TreesContext = createContext();

// const trees = [
//   {id: "1", type: "Maple"},
//   {id: "2", type: "Oak"},
//   {id: "3", type: "Family"},
//   {id: "4", type: "Component"}
// ];

// ReactDOM.render(
//     <TreesContext.Provider value={{trees}}>
//       <App />
//     </TreesContext.Provider>,
//     document.getElementById("root")
//   );
//We have to go to App.js

//// ReactDOM.render(
////   <React.StrictMode>
//////     <App />
////   </React.StrictMode>,
////   document.getElementById("root")
//// );

// // -------------------------------- #13 Creating a custom Hook with context
// const TreesContext = createContext();
// export const useTrees = () => useContext(TreesContext);

// const trees = [
//   {id: "1", type: "Maple"},
//   {id: "2", type: "Oak"},
//   {id: "3", type: "Family"},
//   {id: "4", type: "Component"}
// ];

//// ReactDOM.render(
////   <React.StrictMode>
//////     <App />
////   </React.StrictMode>,
////   document.getElementById("root")
//// );
// ////We have to go to App.js

// // -------------------------------- #14 Data fetching with a Fetch Hooks

function App({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );
  if (loading) return <h1>loading....</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <img src={data.avatar_url} alt={data.login} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

ReactDOM.render(<App login="ilshin714" />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

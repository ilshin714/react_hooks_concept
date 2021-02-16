import logo from './logo.svg';
import './App.css';
// // -------------------------------- #12 Placing data in context and Retrieving dta with useContext
// import { TreesContext } from "./";
// import react, {useContext} from "react";

// function App() {
//   const {trees} = useContext(TreesContext);


//   return (
//     <div>
//       <h1>Trees I Have Heard Of</h1>
//       <ul>
//         {trees.map((tree) =>(
//           <li key={tree.id}>{tree.type}</li>
//         ))}
//       </ul>
//     </div>
//   );
//   }
// // -------------------------------- #12 Done/////


// // -------------------------------- #13 Creating a custom Hook with context
// import {useTrees} from "./";
// function App() {
//   const {trees} = useTrees();
//   return (
//     <div>
//       <h1>Trees I Have Heard Of</h1>
//       <ul>
//         {trees.map((tree) =>(
//           <li key={tree.id}>{tree.type}</li>
//         ))}
//       </ul>
//     </div>
//   );
//   }



function App({name}) {
  console.log()
  return (
    <div className="App">
      <h1>Hello  </h1>
    </div>
  );
}

export default App;

import "./App.css";
import AppExchange from "./components3/appExchange";

function App() {
  return(
    <div className="container">
      <AppExchange />
    </div>
  );
  

  //parents
// return(
//   <div className="container">
//     <ParentComp>
//       <Comp1/>
//     </ParentComp>
//     <ParentComp>
//       <Comp2/>
//     </ParentComp>
//   </div>
// );

//loop in react
  // return( 
  // <div className="container">
  //   <h1>List of prodacts:</h1>
  //   <ul>
  //     {shop_ar.map((item) => {
  //       return(
  //         <li key={item.id}>{item.name} - {item.price} NIS</li>
  //       )
  //     })}
  //   </ul>
  // </div>
  // );
}

export default App;

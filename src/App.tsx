import { Route, Routes } from "react-router-dom";
import Discover from "./components/Discover";
import FeelTheMusic from "./components/FeelTheMusic";
import Join from "./components/Join";
import Layout from "./components/Layout";



 export function App() {
  return (    
    // <div>
    //   <Discover/>
    // </div>

    <> 

   <Routes>
   
    <Route element={<Layout />}>
      <Route path="/" element={<FeelTheMusic/> }/>
      <Route path="/soudwave" element={<FeelTheMusic/> }/> 
      <Route path="/discover" element={<Discover/> }/>
      <Route path="/join" element={<Join/> }/>
    </Route>
   </Routes>
   </>
  );
}

export default App;

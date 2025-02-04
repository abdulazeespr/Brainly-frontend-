<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
=======

import Dashboard from "./pages/Dashboard";
>>>>>>> 28f33aaa5af0ba2184af473ccd78f0ebb20be25f


function App() {
  return (
    // <div >
    //  {/* <Dashboard /> */}
    //  {/* <SignIn/> */}
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>

  );
}


export default App;

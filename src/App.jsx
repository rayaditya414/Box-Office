import React from "react";
import {Switch, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Starred from "./pages/Starred";

function App() {
    return( 
        <div>
             <Navbar/>

             <Switch>
                 <Route exact path="/">
                   <Home/>
                 </Route>
                 <Route exact path="/starred">
                  <Starred/>
                </Route>
                <Route >
                    <div>
                    this is 404 page!
                    </div>
                </Route>
            
        </Switch>
        </div>
    );
    }

    export default App;
import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import FormRendering from './FormRendering';
import UnionBank from './UnionBank';


export default function Home() {
    return (
        <div>
            <BrowserRouter>
               <Routes>
                <Route path="/" element={<Main/>}> </Route>
                <Route path="/form" element={<FormRendering/>}> </Route>
                <Route path="/Bank" element={<UnionBank/>}> </Route>


           
                
               </Routes>

            </BrowserRouter>
        </div>
    )
}

function Main(){
return(
    <>
    <h1>::happy home::</h1>
   <Link to="/form"> Form</Link>
   <Link to="/Bank"> Bank</Link>
    </>
)

}

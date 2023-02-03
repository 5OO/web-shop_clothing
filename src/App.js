import Home from "./routes/home/home-component";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

// Easter egg
console.log(
   '\n' +
    '   _____                 __    \n' +
    '  /     \\ ___.__._______|  | __\n' +
    ' /  \\ /  <   |  |\\_  __ \\  |/ /\n' +
    '/    Y    \\___  | |  | \\/    < \n' +
    '\\____|__  / ____| |__|  |__|_ \\\n' +
    '        \\/\\/                 \\/\n');

const Shop = () => {
    return <h1>this is SHOP here öäüõ ÜÕÖÄöäüõ ÜÕÖÄöäüõ ÜÕÖÄ</h1>
};

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                debugger;
                <Route index element={<Home/>}/>
                <Route path='shop' element={<Shop/>}/>
            </Route>
        </Routes>
    );
};

export default App;

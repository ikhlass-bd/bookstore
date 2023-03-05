import logo from './logo.svg';
import './App.css';

import {Route,Routes} from "react-router-dom";
import BookList from "./components/component.book.list";
import BookNew from "./components/component.book.new";
import AdminLayout from "./components/component.admin.layout";



function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path={'/admin'} elenent={<AdminLayout/>}>
    <Route path={"books"} eLement={<BookList/>}></Route>
   <Route path={"books/new"} element={<BookNew/>}></Route>
   </Route>
  
   <Route path={"/"} element={<Home/>}>

   </Route>
</Routes>
</>
  );
}

export default App;

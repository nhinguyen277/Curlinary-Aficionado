import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Recipes from "./pages/Recipes";
import DetailRecipe from "./components/DetailRecipe";
import DetailPost from "./pages/Post";
import About from "./pages/About";
import './App.css';

function App() {
   return (
    <>
    <BrowserRouter>
      <Header />     
      <main id="main">
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path ="/posts" element={<Posts />}/>
        <Route path ="/recipes" element={<Recipes />}/>
        <Route path ="/details/:id" element={<DetailRecipe />}/>
        <Route path ="/post/:id" element={<DetailPost />}/>
        <Route path ="/about" element={<About />}/>
       </Routes>
      </main>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

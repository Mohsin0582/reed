// import logo from './logo.svg';
import './App.css';
import './Global.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"
import Home from "./pages/home/Home"

function App() {
  return (
    <Router>
      <div className="app">
        <logo></logo>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            {/* <Route path="/register" element={ user ? <Home/> : <Auth/> } />
            <Route path="/write" element={ user ?   <AddPost/> : <Auth/>} />
            <Route path="/posts/:id" element={<SinglePost/>} /> */}
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;

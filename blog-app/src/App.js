import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './pages/Navbar';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className= "page-body">
          <Routes>
            <Route key={1} path = "/" element = {<HomePage />} />
            <Route key={2} path = "/about" element = {<AboutPage />} />
            <Route key={3} path = "/articles" element = {<ArticleListPage />} />
            <Route key={4} path = "/articles/:articleId" element = {<ArticlePage />} />
            <Route key={5} path = "*" element = {<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;

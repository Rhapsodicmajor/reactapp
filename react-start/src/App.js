import Header from './components/Header'
import Footer from './components/Footer';
import CourseList from './components/CourseList';
import Main from './components/Main';
import Home from './pages/Home';
import Error from './pages/Error';
import ProductListApi from './components/ProductListApi';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/> 
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="*" element={<Error/>}></Route>
        <Route path="/products" element={<ProductListApi/>}></Route>
      </Routes>
      <Footer className="mt-auto" />
    </Router>
  );
}

export default App;

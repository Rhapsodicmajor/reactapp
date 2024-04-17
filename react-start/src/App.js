import Header from './components/Header'
import Footer from './components/Footer';
import CourseList from './components/CourseList';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <CourseList/>
      <Footer className="mt-auto" />
    </>
  );
}

export default App;

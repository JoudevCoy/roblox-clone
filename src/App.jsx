import Nav from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import BottomBar from './components/BottomBar';
import "./App.css";

const App = () => {
  return (
    <>
      {/*<p className="text-2xl font-bold text-blue-600">Hello World</p>*/}
      <Nav />
      <Header />
      <Content />
      <BottomBar />
    </>
  )
}

export default App

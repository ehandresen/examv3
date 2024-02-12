import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { HomePage, GetByIdPage, GetByGrandPrixPage } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/getById">GetById</Link>
              </li>
              <li>
                <Link to="/getByGP">GetByGrandPrix</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/getById" element={<GetByIdPage />}></Route>
            <Route path="/getByGP" element={<GetByGrandPrixPage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

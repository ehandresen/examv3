import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import {
  HomePage,
  GetByIdPage,
  GetByGrandPrixPage,
  CreateNewRacePage,
  UpdateRacePage,
  DeleteRacePage,
} from './pages';
import { RaceProvider } from './contexts/RaceContext';

function App() {
  return (
    <>
      {/* Ideelt sett flyttes hele 'nav' til en egen compnent */}
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="id">Search Id</Link>
              </li>
              <li>
                <Link to="grand-prix">Search GrandPrix</Link>
              </li>
              <li>
                <Link to="create">Create</Link>
              </li>
              <li>
                <Link to="update">Update</Link>
              </li>
              <li>
                <Link to="delete">Delete</Link>
              </li>
            </ul>
          </nav>
        </header>
        <RaceProvider>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="id" element={<GetByIdPage />}></Route>
              <Route path="grand-prix" element={<GetByGrandPrixPage />}></Route>
              <Route path="create" element={<CreateNewRacePage />}></Route>
              <Route path="update" element={<UpdateRacePage />}></Route>
              <Route path="delete" element={<DeleteRacePage />}></Route>
            </Routes>
          </main>
        </RaceProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

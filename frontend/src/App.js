// Ensure npm install react-router-dom
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
// Pages and Components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MyAdventures from './pages/MyAdventures'
import Navbar from './components/Navbar'

function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home />: <Navigate to = "/login"/>}
            />
            <Route
              path="/myadventures"
              element={user ? <MyAdventures />: <Navigate to = "/"/>}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to = "/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to = "/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

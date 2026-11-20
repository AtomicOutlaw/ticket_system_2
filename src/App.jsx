import { Routes, Route } from 'react-router-dom'
import CurrentTickets from "./pages/CurrentTickets.jsx";

function App() {
  return (
      <Routes>
          <Route path="/" element={<CurrentTickets />} />
      </Routes>

  )
}

export default App;
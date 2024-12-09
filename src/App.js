import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Your Home Component
import SameDayDelivery from './SameDayDelivery'; // Same Day Delivery Component
import BirthdayFlowers from './BirthdayFlowers'; // Birthday Flowers Component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/same-day-delivery" element={<SameDayDelivery />} />
        <Route path="/birthday-flowers" element={<BirthdayFlowers />} />
      </Routes>
    </Router>
  );
}

export default App;

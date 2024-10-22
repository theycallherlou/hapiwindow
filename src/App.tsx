import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EmployeeDirectory from './pages/EmployeeDirectory';
import EmployeeDetail from './pages/EmployeeDetail';
import EmployeeChangeLog from './pages/EmployeeChangeLog';
import NewHireList from './pages/NewHireList';
import NewHireDetail from './pages/NewHireDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/employeedirectory" element={<EmployeeDirectory />} />

        <Route path="/employeedirectory/:eecode" element={<EmployeeDetail />} />
        <Route path="/employee/:eecode" element={<EmployeeDetail />} />
        <Route path="/employee/:eecode/sensitive" element={<EmployeeDetail sensitive />} />

        <Route path="/employee/:eecode/change" element={<EmployeeChangeLog />} />
        <Route path="/employee/:eecode/change/:changeId" element={<EmployeeChangeLog />} />
        <Route path="/employee/:eecode/sensitivechange" element={<EmployeeChangeLog sensitive />} />
        <Route path="/employee/:eecode/sensitivechange/:changeId" element={<EmployeeChangeLog sensitive />} />

        <Route path="/newhireids" element={<NewHireList />} />
        <Route path="/newhire/:newHireId" element={<NewHireDetail />} />
        <Route path="/employeenewhire" element={<NewHireList />} />
        <Route path="/employeenewhire/:eecode" element={<NewHireDetail />} />
      </Routes>
    </Router>
  );
}

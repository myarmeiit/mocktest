
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

import GradeDetail from './components/Detail/GradeDetail';
import ExamDetail from './components/Detail/ExamDetail';
import ExamPage from './components/Exam/ExamPage';
import MaterialPage from './components/Material/MaterialPage';
import MaterialDetail from './components/Material/MaterialDetail';
import ExamTaking from './components/Exam/ExamTaking';
import ResultDetail from './components/Result/ResultDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grade/:gradeId" element={<GradeDetail />} />
        <Route path="/exams" element={<ExamPage />} />
        <Route path="/materials" element={<MaterialPage />} />
        <Route path="/materials/grade/:gradeId" element={<MaterialDetail />} />
        <Route path="/exam/:examId" element={<ExamDetail />} />
        <Route path="/attempt/:examId" element={<ExamTaking />} />
        <Route path="/result/:examId" element={<ResultDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

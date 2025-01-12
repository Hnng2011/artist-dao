import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '@pages/index';
import FAQ from '@pages/faq';
import Header from '@layout/header';
import DaoDetail from '@pages/dao-detail';
import MyDao from '@pages/my-dao';

function App() {
  return (
    <Router>
      <div className="max-w-screen-2xl m-auto px-4 lg:px-6 w-full min-h-screen py-4">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/dao/:daoId" element={<DaoDetail />} />
          <Route path="/my-fund" element={<MyDao />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

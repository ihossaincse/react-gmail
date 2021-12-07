import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { selectSendMessageIsOpen } from './features/mail/mailSlice';
import Header from "./Header";
import Mail from "./Mail";
import MailList from "./MailList";
import SendMail from "./SendMail";
import Sidebar from "./Sidebar";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<MailList />} />
          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import Heder from './Heder';
import Main from './Main';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from './Profile';
import Profiles from './Profiles';
import data from './data';
import Friends from './Friends';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Heder />
        <Routes>
          <Route path='/main' element={<Main data={data.PostPage} />} />
          <Route path='/profile' element={<Profiles data={data.ProfilePage} />} />
          <Route path='/friends' element={<Friends data={data.FriendsPage} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
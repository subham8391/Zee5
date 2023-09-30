
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import { AuthProvider } from './auth';
import NavigationBar from './components/NavigationBar';
import Footer from './footer/Footer';
import More from './more/More';
import ContentDetails from './contentdetails/ContentDetails';
import Home from './home/Home'
import Movies from './movies/Movies'
import TvShows from './tvshow/TvShows'
import Login from './login/Login';
import Signup from './signup/Signup';
// import Premium from './premium/Premium';
import WebSeries from './webseries/WebSeries';
import CommingSoon from './commingsoon/CommingSoon';
import MyAccount from './myaccount/MyAccount';
import PrivateRoute from './PrivateRoute';

function App() {
  
 
  return (
    <>
      <Router>
      
      <div>
        <NavigationBar />
        
        <Routes>
          <Route path="/more/:apiEndpoint/:filterType/:heading" element={<More />} />
          <Route path="/details/:type/:id" element={<ContentDetails />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/web-series" element={<WebSeries />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<CommingSoon />} />
          
          <Route path="/account" element={<PrivateRoute> <MyAccount /> </PrivateRoute>} />
          
          
          {/* <Route path="/premium" element={<CommingSoon />} />
          <Route path="/kids" element={<CommingSoon />} /> 
          <Route path="/livetv" element={<CommingSoon />} /> 
          <Route path="/sports" element={<CommingSoon />} /> 
          <Route path="/music" element={<CommingSoon />} /> 
          <Route path="/news" element={<CommingSoon />} /> 
          <Route path="/education" element={<CommingSoon />} />
          <Route path="/rent" element={<CommingSoon />} /> 
          <Route path="/video" element={<CommingSoon />} /> 
          <Route path="/songs" element={<CommingSoon />} />
          <Route path="/channels" element={<CommingSoon />} /> */}
        </Routes>
        <Footer />
      </div>
      
    </Router>
    </>
  )
}

export default App

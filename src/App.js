import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
       {/* Navbar */}
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
       />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow />
      <Row title="Horror Movies" fetchUrl={requests.fetchHororMovies} isLargeRow />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow />
    </div>
  );
}

export default App;

// import { Header, Footer } from "./components";
import ReactMarkdown from "react-markdown";
import { lesson_one } from "./data/markdown";

const App = () => {
  return (
    <div className="home">
      {/* <Header /> */}

      

      <div id="content">
      <img src ="../images/olliebaby.png" alt="ollie" width = "250" height = "200"></img>
      <img src ="../images/wxyc.png" alt="wxyc" width = "250" height = "200"></img>
      <img src ="../images/turntable.png" alt="spins" width = "400" height = "200"></img>
      <img src ="../images/totoro.png" alt="neighbor" width = "250" height = "200"></img>
      <img src ="../images/spider.png" alt="spidey" width = "250" height = "200"></img>
        <ReactMarkdown source={lesson_one} />
      </div>
      
      <div id="music">
      <iframe id="hypnotized"src="https://open.spotify.com/embed/track/1cHCG42MxckrXNFqyF8Uhr" width="280" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <iframe id="no one holds you" src="https://open.spotify.com/embed/track/77WVyrKez4KSqiVjxt6D4P" width="280" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <iframe id="comet face" src="https://open.spotify.com/embed/track/1Dgas4lOoZgoxoj8dE4iQu" width="280" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <iframe id="belly" src="https://open.spotify.com/embed/track/3tcMadg7fSfH0mFDo0408i" width="280" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <iframe id="dylan" src="https://open.spotify.com/embed/track/6x14wL9HvABR2Rix8N88EH" width="280" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default App;

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

      {/* <Footer /> */}
    </div>
  );
};

export default App;

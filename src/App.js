import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import PhoneDeals from "./components/PhoneDeals/PhoneDeals";
import Privacy from "./components/Privacy/Privacy";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";
import PhoneApps from "./components/PhoneApps/PhoneApps";
import SearchModel from "./components/SearchModel/SearchModal";
import { useSelector } from "react-redux";
import TechNews from "./components/TechNews/TechNews";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import SearchedArticle from "./components/SearchedArticle/SearchedArticle";

function App() {
  const searchModal = useSelector(
    (state) => state.HomeArticles.showSearchModal
  );

  return (
    <div className="App">
      <Router basename="/">
        <Navbar />

        {searchModal && <SearchModel />}

        <Routes>
          <Route path="/" exact element=<Home /> />
          <Route path="/phoneDeals" element=<PhoneDeals /> />
          <Route path="/techNews" element=<TechNews /> />
          <Route path="/contact" element=<Contact /> />
          <Route path="/article/:title/:type/:id" element=<ArticleDetails /> />
          <Route path="/searchedArticles/:title" element=<SearchedArticle /> />
          <Route path="/apps" element=<PhoneApps /> />
          <Route path="/privacy" element=<Privacy /> />
          <Route path="/termsOfUse" element=<TermsOfUse /> />
          <Route path="**" element=<NotFoundPage /> />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

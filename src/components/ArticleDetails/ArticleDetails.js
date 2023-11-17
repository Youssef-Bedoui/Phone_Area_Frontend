import React, { Fragment, useEffect } from "react";
import "./ArticleDetails.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SingleMoreArticle from "./SingleMoreArticle/SingleMoreArticle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeArticles } from "../../Redux/features/HomeSlice";

function ArticleDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { article } = location.state;
  const HomeArticles = useSelector((state) =>
    state.HomeArticles.articles.slice(0, 9)
  );

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    dispatch(fetchHomeArticles({}));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Fragment>
      <div className="articleDetails">
        <h2 className="title">{article.title}</h2>
        <h6 className="published">
          <AccessTimeIcon className="clock_icon" />
          {formattedDate}
        </h6>
        <div className="article_img">
          <img
            src={article.images[0]}
            alt={article.title}
            title={article.title}
          />
        </div>
        <div className="desc_parag">
          {article.description.map((paragraph, index) => (
            <div key={index} className="singleParag">
              <h3 className="inner_title">{paragraph.title}</h3>
              <p className="paragraph">{paragraph.paragraph}</p>
            </div>
          ))}
          {article.description[0].image && (
            <img
              src={article.description[0].image}
              alt={article.description[0].title}
              title={article.description[0].title}
            />
          )}
          {article.description[0].videoId && (
            <div className="videoWrapper">
              <iframe
                src={`https://www.youtube.com/embed/${article.description[0].videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
        {article.source && (
          <a
            href={article.source}
            className="source"
            alt={article.source}
            title={article.source}
          >
            Source
          </a>
        )}
      </div>
      <div className="moreArticles">
        <h3 className="more_title">
          MORE ARTICLES <ChevronRightIcon />
        </h3>
        <div className="more_container">
          {HomeArticles.map((article) => (
            <SingleMoreArticle key={article.id} article={article} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default ArticleDetails;

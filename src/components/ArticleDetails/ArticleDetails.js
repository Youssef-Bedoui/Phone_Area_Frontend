import React, { useEffect } from "react";
import "./ArticleDetails.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SingleMoreArticle from "./SingleMoreArticle/SingleMoreArticle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeArticles } from "../../Redux/features/HomeSlice";
import AdsComponent from "../AdsComponent/AdsComponent";

function ArticleDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { article } = location.state;
  const HomeArticles = useSelector((state) => state.HomeArticles.articles);
  //select 6 random articles
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const shuffledArticles = shuffleArray([...HomeArticles]);
  const randomSixArticles = shuffledArticles.slice(0, 6);
  /////////////////////////////////////
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
    <div className="articleDetails">
      <div className="details_container">
        <h2 className="title">{article.title}</h2>
        <div className="article_img">
          <img
            src={article.images[0]}
            alt={article.title}
            title={article.title}
            loading="lazy"
            srcSet={`${article.images[0]} 480w`}
          />
          <h6 className="published">
            <AccessTimeIcon className="clock_icon" />
            {formattedDate}
          </h6>
        </div>
        <div className="desc_parag">
          {article.description.map((paragraph, index) => (
            <div key={index} className="singleParag">
              {paragraph.title && (
                <h3 className="inner_title">{paragraph.title}</h3>
              )}
              {paragraph.innerTitle && (
                <h3 className="second_title">{paragraph.innerTitle}</h3>
              )}
              {paragraph.paragraph && (
                <p className="paragraph">{paragraph.paragraph}</p>
              )}
              {paragraph.list.length !== 0 && (
                <table className="spec_table">
                  <tbody>
                    {paragraph.list.map((item, index) => {
                      const colonIndex = item.indexOf(": ");
                      const title =
                        colonIndex !== -1
                          ? item.substring(0, colonIndex + 2)
                          : null;
                      const content =
                        colonIndex !== -1
                          ? item.substring(colonIndex + 2)
                          : item;

                      return (
                        <tr key={index}>
                          {title && <td className="spec_title">{title}</td>}
                          <td className="spec_content">{content}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}

              {paragraph.image && (
                <img
                  className="secondary_image"
                  src={paragraph.image}
                  alt={paragraph.title}
                  title={paragraph.title}
                />
              )}
              {paragraph.videoId && (
                <div className="videoWrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${paragraph.videoId}`}
                    title="YouTube video player"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
        {article.author && (
          <h4 className="author" alt={article.author} title={article.author}>
            {article.author}
          </h4>
        )}
        {article.source && (
          <a
            href={article.source}
            className="source"
            alt={article.source}
            title={article.source}
            rel="nofollow"
          >
            Source
          </a>
        )}
        <AdsComponent />
        <div className="moreArticles">
          <h3 className="more_title">
            MORE ARTICLES <ChevronRightIcon />
          </h3>
          <div className="more_container">
            {randomSixArticles.map((article) => (
              <SingleMoreArticle key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
      <div className="advertisements">
        <AdsComponent />
        <AdsComponent />
        <AdsComponent />
      </div>
    </div>
  );
}

export default ArticleDetails;

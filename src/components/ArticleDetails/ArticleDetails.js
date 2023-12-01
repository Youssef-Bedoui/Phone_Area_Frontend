import React, { Fragment, useEffect } from "react";
import "./ArticleDetails.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SingleMoreArticle from "./SingleMoreArticle/SingleMoreArticle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import {
  fetchArticleById,
  fetchHomeArticles,
} from "../../Redux/features/HomeSlice";
import AdsComponent from "../AdsComponent/AdsComponent";
import { fetchTopBigArticle } from "../../Redux/features/HomeBigSlice";
import { getRightArticleById } from "../../Redux/features/HomeRightSlice";
import { getHomeBottomArticleById } from "../../Redux/features/HomeBottomSlice";
import { fetchTechNewsById } from "../../Redux/features/TechNewsSlice";
import { fetchAppsArticleById } from "../../Redux/features/PhoneAppsSlice";

function ArticleDetails() {
  const dispatch = useDispatch();
  const { id, type } = useParams();
  const trimmedId = id.trim();

  const HomeArticles = useSelector((state) => state.HomeArticles.articles);
  // loading state
  const selectHomeArticlesLoading = useSelector(
    (state) => state.HomeArticles.status === "loading"
  );
  const selectHomeBigLoading = useSelector(
    (state) => state.HomeBig.status === "loading"
  );
  const selectHomeRightLoading = useSelector(
    (state) => state.HomeRight.status === "loading"
  );
  const selectHomeBottomLoading = useSelector(
    (state) => state.HomeBottom.status === "loading"
  );
  const selectHomeNewsLoading = useSelector(
    (state) => state.TechNews.status === "loading"
  );
  const selectPhoneAppsLoading = useSelector(
    (state) => state.PhoneApps.status === "loading"
  );

  // Use the relevant loading selector based on the type
  const isLoading = useSelector(() => {
    switch (type) {
      case "homeArticle":
        return selectHomeArticlesLoading;
      case "mainArticle":
        return selectHomeBigLoading;
      case "rightArticle":
        return selectHomeRightLoading;
      case "bottomArticle":
        return selectHomeBottomLoading;
      case "newsArticle":
        return selectHomeNewsLoading;
      case "appsArticle":
        return selectPhoneAppsLoading;
      default:
        return null;
    }
  });

  const article = useSelector((state) => {
    switch (type) {
      case "homeArticle":
        return state.HomeArticles.selectedArticle;
      case "mainArticle":
        return state.HomeBig.article;
      case "rightArticle":
        return state.HomeRight.selectedArticle;
      case "bottomArticle":
        return state.HomeBottom.selectedArticle;
      case "newsArticle":
        return state.TechNews.selectedArticle;
      case "appsArticle":
        return state.PhoneApps.selectedArticle;
      default:
        return null;
    }
  });

  //fetch article data
  useEffect(() => {
    switch (type) {
      case "homeArticle":
        dispatch(fetchArticleById(trimmedId));
        break;
      case "mainArticle":
        dispatch(fetchTopBigArticle());
        break;
      case "rightArticle":
        dispatch(getRightArticleById(trimmedId));
        break;
      case "bottomArticle":
        dispatch(getHomeBottomArticleById(trimmedId));
        break;
      case "newsArticle":
        dispatch(fetchTechNewsById(trimmedId));
        break;
      case "appsArticle":
        dispatch(fetchAppsArticleById(trimmedId));
        break;
      default:
        break;
    }
  }, [type, dispatch, trimmedId]);

  // select 6 random articles
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
  const formattedDate =
    article.date &&
    new Date(article.date).toLocaleDateString("en-US", {
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
      {isLoading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <Fragment>
          <div className="details_container">
            <h2 className="title">{article?.title}</h2>
            <div className="article_img">
              <img
                src={article?.images}
                alt={article?.title}
                title={article?.title}
                loading="lazy"
                srcSet={`${article?.images} 480w`}
              />
              <h6 className="published">
                <AccessTimeIcon className="clock_icon" />
                {formattedDate}
              </h6>
            </div>
            <div className="desc_parag">
              {article?.description &&
                article.description.map((paragraph, index) => (
                  <div key={index} className="singleParag">
                    {paragraph?.title && (
                      <h3 className="inner_title">{paragraph?.title}</h3>
                    )}
                    {paragraph?.innerTitle && (
                      <h3 className="second_title">{paragraph?.innerTitle}</h3>
                    )}
                    {paragraph?.paragraph && (
                      <p className="paragraph">{paragraph?.paragraph}</p>
                    )}
                    {paragraph?.list && paragraph?.list.length !== 0 && (
                      <table className="spec_table">
                        <tbody>
                          {paragraph?.list.map((item, index) => {
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
                                {title && (
                                  <td className="spec_title">{title}</td>
                                )}
                                <td className="spec_content">{content}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    )}

                    {paragraph?.image && (
                      <img
                        className="secondary_image"
                        src={paragraph?.image}
                        alt={paragraph?.title}
                        title={paragraph?.title}
                      />
                    )}
                    {paragraph?.videoId && (
                      <div className="videoWrapper">
                        <iframe
                          src={`https://www.youtube.com/embed/${paragraph?.videoId}`}
                          title="YouTube video player"
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      </div>
                    )}
                  </div>
                ))}
            </div>
            {article?.author && (
              <h4
                className="author"
                alt={article?.author}
                title={article?.author}
              >
                {article?.author}
              </h4>
            )}
            {article?.source && (
              <a
                href={article?.source}
                className="source"
                alt={article?.source}
                title={article?.source}
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
                  <SingleMoreArticle key={article?.id} article={article} />
                ))}
              </div>
            </div>
          </div>
          <div className="advertisements">
            <AdsComponent />
            <AdsComponent />
            <AdsComponent />
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default ArticleDetails;

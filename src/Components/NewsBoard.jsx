import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      // console.log(article)
      
      // .catch((error) => console.error("Error fetching the news:", error));
  }, [category]);

  return (
    <div className="text-center">
      <h2 className="text-center my-5">
        Latest{" "}
        <span>
          <Badge bg="danger">News</Badge>
        </span>
      </h2>

      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            urlToImage={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;

import { useState, useEffect } from "react";
import useMarvelService from "../../services/MarvelService";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import setContent from "../../utils/setContent";
import "./comicsList.scss";

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(60);
  const [firstLoading, setFirstLoading] = useState(false);
  const [endComics, setEndComics] = useState(false);

  const { getAllComics, proc, setProcess } = useMarvelService();

  useEffect(() => onRequest(offset, true), []);

  const onRequest = (offset, initial) => {
    initial ? setFirstLoading(false) : setFirstLoading(true);
    getAllComics(offset)
      .then(onComicsListLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onComicsListLoading = () => {
    setNewItemLoading(true);
  };

  const onComicsListLoaded = (newComicsList) => {
    let ended = newComicsList.length < 8 ? true : false;
    setComicsList((comicsList) => [...comicsList, ...newComicsList]);
    setFirstLoading(false);
    setNewItemLoading(false);
    setOffset((offset) => offset + 8);
    setEndComics(ended);
  };

  const renderItems = (arr) => {
    const items = arr.map((item, i) => {
      return (
        <li className="comics__item" key={i}>
          <Link to={`/comics/${item.id}`}>
            <img
              src={item.thumbnail}
              alt="ultimate war"
              className="comics__item-img"
            />
            <div className="comics__item-name">{item.title}</div>
            <div className="comics__item-price">{item.price}</div>
          </Link>
        </li>
      );
    });

    return <ul className="comics__grid">{items}</ul>;
  };
  const elements = setContent(
        proc,
        () => renderItems(comicsList),
        "list",
        {},
        firstLoading
  );

  const buttonSpinner = newItemLoading ? (
    <Spinner />
  ) : (
    <button
      className="button button__main button__long"
      disabled={newItemLoading}
      style={{ display: endComics ? "none" : "block" }}
      onClick={() => {
        onComicsListLoading();
        onRequest(offset);
      }}
    >
      <div className="inner">load more</div>
    </button>
  );

  return (
    <div className="comics__list">
      {elements}
      {buttonSpinner}
    </div>
  );
};

export default ComicsList;

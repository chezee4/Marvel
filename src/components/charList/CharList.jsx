import { useState, useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import Spinner from "../spinner/Spinner";
import setContent from "../../utils/setContent";
import useMarvelService from "../../services/MarvelService";
import "./charList.scss";

const CharList = (props) => {
  const [charList, setCharList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(109);
  const [charEnded, setCharEnded] = useState(false);
  const [firstLoading, setFirstLoading] = useState(false);

  const { getAllCharacters, proc, setProcess } = useMarvelService();

  useEffect(() => onRequest(offset, true), []);

  const onRequest = (offset, initial) => {
    initial ? setFirstLoading(false) : setFirstLoading(true);
    getAllCharacters(offset)
      .then(onCharListLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onCharListLoading = () => {
    setNewItemLoading(true);
  };

  const onCharListLoaded = (newCharList) => {
    let ended = newCharList.length < 9 ? true : false;

    setCharList((charList) => [...charList, ...newCharList]);
    setFirstLoading(false);
    setNewItemLoading(false);
    setOffset((offset) => offset + 9);
    setCharEnded(ended);
  };

  const itemRefs = useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current.forEach((item) =>
      item.classList.remove("char__item_selected")
    );
    itemRefs.current[id].classList.add("char__item_selected");
    itemRefs.current[id].focus();
  };

  function renderItems(arr) {
    const items = arr.map((item, i) => {
      const imgStyle = item.thumbnail.includes("image_not_available")
        ? "contain"
        : "cover";

      return (
        <li
          className="char__item"
          tabIndex={0}
          ref={(el) => (itemRefs.current[i] = el)}
          key={item.id}
          onClick={() => {
            props.onCharSelected(item.id);
            focusOnItem(i);
          }}
          onKeyPress={(e) => {
            if (e.key === " " || e.key === "Enter") {
              props.onCharSelected(item.id);
              focusOnItem(i);
            }
          }}
        >
          <img src={item.thumbnail} alt={item.name} style={{objectFit: imgStyle}} />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });
    return <ul className="char__grid">{items}</ul>;
  }

  const elements = useMemo(() => {

    return setContent(
      proc,
      () => renderItems(charList),
      "list",
      {},
      firstLoading
    );
  }, [proc]);

  const buttonSpinner = newItemLoading ? (
    <Spinner />
  ) : (
    <button
      className="button button__main button__long"
      disabled={newItemLoading}
      style={{ display: charEnded ? "none" : "block" }}
      onClick={() => {
        onCharListLoading();
        onRequest(offset);
      }}
    >
      <div className="inner">load more</div>
    </button>
  );

  return (
    <div className="char__list">
      {elements}
      {buttonSpinner}
    </div>
  );
};

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
};

export default CharList;

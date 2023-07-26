import { useState, useCallback } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
} from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import setContent from "../../utils/setContent";
import useMarvelService from "../../services/MarvelService";

import "./charSearchForm.scss";

const CharSearchForm = () => {
  const [char, setChar] = useState(null);
  const [prevName, setPrevName] = useState("");
  const { proc, setProcess, getCharacterByName } = useMarvelService();

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const updateChar = useCallback(
    (name) => {
      if (name !== prevName) {
        setPrevName(name);
        getCharacterByName(name)
          .then(onCharLoaded)
          .then(() => setProcess("confirmed"));
      }
    },
    [prevName]
  );

  const validationData = (text) =>
    !char || !char[0] ? null : char[0].description.includes(text);
  const imgStyle = validationData("image_not_available") ? "unset" : "cover";

  const View = ({ data }) => {
    const { name, id, thumbnail } = data[0];
    return (
      <div className="char__search-answer">
        <img src={thumbnail} alt={name} style={{ objectFit: imgStyle }} />
        <div className="char__search-container">
          <div className="char__search-success">
            There is!
            {validationData("There is no")
              ? "but we haven't added a description yet."
              : null}
            Visit {name} page?
          </div>
          <Link to={`/characters/${id}`} className="button button__secondary">
            <div className="inner">To page</div>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="char__search-form">
      <Formik
        initialValues={{
          charName: "",
        }}
        validationSchema={Yup.object({
          charName: Yup.string().min(3, "Please enter at least 3 letters "),
        })}
        onSubmit={({ charName }) => {
          updateChar(charName);
        }}
      >
        <Form>
          <label className="char__search-label" htmlFor="charName">
            Or find a character by name:
          </label>
          <div className="char__search-wrapper">
            <Field
              id="charName"
              name="charName"
              type="text"
              placeholder="Enter name"
            />
            <button type="submit" className="button button__main">
              <div className="inner">find</div>
            </button>
          </div>
          <FormikErrorMessage
            component="p"
            className="char__search-error"
            name="charName"
          />
        </Form>
      </Formik>
      {setContent(proc, View, "search", char)}
    </div>
  );
};

export default CharSearchForm;

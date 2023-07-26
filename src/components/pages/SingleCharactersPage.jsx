import { useParams, Link } from 'react-router-dom';
import { Helmet } from "react-helmet"
import { useState, useEffect } from 'react';
import setContent from '../../utils/setContent';
import useMarvelService from '../../services/MarvelService';
import AppBanner from "../appBanner/AppBanner";
import './singleComicPage.scss';

const SingleCharactersPage = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState(null);
    const {proc, setProcess, getCharacter} = useMarvelService();

    useEffect(() => {
        updateCharacter()
    }, [id])

    const updateCharacter = () => {
        getCharacter(id)
            .then(onCharacterLoaded)
            .then(() => setProcess("confirmed"));
    }

    const onCharacterLoaded = (character) => {
        setCharacter(character);
    }

    const elements = setContent(proc, View, "comic", character )
    return (
        <>
          <AppBanner/>
          {elements}
        </>
    )
}

const View = ({data}) => {
    const {name, description, thumbnail}  = data;

    return (
        <div className="single-comic">
            <Helmet>
                <meta name="description" content={`${name} hero`} />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
            <Link to="../" className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleCharactersPage;
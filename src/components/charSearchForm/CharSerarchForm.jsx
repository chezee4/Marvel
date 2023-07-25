import {useState, useCallback, useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charSearchForm.scss';

const CharSearchForm = () => {
    const [char, setChar] = useState(null);
    const [prevName, setPrevName] = useState("");
    const {loading, error, getCharacterByName, clearError} = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    }
    

    const updateChar = useCallback((name) => {
        if (name !== prevName) {
            clearError();
            setPrevName(name);
            console.log("dwd");
            getCharacterByName(name)
                .then(onCharLoaded);
        }
    }, [prevName])


    const imgStyle = !char || !char[0] ? null : (char[0].thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') ? {'objectFit' : 'unset'} : {'objectFit' : 'cover'}

    const errorMessage = error ? <div className="char__search-critical-error"><ErrorMessage /></div> : null;
    const results = (!char || loading)? null : char.length > 0 ?
                    <div className="char__search-answer" >
                         <img src={char[0].thumbnail} alt={char[0].name} style={imgStyle}/>
                         <div className='char__search-container'>
                            <div className="char__search-success">There is! { !char || !char[0]? null : char[0].description.includes("There is no")? "but we haven't added a description yet." : null} Visit {char[0].name} page?</div>
                            <Link to={`/characters/${char[0].id}`} className="button button__secondary">
                                <div className="inner">To page</div>
                            </Link>
                        </div>
                    </div> : 
                    <div className="char__search-error">
                        The character was not found. Check the name and try again
                    </div>;
    const spinner = loading ? <Spinner/> : null;

    return (
        <div className="char__search-form">
            <Formik
                initialValues = {{
                    charName: ''
                }}
                validationSchema = {Yup.object({
                    charName: Yup.string().min(3 , "Please enter at least 3 letters ")
                })}
                onSubmit = { ({charName}) => {
                    updateChar(charName);
                }}
            >
                <Form>
                    <label className="char__search-label" htmlFor="charName">Or find a character by name:</label>
                    <div className="char__search-wrapper">
                        <Field 
                            id="charName" 
                            name='charName' 
                            type='text' 
                            placeholder="Enter name"/>
                        <button 
                            type='submit' 
                            className="button button__main"
                            disabled={loading}>
                            <div className="inner">find</div>
                        </button>
                    </div>
                    <FormikErrorMessage component="p" className="char__search-error" name="charName" />
                </Form>
            </Formik>
            {results}
            {errorMessage}
            {spinner}
        </div>
    )
}

export default CharSearchForm;
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Spinner from '../components/spinner/Spinner';
import Skeleton from "../components/skeleton/Skeleton";

const setContent = (proc, Component, option, data, firstLoading) => {
  switch(option){
      case "comic": 
            switch (proc) {
                case "waiting":
                return <Skeleton/>
                case "loading":
                return <Spinner/>
                case "confirmed":
                return <Component data={data}/>
                case "error":
                return <ErrorMessage/>
                default:
                throw new Error("Unexpected process state");
            }
    case "list":
            switch (proc) {
                case "waiting":
                return <Spinner />;
                case "loading":
                return firstLoading ? <Component /> : <Spinner />;
                case "confirmed":
                return <Component />;
                case "error":
                return <ErrorMessage />;
                default:
                throw new Error("Unexpected process state");
            }
    case "search":
                switch (proc) {
                    case "waiting":
                    return null
                    case "loading":
                    return <Spinner/>
                    case "confirmed":
                    return data.length > 0 ?
                                <Component data={data}/>
                                : 
                                <div className="char__search-error">
                                     The character was not found. Check the name and try again
                                </div>
                    case "error":
                    return  <div className="char__search-critical-error"><ErrorMessage /></div>
                    default:
                    throw new Error("Unexpected process state");
                }
  }
};


export default setContent;
import thor from"./thor.gif";
import "./lazyLoading.scss";
const LazyLoading = () => {
    return (

        <div className="lazy-container">
            <img src={thor} alt="thor" />
        </div>
        
    )
}


export default LazyLoading;
import logo from '../../images/not-found-animated.gif';
import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <section className="not-found flex-centered">
            <img className="not-found__logo" src={logo} alt="not found logo" />
            <p className="not-found__body">Sorry, this page was not found..</p>
            <Link to='/'>Go back home</Link>
        </section>
     );
}
 
export default NotFound;
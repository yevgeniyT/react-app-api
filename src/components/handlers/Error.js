const Error = ({message}) => {
    return ( 
        <section className="error">
            <p className="error__body">{message}</p>
        </section>
     );
}
 
export default Error;
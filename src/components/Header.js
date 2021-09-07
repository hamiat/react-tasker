import Button from "./Button"
//for more robust code you can use propTypes (catch errors)
import PropTypes from 'prop-types'

const Header = ({ title, onAdd, showAdd }) => {

    return ( 
        <header className="header">
            <h1>{title}</h1>
           <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
     );
}

Header.defaultProps = {
    title: 'Task Tracker'
}

//title prop should be a string (will warn in the console if you put in something else)
Header.propTypes = {
    title: PropTypes.string.isRequired
}


/* CSS in JSX
const headingStyle = {
    color: 'red',
    border: '2px solid gold'
}
 */

 
export default Header;
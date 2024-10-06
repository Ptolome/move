import PropTypes from 'prop-types'

const TextField = ({label, type, name,value,onChange}) => {
    
 
    
    return (
       
            <label htmlFor={name}>
                {label}
                <input type={type}
                    value={value}
                    name={name}
                    onChange={onChange}/>
            </label>
            
        
    );
}
TextField.propTypes = {
    label:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
}
export default TextField

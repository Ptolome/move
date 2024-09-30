

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
export default TextField

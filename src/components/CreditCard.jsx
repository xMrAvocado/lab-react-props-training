function CreditCard(props){
    let bgColor = props.bgColor;
    let color = props.color;

    let value = props.number;
    value.substr(value.length - 4, 4);

    return(
        <div style={{backgroundColor:`${bgColor}`, color: `${color}`, width:"25vw", borderRadius:"15px", padding:"20px"}}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
            <p>{props.type}</p>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:"0% 20% 0% 20%"}}>
            <p>**** </p>
            <p>**** </p>
            <p>**** </p>
            <p>{value.substr(value.length - 4, 4)}</p>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"50%"}}>
            <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
            <p>{props.bank}</p>
            </div>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard;
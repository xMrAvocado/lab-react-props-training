function IdCard(props) {
  return (
    <div id="cardDiv" style={{border: "1px solid black", display:"flex", flexDirection:"row"}}>
      <img src={props.picture} alt="" width = "200px" height="200px" style={{textAlign: "center", margin:"5px"}}/>
      <div style={{display:"flex", flexDirection:"column", lineHeight:"0"}}>
      <p><span style={{fontWeight:"bolder", margin:"0"}}>First name: </span>{props.firstName}</p>
      <p><span style={{fontWeight:"bolder", margin:"0"}}>Last name: </span>{props.lastName}</p>
      <p><span style={{fontWeight:"bolder", margin:"0"}}>Gender: </span>{props.gender}</p>
      <p><span style={{fontWeight:"bolder", margin:"0"}}>Height: </span>{props.height/100}m</p>
      <p><span style={{fontWeight:"bolder", margin:"0"}}>Birth: </span>{props.birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;

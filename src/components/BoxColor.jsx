function BoxColor(props){
    return(
        <div>
            <p style={{border:"1px solid black", width:"200px", height:"100px", textAlign: "center", backgroundColor:`rgb(${props.r}, ${props.g}, ${props.b})`}}>rgb({props.r}, {props.g}, {props.b})</p>
        </div>
    )
}

export default BoxColor;
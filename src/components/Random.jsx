function Random(props){
    return(
        <div>
            <p style={{border:"1px solid black"}}>Random value between {props.min} and {props.max} is {Math.floor(Math.random() * (props.max - props.min) + props.min)}</p>
        </div>
    )
}

export default Random;
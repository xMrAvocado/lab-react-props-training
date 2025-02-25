function Greetings(props){
    let greet
    if(props.lang === "de"){
        greet = "Hallo";
    }else if(props.lang === "en"){
        greet = "Hello";
    }else if(props.lang === "es"){
        greet = "Hola";
    }else if(props.lang === "fr"){
        greet = "Bonjour";
    }
    return(
        <div>
            <p lang={props.lang} style={{border:"1px solid black"}}>{greet} {props.children}</p>
        </div>
    )
}

export default Greetings;
function handleClick(){
    console.log("Hello");
    
}
function handleMouseOver(){
    console.log("Bye");
    
}

function handleDBClick(){
    console.log("You double click");
    
}
export default function Button(){
    return(
    <div>
    <button onClick={handleClick}>Click me</button>
    <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet.</p>
    <button onDoubleClick={handleDBClick}>double click me</button>
    </div>
    );
}
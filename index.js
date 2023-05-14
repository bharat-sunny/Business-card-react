

// ReactDOM.render(<h1>Hellllllooooo</h1>,document.getElementById("root"))
// function Foo(){
//     return(
//         <h1>Hello This is a Foo</h1>
//     )
// }

// function Bar(){
//     return(
//         <h1>Hello This is a Bar</h1>
//     )
// }

  

// ReactDOM.render( <div>
//                     <Foo/>
//                 </div> ,document.getElementById("root1"))


// ReactDOM.render( <div>
//     <Bar/>
// </div> ,document.getElementById("root"))


function Header(){
    return (
        <header>
            <nav className="nav">
                <img classname = "nav-logo" src="./images.jpeg"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

ReactDOM.render(<Header />, document.getElementById("root"))

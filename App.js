/**
 * <div id="parent">
 *     <div id="child1">
 *        <h1>I'm H1 tag</h1>
 *     </div>
 *     <div id="child2">
 *        <h1>I'm H1 tag</h1>
 *     </div>
 * </div>
 * ReactElement(Object) => HTML(Briwser Understands)
 */


const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child1"},
       [React.createElement("h1",{},"I'm an H1 tag"),
        React.createElement("h2",{},"I'm an H2 tag")
       ] 
    ),
    React.createElement(
        "div",
        {id:"child2"},
       [React.createElement("h1",{},"I'm an H1 tag"),
        React.createElement("h2",{},"I'm an H2 tag")
       ] 
    )]
    
);

console.log(parent);   
const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
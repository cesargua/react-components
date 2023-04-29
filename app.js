// TODO
const { useState } = React;
const GroceryListItem = (props) => {
    const [isDone, setIsDone] = useState(false);
    //const {isHovered, setIsHovered} = useState(false); 
    const style = {
        fontWeight: isDone ? 'bold' : 'normal',
    };

    return (
    <li style={style} onMouseEnter={() => { 
        return setIsDone(true)
    }} 
    onMouseLeave={() => { return setIsDone(false);}} 
    >{props.item} </li>)
}

const GroceryList = (props) => {
    // const onClickGroceryItem = (event) =>{
    //     console.log('clicked!')
    // }
   
    return (
    <ul>
        {props.items.map((item) => (
            <GroceryListItem item={item}/>
        ))}
    </ul>);
};

const App = () => (
    <div>
        <h2>My Grocery List</h2>
        <GroceryList items={['Eggs', 'Milk', 'EggPlant', 'Cucumber', 'kale']}/>
    </div>
);
// <GroceryList GroceryListItem={['Eggs', 'Milk', 'EggPlant', 'Cucumber', 'kale']}/> 

ReactDOM.render(<App />, document.getElementById("app"));
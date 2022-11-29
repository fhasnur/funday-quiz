import React from "react";

class App extends React.Component {
   
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch("https://the-trivia-api.com/api/questions")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Category </h1>  {
                items.map((item) => ( 
                <button key = { item.id } >
                   { item.category }
                </button>
                ))
            }
        </div>
        );
    }
}
   
export default App;
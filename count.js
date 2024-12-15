'use strict';

const addButton = React.createElement;
const displayCount = React.createElement;


class CountButton extends React.Component{

    constructor(props) {
        super(props);
        this.state = { count: 0};
      }

    render(){

        return(
            <div>
                <button onClick={() => this.setState({ count: this.state.count+1 })} style = {{border:'none'}}> 
                👍
                </button>
                <h5>
                    {this.state.count}
                </h5>

            </div>        
        );

    }
}


// const domContainer = document.querySelector('.count_button_container');
// const root = ReactDOM.createRoot(domContainer);
// root.render(addButton(CountButton));


document.querySelectorAll('.count_button_container')
  .forEach(domContainer => {
    const root = ReactDOM.createRoot(domContainer);
    root.render(addButton(CountButton));
  });

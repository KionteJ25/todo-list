import React, { Component } from "react";
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  min-height: 600px;
  background: #161a2b;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;

  .items {
    margin: 32px 0;
    color: #fff;
    font-size: 24px
  };

  .list {
    color: pink;
    margin-bottom: 32px;
  };

  .itembar {
    padding: 14px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid #5d0cff;
    outline: none;
    width: 320px;
    background: transparent;
    color: #fff;
  }

  .add {
    /* styling for add button */
  };

  .delete {
    /*styling for delete button*/
  };
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value
    });
  }

  addItem() {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem: ""
    });
  }
  deleteItem(id) {
    //copy of current list of items
    const list = [...this.state.list];
    //filter out item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div className="App">
        <Container>
        <div>
          <p className='items'>Add an Item...</p>
          <br />
          <input className='itembar'
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button className='add' onClick={() => this.addItem()}>
            Add
          </button>
          <br />
          <ul>
            {this.state.list.map((item) => {
              return (
                <li className='list' key={item.id}>
                  {item.value}
                  <button className='delete' onClick={() => this.deleteItem(item.id)}>
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        </Container>
      </div>
    );
  }
}

export default App;
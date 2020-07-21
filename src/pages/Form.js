import React, { Component } from "react";
import AddHabit from "../components/AddHabit";
// import HabitList from "../components/HabitList";

import axios from 'axios';
import "./style.css";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

class Form extends Component {


  state = {
    ThisItem: '',
    HabitList: [
      {
        text: 'Display to do item',
        done: true,
        // score: 0
      }
    ]
  };

  updateHabitItem = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }



  saveHabitItem = (event) => {

    event.preventDefault();

    const newHabit = {
      text: this.state.ThisItem,
      done: false,
      // score: 0
    }

    axios
      .post("/HabitNexus", newHabit)
      .catch((error) => console.log(error));


    this.setState({
      HabitList: this.state.HabitList.concat(newHabit),
      ThisItem: ''
    })

  }

  markAsDone = (event) => {
    const index = event.target.value;
    let ThisItem = this.state.HabitList[index];
    ThisItem.done = !ThisItem.done;
    // let score = this.state.score;

    this.setState({
      HabitList: this.state.HabitList
    })
  }


  render() {
    return (
      <div >
        <NavBar />
        <Header />
        <Wrapper>

          <div className="container fixBottom">

            <h1>Add Habit</h1>
            <AddHabit
              ThisItem={this.state.ThisItem}
              updateHabitItem={this.updateHabitItem}
              saveHabitItem={this.saveHabitItem}
            />

            {/* <HabitList
          HabitList={this.state.HabitList}
          markAsDone={this.markAsDone}
        /> */}
          </div>
        </Wrapper>
        <Footer />
      </div>
    );
  }

}

export default Form;
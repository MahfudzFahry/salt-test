import logo from "./logo.svg";
import React from "react";
import "./App.css";
export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      fishbash: "",
      value:"",
      word:"",
    };
  }
  FishBash(n) {
      n = this.state.fishbash;
    for (let i = 1; i <=n ; i++) {
      let str = "";

      if (i % 3 === 0) str += "Fish ";
      if (i % 5 === 0) str += "Bash";
      if (str === "") str = i;

      console.log(str);
    }
  }
  sortASC(){
    let str = this.state.value;
    let substrings = str.split(',');
      var done = false;
      while (!done) {
        done = true;
        for (var i = 1; i < substrings.length; i += 1) {
          if (substrings[i - 1] < substrings[i]) {
            done = false;
            var tmp = substrings[i - 1];
            substrings[i - 1] = substrings[i];
            substrings[i] = tmp;
          }
        }
      }
      alert(substrings);
    
      return substrings;
    
  }
  sortDSC(){
    let str = this.state.value;
    let substrings = str.split(',');
      var done = false;
      while (!done) {
        done = true;
        for (var i = 1; i < substrings.length; i += 1) {
          if (substrings[i - 1] > substrings[i]) {
            done = false;
            var tmp = substrings[i - 1];
            substrings[i - 1] = substrings[i];
            substrings[i] = tmp;
          }
        }
      }
      alert(substrings);
    
      return substrings;
    
  }

  reverseString(word) {
    var word = this.state.word;
    var split = word.split("");
    var reverse = split.reverse("");
    var joined = reverse.join("");
    alert(joined.toLowerCase().replace(/[^0-9a-z]/gi, '') == word.toLowerCase().replace(/[^0-9a-z]/gi, ''));
   }
   

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Fish and Bash  (output ada di console)</p>
          <div className="container">
            <input type={"tel"}
              placeholder="masukkan jumlah n"
              onChange={(val) =>
                this.setState({
                  ...this.state,
                  fishbash: val.target.value,
                })
              }
            ></input>
            <button onClick={() => this.FishBash()}>proses</button>
          </div>
          <p>sorting array besar ke kecil</p>
          <div className="container">
            <input placeholder="contoh 1,2,3,4,5 " onChange={(val) =>
                this.setState({
                  ...this.state,
                  value: val.target.value,
                })
              }></input>
            <button onClick={() => this.sortASC()}>Ascending</button>
            <button onClick={() => this.sortDSC()}>Descending</button>
          </div>
          <p>true false string sama dengan reverse string</p>
          <div className="container">
            <input placeholder="masukkan kata" onChange={(val) =>
                this.setState({
                  ...this.state,
                  word: val.target.value,
                })
              }></input>
            <button onClick={() => this.reverseString()}>proses</button>
          </div>
        </header>
      </div>
    );
  }
}

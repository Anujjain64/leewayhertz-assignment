import React from 'react';
import './App.css';
import MongoClient from 'mongodb';


class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	    name: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    console.log('Student name: ' + this.state.name);
    event.preventDefault();
    


var uri = "mongodb://foo:bar@cluster0-shard-00-00.3qfku.mongodb.net:27017,cluster0-shard-00-01.3qfku.mongodb.net:27017,cluster0-shard-00-02.3qfku.mongodb.net:27017/ssl=true&replicaSet=atlas-ag2mlw-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EssayForm;

import React, {Component, useState} from "react";

class KDhome extends Component {
    state = {
        pokaz:false
    };

    pokazAlert = ()=>{
        this.setState({
            pokaz: true
        })
    }

    ukryjAlert = () =>{
        this.setState({
            pokaz: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.state.pokaz ? <div className="alert alert-primary" role="alert">
                        This is a danger alert—check it out!
                    </div> : null }
                    <button type="button" class="close" onClick={this.pokazAlert}>Pokaz</button>
                    <button type="button" class="close" onClick={this.ukryjAlert}>Schowaj</button>
                </div>
            </React.Fragment>
        )
    }
}




export default KDhome;
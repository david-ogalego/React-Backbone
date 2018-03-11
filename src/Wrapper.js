import React, { Component } from 'react';
import BackboneView from './BackboneView';

export default class Wrapper extends Component {
    constructor(props) {
        super(props);
    }
  
    render(){
        return (<div ref={(container) => this.container = container}></div>);
    }
    
    componentDidMount() {
        new BackboneView({
            el: this.container
        }).render();    
    }
}
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
        this.renderBackboneView();  
    }

    componentDidUpdate() {
        // We need to rerender the view when clicking in new Link
        // Because when we click only calling the render method
        this.renderBackboneView();
    }

    renderBackboneView() {
        new BackboneView({
            el: this.container,
            idView: this.props.idView
        }).render();
    }
}
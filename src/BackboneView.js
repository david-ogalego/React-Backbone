import Backbone from 'backbone';

export default Backbone.View.extend({
    events: {
        'click .renderer': 'render'
    },

    initialize(props) {
        this.idView = props.idView;
    },
  
    render: function () {
        this.$el.html(`<p>View ${this.idView} rendered at ${ (new Date()).toString() }</p>
            <button class='renderer'>click on me to re-render!</button>`);
        console.log('bbview updated');
        return this;
    }
});

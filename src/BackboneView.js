import Backbone from 'backbone';

export default Backbone.View.extend({
    events: {
        'click .renderer': 'render'
    },
  
    render: function () {
        this.$el.html(`<p>rendered at ${ (new Date()).toString() }</p>
            <button class='renderer'>click on me to re-render!</button>`);
        console.log('bbview updated');
        return this;
    }
});


var ShelfView = Backbone.View.extend({
  tagName: "tr",
  initialize: function() {
  },
  render: function() {
    this.$el.html(_.template($("#shelf-template").html(), (this.model.toJSON())));
    return this;
  }
});

var Shelf = Backbone.Model.extend({
  defaults: function() {
  },
  initialize: function(attrs, options) {
  },
  validate: function(attrs) {
  }
});

var ShelfCollection = Backbone.Collection.extend({
  model: Shelf
});

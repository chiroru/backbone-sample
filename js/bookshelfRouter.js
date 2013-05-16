var BookshelfRouter = Backbone.Router.extend({
  routes: {
    "home": "homeTab",
    "shelfs": "shelfTab",
    "books": "bookTab"
  },

  homeTab: function() {
    var $t = jQuery("#tabs").tabs({active: 1});
  },
  shelfTab: function() {
    var $t = jQuery("#tabs").tabs({active: 2});
  },
  bookTab: function() {
    var $t = jQuery("#tabs").tabs({active: 3});
  }
});

var BookshelfRouter = Backbone.Router.extend({
  routes: {
    "home": "homeTab",
    "shelfs": "shelfTab",
    "books": "bookTab"
  },

  homeTab: function() {
    console.log("route home tag");
    jQuery("#home").trigger("click");
  },
  shelfTab: function() {
    console.log("route shelf tag");
    jQuery("#shelfs").trigger("click");
  },
  bookTab: function() {
    console.log("route book tag");
    jQuery("#books").trigger("click");
  }
});

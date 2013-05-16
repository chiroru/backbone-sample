jQuery(document).ready(function() {
  var shelfTab = new ShelfTabView();
  var bookshelfRouter = new BookshelfRouter();
  var result = Backbone.history.start();
  console.log(result);
});

var ShelfTabView = Backbone.View.extend({
  el: $("#shelfs"),
  collection: new ShelfCollection(),
  registFormOpen: false,
  events: {
    "click #shelf_regist_navi": "showRegistForm"
  },
  initialize: function() {
    this.collection.add(new Shelf({id:"1", name:"name1", description:"desc 1"}));
    this.collection.add(new Shelf({id:"2", name:"name2", description:"desc 2"}));
    this.collection.add(new Shelf({id:"3", name:"name3", description:"desc 3"}));
    this.render();
  },
  render: function() {
    this.collection.each(function(shelf) {
      console.log(shelf);
      var v = new ShelfView({model:shelf});
      console.log(v.render().el);
      this.$("#shelf_list").append(v.render().el);
    }, this);
  },
  showRegistForm: function() {
    if (!this.registFormOpen) {
      this.registFormOpen = true;
      this.$("#regist_form").show();
    } else {
      this.registFormOpen = false;
      this.$("#regist_form").hide();
    };
  }
});

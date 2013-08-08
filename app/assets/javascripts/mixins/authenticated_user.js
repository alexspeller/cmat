
var AuthenticatedUser = Ember.Mixin.create({

  beforeModel: function(){
    if(this.controllerFor('currentUser').get('isSignedIn')){
      this.transitionTo('index');
    }
  }

});

module.exports = AuthenticatedUser;
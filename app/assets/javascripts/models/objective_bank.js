var ModelBase = require('./model_base');

var ObjectiveBank = Ember.Object.extend({

});

ObjectiveBank.reopenClass({
  findAll: function(){
    var banks = Em.A();
    return $.getJSON('https://oki-dev.mit.edu/handcar/services/learning/objectivebanks').then(function(response){
      console.log(response);
      console.log(response.data);
    });
  }
});

// var adapter = DS.Adapter.extend({
//   find: function(store, type, id) {
//     $.getJSON('https://oki-dev.mit.edu/handcar/services/learning/objectivebanks/'+id).then( function(json) {
//       store.load(type, json);
//     });
//   },
//   findQuery: function(store, type, query, recordArray) {
//     // $.getJSON('https://oki-dev.mit.edu/handcar/services/learning/objectivebanks').then( function(objectivebanks) {
//     //   //console.log(objectivebanks);
//     //   objectivebanks.forEach(function(objectivebank){
//     //     //console.log(objectivebank);
//     //   });

//     //     console.log(adapter);
//     //     console.log(since);
//     //     store.load(type, objectivebank[0]);
//       adapter = this;

//       return $.getJSON('https://oki-dev.mit.edu/handcar/services/learning/objectivebanks').then(function(json){
//         adapter.didFindQuery(store, type, json, recordArray);
//       });
//   }
// });

// adapter.registerTransform('description', {
//   serialize: function(value) {
//     return Em.isNone(value) ? {} : value;
//   },

//   deserialize: function(value) {
//     return Em.isNone(value) ? {} : value;
//   }
// });

// adapter.registerTransform('displayName', {
//   serialize: function(value) {
//     return Em.isNone(value) ? {} : value;
//   },

//   deserialize: function(value) {
//     return Em.isNone(value) ? {} : value;
//   }
// });

// App.Store.registerAdapter('App.ObjectiveBank', adapter);

module.exports = ObjectiveBank;

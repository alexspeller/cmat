var ModelBase = require('./model_base');

var ObjectiveBank = ModelBase.extend({
  current: DS.attr('boolean'),
  genusTypeId: DS.attr('string'),
  description: DS.attr('description'),
  displayName: DS.attr('displayName')
});

var adapter = DS.Adapter.extend({
  find: function(store, type, id) {
    $.getJSON('https://oki-dev.mit.edu/handcar/services/learning/objectivebanks/'+id).then( function(json) {
      store.load(type, json);
    });
  },
  findQuery: function(store, type, query, recordArray) {
    // $.getJSON('https://oki-dev.mit.edu/handcar/services/learning/objectivebanks').then( function(objectivebanks) {
    //   //console.log(objectivebanks);
    //   objectivebanks.forEach(function(objectivebank){
    //     //console.log(objectivebank);
    //   });

    //     console.log(adapter);
    //     console.log(since);
    //     store.load(type, objectivebank[0]);
      adapter = this;

      return $.getJSON('https://oki-dev.mit.edu/handcar/services/learning/objectivebanks').then(function(json){
        console.log(json);
        console.log(json.data);
        adapter.didFindQuery(store, type, json.data, recordArray);
      });
  }
});

adapter.registerTransform('description', {
  serialize: function(value) {
    return Em.isNone(value) ? {} : value;
  },

  deserialize: function(value) {
    return Em.isNone(value) ? {} : value;
  }
});

adapter.registerTransform('displayName', {
  serialize: function(value) {
    return Em.isNone(value) ? {} : value;
  },

  deserialize: function(value) {
    return Em.isNone(value) ? {} : value;
  }
});

App.Store.registerAdapter('App.ObjectiveBank', adapter);

module.exports = ObjectiveBank;

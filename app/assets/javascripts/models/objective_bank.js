var ModelBase = require('./model_base');

var ObjectiveBank = ModelBase.extend({
  current: DS.attr('boolean'),
  genusTypeId: DS.attr('string'),
  description: DS.attr('description'),
  displayName: DS.attr('displayName')
});

var adapter = DS.Adapter.extend({
  find: function(store, type, id) {
    return $.getJSON('https://oki-dev.mit.edu/handcar/services/learning/objectivebanks/'+id).then( function(json) {
      store.load(type, json);
    });
  },
  findQuery: function(store, type, query, recordArray) {
    adapter = this;
    console.log(recordArray);
    $.getJSON('https://oki-dev.mit.edu/handcar/services/learning/objectivebanks').then(function(response){
      console.log(response);
      var arr = Em.A();
      response.forEach(function (bank) {
        console.log('bank:');
        console.log(bank);

        arr.push( App.ObjectiveBank.createRecord(bank) );
        console.log('==============');


      });
      recordArray.load({'objectivebanks': arr, type: type});
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

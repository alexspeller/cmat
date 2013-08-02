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


      return $.getJSON('https://oki-dev.mit.edu/handcar/services/learning/objectivebanks').then(function(response){
        var banks = Em.A();
        console.log(response);
        response.forEach(function (bank) {
          banks.pushObject(App.ObjectiveBank.createRecord(bank));
        });
        console.log(banks);
        return banks;
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

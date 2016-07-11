import Ember from 'ember';

export default Ember.Component.extend({
    _comments: [],

    _initalize: Ember.on('init', function() {
        var _settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://jsonplaceholder.typicode.com/posts/1/comments",
            "method": "GET"
        };
        var _this = this;
        Ember.$.ajax(_settings).done(function(response) {
            _this.set('_comments',response);
        });
    })
});
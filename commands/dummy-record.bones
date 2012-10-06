command = Bones.Command.extend();

command.description = 'Create dummy web records';

command.prototype.initialize = function(plugin) {
    var model = plugin.models['Record'];

    // generate a bunch of fake records

    new model().save({
        node_id: '127.0.0.1',
        check_id: 'httpgooglecom',
        timestamp: 1
    }, {
        success: function(_model, res) {
            console.log('success');
        },
        error: function(_model, err) {
            console.log('error');
            console.log(err);
        }
    });
    new model().save({
        node_id: '127.0.0.1',
        check_id: 'httpgooglecom',
        timestamp: 1000
    }, {
        success: function(_model, res) {
            console.log('success');
        },
        error: function(_model, err) {
            console.log('error');
            console.log(err);
        }
    });
    new model().save({
        node_id: '127.0.0.1',
        check_id: 'httpgooglecom',
        timestamp: 100000
    }, {
        success: function(_model, res) {
            console.log('success');
        },
        error: function(_model, err) {
            console.log('error');
            console.log(err);
        }
    });
    new model().save({
        node_id: '8.8.8.8',
        check_id: 'httpgooglecom',
        timestamp: 1
    }, {
        success: function(_model, res) {
            console.log('success');
        },
        error: function(_model, err) {
            console.log('error');
            console.log(err);
        }
    });
    new model().save({
        node_id: '8.8.8.8',
        check_id: 'httpgooglecom',
        timestamp: 1000
    }, {
        success: function(_model, res) {
            console.log('success');
        },
        error: function(_model, err) {
            console.log('error');
            console.log(err);
        }
    });
    new model().save({
        node_id: '8.8.8.8',
        check_id: 'httpgooglecom',
        timestamp: 100000
    }, {
        success: function(_model, res) {
            console.log('success');
        },
        error: function(_model, err) {
            console.log('error');
            console.log(err);
        }
    });
    new model().save({
        node_id: '127.0.0.1',
        check_id: 'httpbaiducom',
        timestamp: 1
    }, {
        success: function(_model, res) {
            console.log('success');
        },
        error: function(_model, err) {
            console.log('error');
            console.log(err);
        }
    });
    new model().save({
        node_id: '127.0.0.1',
        check_id: 'httpbaiducom',
        timestamp: 1000
    }, {
        success: function(_model, res) {
            console.log('success');
        },
        error: function(_model, err) {
            console.log('error');
            console.log(err);
        }
    });
    new model().save({
        node_id: '127.0.0.1',
        check_id: 'httpbaiducom',
        timestamp: 100000
    }, {
        success: function(_model, res) {
            console.log('success');
        },
        error: function(_model, err) {
            console.log('error');
            console.log(err);
        }
    });
    new model().save({
        node_id: '8.8.8.8',
        check_id: 'httpbaiducom',
        timestamp: 1
    }, {
        success: function(_model, res) {
            console.log('success');
        },
        error: function(_model, err) {
            console.log('error');
            console.log(err);
        }
    });
    new model().save({
        node_id: '8.8.8.8',
        check_id: 'httpbaiducom',
        timestamp: 1000
    }, {
        success: function(_model, res) {
            console.log('success');
        },
        error: function(_model, err) {
            console.log('error');
            console.log(err);
        }
    });
    new model().save({
        node_id: '8.8.8.8',
        check_id: 'httpbaiducom',
        timestamp: 100000
    }, {
        success: function(_model, res) {
            console.log('success');
        },
        error: function(_model, err) {
            console.log('error');
            console.log(err);
        }
    });
};
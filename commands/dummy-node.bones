command = Bones.Command.extend();

command.description = 'Create a dummy web node';

command.prototype.initialize = function(plugin) {
    var model = plugin.models['Node'];

    new model().save({
        ip: '127.0.0.1',
        status: 'enabled',
        public_key: 'abcdef123456789',
        continent_code: 'AS',
        country_code: 'CN',
        city: 'Shanghai',
        created_date: new Date().getTime()
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
        ip: '8.8.8.8',
        status: 'enabled',
        public_key: 'abcdef123456789',
        continent_code: 'NA',
        country_code: 'US',
        city: 'Californayeah',
        created_date: new Date().getTime()
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

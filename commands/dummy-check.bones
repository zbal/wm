command = Bones.Command.extend();

command.description = 'Create a dummy web check';

command.prototype.initialize = function(plugin) {
    var model = plugin.models['Check'];
    new model().save({
        scheme: 'http',
        domain: 'google.com',
        page: '/',
        code: [ 200 ],
        text: 'google',
        timeout: 300,
        frequency: 5,
        source: [
            {
                continent: 'AS',
                country: 'CN'
            }
        ]
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

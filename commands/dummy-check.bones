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
        sources: [
            {
                continent_code: 'NA',
                country_code: 'US'
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

    new model().save({
        scheme: 'http',
        domain: 'baidu.com',
        page: '/',
        code: [ 200 ],
        text: 'baidu',
        timeout: 300,
        frequency: 5,
        sources: [
            {
                continent_code: 'AS',
                country_code: 'CN'
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

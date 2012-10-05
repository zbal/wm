var path = require('path');

Bones.Command.options['files'] = {
    'title': 'files=[path]',
    'description': 'Path to files directory.',
    'default': function(options, config) {
        return path.join(process.cwd(), 'files');
    }
};

Bones.Command.options['secret'] = {
    'title': 'secret=[path]',
    'description': 'Path to secret key file.',
    'default': function(options, config) {
        var files = config ? config.files : Bones.Command.options['files'].default();
        return path.join(files, 'secret.json');
    }
};

/**
 * Callback used to initialize the server for certain commands.
 */
function bootstrapCommand(parent, plugin, callback) {
    parent.call(this, plugin, function() {
        this.servers = {};
        for (var server in plugin.servers) {
            this.servers[server] = new plugin.servers[server](plugin);
        }
        callback();
    });
};

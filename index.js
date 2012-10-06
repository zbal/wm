#!/usr/bin/env node

var Bones = require('bones');

// Load web monit
require('wm-backend');
require('wm-check');
require('wm-node');
require('wm-record');
require('wm-schedule');

Bones.load(__dirname);

if (!module.parent) {
    Bones.start();
}
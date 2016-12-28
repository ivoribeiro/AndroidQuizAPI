'use strict';

// enable developer mode
exports.default = {
    general: api => {
        return {
            developmentMode: true,
        }
    }
};

// disable developer mode on production server
exports.production = {
    general: api => {
        return {
            developmentMode: false
        }
    }
};
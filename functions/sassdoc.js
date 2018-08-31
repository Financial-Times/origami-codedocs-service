'use strict';

const getResponse = require('../lib/codedocs-response');
const Sassdoc = require('../lib/sassdoc');

exports.handler = async (event) => {
    const componentKey = decodeURIComponent(event.pathParameters.componentId);
    return await getResponse(componentKey, new Sassdoc);
};

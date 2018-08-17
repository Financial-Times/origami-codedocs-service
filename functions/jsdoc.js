"use strict";

const getResponse = require('../lib/codedocs-response');
const Jsdoc = require('../lib/jsdoc');

exports.handler = async (event, context) => {
    const componentKey = decodeURIComponent(event.pathParameters.componentId);
    return await getResponse(componentKey, new Jsdoc);
}

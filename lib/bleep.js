/*
 * bleep
 * https://github.com/danielchatfield/node-bleep
 *
 * Copyright (c) 2013 Daniel Chatfield
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(pipe) {
  pipe = pipe || require('process').stdout.write;
  return pipe('\x07');
}

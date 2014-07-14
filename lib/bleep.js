/*
 * bleep
 * https://github.com/danielchatfield/node-bleep
 *
 * Copyright (c) 2013 Daniel Chatfield
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(pipe) {
  if (pipe === undefined) {
      return process.stdout.write('\x07');
  }
  return pipe('\x07');
};

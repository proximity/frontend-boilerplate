'use strict';

import {argv} from 'yargs';

global.isProduction = argv.production || false;

require('./gulp');

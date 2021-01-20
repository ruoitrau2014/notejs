require('dotenv').config(); 

import { IndexRoute } from '@modules/index';
import App from './app';
import { validateEnv } from '@core/utils';
const routes=[new IndexRoute()];
const app=new App(routes);
validateEnv();
app.listen();
console.log("hello");
require('dotenv').config(); 

import { IndexRoute } from '@modules/index';
import App from './app';
import { validateEnv } from '@core/utils';
import UsersRoute from '@modules/users/users.route';
const routes=[new IndexRoute(), new UsersRoute()];
const app=new App(routes);
validateEnv();
app.listen();
console.log("hello");
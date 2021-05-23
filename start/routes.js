'use strict'


/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('try')

Route.on('/').render('homePage')
Route.on('/homePage').render('homePage')
Route.on('/standard').render('standard')
// Route.group(()=>{
    Route.on('/standard/stack').render('stack')
    Route.on('/standard/queue').render('queue')
    Route.on('/standard/pqueue').render('pqueue')
    Route.on('/standard/lList').render('lList')
// }).prefix('/standard')
Route.post('/executeCode', 'ExecuteCodeController.executeCode') // controller name and the method


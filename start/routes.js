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

Route.group(()=>{
    Route.on('/').render('Standard/standard')
    Route.on('/Stack').render('Standard/stackS')
    Route.on('/Queue').render('Standard/queueS')
    Route.on('/PrioirityQueue').render('Standard/pqueueS')
    Route.on('/LinkedList').render('Standard/lListS')
    Route.on('/Tree').render('Standard/treeS')
}).prefix('/Standard')

Route.group(()=>{
    Route.on('/').render('UserDef/userDef')
    Route.on('/Stack').render('UserDef/stackU')

}).prefix('/UserDefined')


Route.post('/executeCode', 'ExecuteCodeController.executeCode3') // controller name and the method


/************************************************************/
/**
    Create variables which will be used across functions
*/

let logic = null;
let visual = null;

/************************************************************/
/**
    Creates objects of Logic() and Visual()    
    Calls the setup function of logic and visual objects
    Creates Event listeners
*/

function setup(){
    logic = new Logic();
    visual = new Visual();

    logic.setup();
    visual.setup();

    create_event_listeners();
}

/************************************************************/
/**
    Calls the update function of logic and visual
*/

function update(){}

/************************************************************/
/**
    Calls the simulate function of logic and visual
*/

function simulate(){}

/************************************************************/
/**
    Calls the simulate function of logic and visual
*/

function create_event_listeners(){}

/************************************************************/
/**
    Call the setup function 
*/

$('document').ready(function () { setup(); })
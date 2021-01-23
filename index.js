/************************************************************/
/**
    Create variables which will be used across functions
*/

let random_walker = null;
let visual = null;

let walk_length = 100;
let count = 0;
let simulation_running = false;

Array.prototype.last = function(){
    return this[this.length - 1]
}

/************************************************************/
/**
    Creates objects of Logic() and Visual()    
    Calls the setup function of logic and visual objects
    Creates Event listeners
*/

function setup(){
    random_walker = new Random_Walker();
    visual = new Visual('canvas');

    random_walker.setup();
    visual.setup(random_walker);

    create_event_listeners();
}

/************************************************************/
/**
    Calls the update function of logic and visual
*/

function update(){
    random_walker.update();
    visual.update();
}

/************************************************************/
/**
    Calls the simulate function of logic and visual
*/

function simulate(){
    random_walker.simulate();
    visual.simulate();
}

/************************************************************/
/**
    Calls the simulate function of logic and visual
*/

function create_event_listeners(){
    d3.select('#move').on('click', function(){
        simulation_running = true;
        step();
    })

    d3.select('#clear').on('click', function(){
        simulation_running = false;
        setTimeout( function(){ update(); }, 100 )
    })
}

/************************************************************/
/**
    Timer
*/

function step(){
    simulate();
    count++;
    if(count < walk_length & simulation_running){ window.requestAnimationFrame(step); }
    else{ count = 0; }
}

/************************************************************/
/**
    Call the setup function 
*/

$('document').ready(function () {
    setup(); 
    update();    
})
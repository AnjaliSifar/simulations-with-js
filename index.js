/************************************************************/
/**
    Create variables which will be used across functions
*/

let random_walker = null;
let visual = null;

let walk_length = 5;
let count = 0;
let simulation_running = false;

let timer = null;

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
    console.log("random walker initialised",random_walker)
    console.log("directions of random walker",random_walker.directions)
    visual = new Visual('canvas');

    console.log("visual initialised",visual)
    

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
        if(simulation_running == false){
            simulation_running = true;
// this "step " is a callback function to be passed into the timer API,
// such that the timer invokes it repeatedly until the timer is stopped. 
            timer = d3.timer(step);
        }
    })

    d3.select('#clear').on('click', function(){
        timer.stop();
        simulation_running = false;
        update();
    })
}

/************************************************************/
/**
    Timer
*/

function step(){
    simulate();
    count++;
    if(count >= walk_length){ timer.stop(); simulation_running = false; count = 0; }
}

/************************************************************/
/**
    Call the setup function 
*/

$('document').ready(function () {
    setup(); 
    update();    
})
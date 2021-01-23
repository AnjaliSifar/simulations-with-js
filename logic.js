/************************************************************/
/**
    Random_Walker class
*/

function Random_Walker(){
    this.directions = [ [0,1], [1,0], [0,-1], [-1,0] ];
}

/************************************************************/
/**
    Random_Walker class - setup()
*/

Random_Walker.prototype.setup = function(){}

/************************************************************/
/**
    Random_Walker class - update()
*/

Random_Walker.prototype.update = function(){
    this.path = [];
}

/************************************************************/
/**
    Random_Walker class - simulate()
*/

Random_Walker.prototype.simulate = function(){
    let direction_to_move = this.directions[ math.randomInt(4) ];
    this.path.push(direction_to_move);
}
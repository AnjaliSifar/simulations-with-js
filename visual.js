/************************************************************/
/**
    Visual class
*/

function Visual(svg_id){
    this.svg = d3.select('#'+svg_id);
}

/************************************************************/
/**
    Visual class - setup()
*/

Visual.prototype.setup = function(random_walker){
    this.random_walker = random_walker;

    this.svg.attrs({ 'viewBox': '0 0 100 100' });
    this.origin = this.svg.append('g').attrs({ 'transform': 'translate(50,50)' });
    this.path = this.origin.append('g');
    this.walker = this.origin.append('circle').attrs({ 'r': 0.8 }).styles({ 'fill': 'white', 'stroke': 'orange', 'stroke-width': 0.6 });
}

/************************************************************/
/**
    Visual class - update()
*/

Visual.prototype.update = function(){
    this.cx = 0;
    this.cy = 0;

    this.walker.attrs({ 'cx': this.cx, 'cy': this.cy });
    this.path.selectAll('line').remove();
}

/************************************************************/
/**
    Visual class - simulate()
*/

Visual.prototype.simulate = function(){
    let direction = this.random_walker.path.last();
    let new_cx = this.cx + 2*direction[0];
    let new_cy = this.cy + 2*direction[1];

    this.path.append('line')
        .attrs({ x1: this.cx, y1: this.cy, x2: new_cx, y2: new_cy })
        .styles({ 'stroke': 'orange', 'stroke-width': 0.6 });
    
    this.cx = new_cx;    
    this.cy = new_cy;    

    this.walker.attrs({ cx: this.cx, cy: this.cy });
}
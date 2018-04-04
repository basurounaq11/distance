var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------
    var dx = Math.pow(p1.x - p2.x, 2)
    var dy = Math.pow(p1.y - p2.y, 2)
    var dist = Math.pow(dx + dy, 0.5)
    return dist;    
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    for(var i=0; i<data.length; i++){
        data[i].distance = exercise.distance(data[i], newPoint);
    }
    return data;
};

// find k closest points
exercise.findClosest = function(k,data){
    //-------------------
    //---- Your Code ----
    //------------------- 
    data.sort(function(a, b){
        return a.distance - b.distance;
    });

    return data.slice(0,k);    
};

module.exports = exercise;

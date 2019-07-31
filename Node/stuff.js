function counter(arr) {
    if(arguments.length===0){
        return 0;
    }
    return "有"+arr.length+"个元素";
}

function add(a,b){
    return `和为:${a+b}`;
}

const pi = 3.14;

// module.exports.counter= counter;
// module.exports.add= add;
// module.exports.pi= pi;

module.exports={
    counter:counter,
    add: add,
    pi:pi
}

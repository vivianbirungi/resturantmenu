var list = [{
    "exerciseName": "4 Point Kneeling Lumbar",
    "Params": [{
        "param": "Sets",
        "childParam": "1"
    }, {
        "param": "Reps",
        "childParam": "1"
    }]
}, {
    "exerciseName": "Side Flexion",
    "Params": [{
        "param": "Sets",
        "childParam": "1"
    }, {
        "param": "Reps",
        "childParam": "1"
    }]
}];

var html = list.map(function (element) {
  return '<li  onclick= "formatParams(element.Params)">' + element.exerciseName + ', ' +
    + '</li>';  
}).join('');

document.getElementById('target').innerHTML = html;


function formatParams(params) {
    console.log(params)
//   return params.map(function (param) {
//     return param.param + ':' + param.childParam;
//   }).join(', ');
}
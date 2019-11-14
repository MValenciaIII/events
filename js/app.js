//3 Methods of Attaching Listeners


//HTML attritube ,onclick, is bad practice and should not be used..
//"onblur" is a method.


//onblur (Traditional Event Handler)
// var username = document.getElementById('username')
// username.onblur = function () {
//     console.log('hello')
// }


//event listener (Event Listener)
// element.addEventListenner('event',functionName [,Boolean](optional));
var username = document.getElementById('username');
username.addEventListener('blur',function () {
        console.log('hello')
    })


//queryselectorall uses a css syntax to get elements.

var links = document.querySelectorAll('.links a');
//More effiecient.
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault();
        var confirm = window.confirm('Do you wish to leave?');
        if (confirm) {
            var href = event.target.getAttribute('href');
            window.location = href;
        } else {
            console.log('No I wish to stay.')
        }
    });
    
}
// console.log(links);
//NOT Effiecient but works.
// links[0].addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log('hello 1')
// });
// links[1].addEventListener('click', function (event) {
//     console.log('hello 1')
// });
// links[2].addEventListener('click', function (event) {
//     console.log('hello 1')
// });
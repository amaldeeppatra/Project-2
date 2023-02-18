// for (var i=0; i<5; i++){
//     $('button')[i].addEventListener('click', function(){
//         var a = $('input').val();
//         $('ul').append('<input type="checkbox" id="check">').append(a).append('<br>');
//     });

// }

// $('input:checkbox').on('click', function(){
//     $('h1').css('text-decoration: line-through;');
// });



for (var i=0; i<1; i++){
    document.querySelector('.enter').addEventListener('click', function(){
        var task = document.getElementById('task').value;
        // console.log(task);
        // document.getElementById('tasks').append(innerHTML=task);
        var li = document.createElement('LI');
        var t = document.createTextNode(task);
        if (task===''){
            alert('You must write something!');
        }
        else {
            li.appendChild(t);
            document.getElementById('tasks').appendChild(li);
            document.getElementById('task').value='';
        }
    })
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

document.querySelector('.clear').addEventListener('click', function(){
    document.querySelector('ul').outerHTML="<ul id='tasks'> </ul>";
})
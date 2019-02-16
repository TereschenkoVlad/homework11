var ul = document.getElementById('list')

var names = ['Danya', 'Vlad', 'Artem', 'Nastya', 'Nastya', 'Nadia', 'Bogdan', 'Oleg']

for (var i = 0; i < names.length; i++) {
    var li = document.createElement('LI')
    li.innerText = names[i]
    ul.appendChild(li)
}


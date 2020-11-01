title = document.querySelector('#title');
cursor = document.querySelector('#title-cursor')
console.log(cursor)
name = 'Hugh Hunt'

let i = 0;

function typeName(str) {
    setTimeout(() => {
        console.log(str[i]);
        title.removeChild(cursor)
        title.textContent += str[i];
        title.appendChild(cursor) 
        i++
        if (i < str.length) {
            typeName(str);
        }
    }, 150)
}

typeName(name)
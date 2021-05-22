var htmlNode_1 = document.querySelector('#foo')
console.log(htmlNode_1)


var htmlNode_2 = document.querySelector('#bar')
console.log(htmlNode_2)

function funcc1(node) {
    node.value = node.value.toUpperCase()
    return node
}


function funcc2(node) {
    node.value = node.value.repeat(2)
    return node
}

function funcc3(node) {
    node.value = node.value+"@@"
    return node
}


htmlNode_1 ? funcc2(funcc1(htmlNode_1)) : 0
htmlNode_2 ? funcc2(funcc3(htmlNode_2)) : 0
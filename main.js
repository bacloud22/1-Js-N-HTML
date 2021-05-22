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
var nodes = [htmlNode_1, htmlNode_2]
var funcs = [funcc1, funcc2, funcc3]

function setup (nodes, funcs) {
    nodes = nodes.filter(Boolean)
    funcs = funcs.filter(Boolean)
    funcs.forEach(func => {
        nodes.forEach(node => {
            node[func.name] = (_) => func(node)
        });
    });
}

setup(nodes, funcs);

htmlNode_1?.funcc2().funcc1()
htmlNode_2?.funcc3().funcc1()
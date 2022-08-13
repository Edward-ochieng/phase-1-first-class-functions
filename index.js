function receivesAFunction (thing) {
    return thing();
}

function returnsANamedFunction () {
    return function HelloWorld () {return 'Hello' + 'World' };
}

function returnsAnAnonymousFunction () {
    return function () {return 'Hello'}
}

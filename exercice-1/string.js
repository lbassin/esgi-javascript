function ucfirst(text) {
    return !text ? '' : text.charAt(0).toUpperCase() + text.substr(1, text.length - 1).toLowerCase();
}

function capitalize(text) {
    return !text ? '' : text.split(' ').map(data => ucfirst(data)).join(' ');
}

function camelCase(text) {
    return capitalize(text).replace(/ /g, '');
}

function snake_case(text) {
    return !text ? '' : text.split(' ').map(data => data.toLowerCase()).join('_')
}

function leet(text) {
    return !text ? '' : text
        .replace(/a/gi, '4')
        .replace(/e/gi, '3')
        .replace(/i/gi, '1')
        .replace(/o/gi, '0')
        .replace(/u/gi, '(_)')
        .replace(/y/gi, '7');
}

function prop_access(obj, path) {
    if (!path) {
        return obj;
    }

    var notFound = false;
    path.split('.').map(key => {
        if (!obj.hasOwnProperty(key)) {
            notFound = true;
            return;
        }

        obj = obj[key];
    });

    if (notFound) {
        return path + ' not exist';
    }

    return obj;
}

function verlan(text) {
    return !text ? '' : text.split(' ').map(data => data.split('').reverse().join('')).join(' ');
}

function yoda(text) {
    return !text ? '' : text.split(' ').reverse().join(' ');
}

function vig(text, secret) {
    return !text ? '' : text.split('').map(data => data).join('');
}



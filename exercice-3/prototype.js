String.prototype.ucfirst = function () {
    return this.charAt(0).toUpperCase() + this.substr(1, this.length - 1).toLowerCase();
};

String.prototype.capitalize = function () {
    return this.split(' ').map(data => data.ucfirst()).join(' ');
};

String.prototype.camelCase = function () {
    return this.capitalize.replace(/ /g, '');
};

String.prototype.snake_case = function () {
    return !this ? '' : this.split(' ').map(data => data.toLowerCase()).join('_')
};

String.prototype.leet = function () {
    return this
        .replace(/a/gi, '4')
        .replace(/e/gi, '3')
        .replace(/i/gi, '1')
        .replace(/o/gi, '0')
        .replace(/u/gi, '(_)')
        .replace(/y/gi, '7');
};

String.prototype.verlan = function () {
    return this.split(' ').map(data => data.split('').reverse().join('')).join(' ');
};

String.prototype.yoda = function () {
    return this.split(' ').reverse().join(' ');
};

String.prototype.vig = function (secret) {
    return this.split('').map(data => data).join('');
};

Object.prototype.prop_access = function (path) {
    let obj = this;
    if (!path) {
        return this;
    }

    let notFound = false;
    path.split('.').map(key => {
        if (!obj.hasOwnProperty(key)) {
            notFound = true;
            return;
        }

        obj = obj[key];
    });

    if (notFound) {
        console.log(path + ' not exist');
        return;
    }

    return obj;
};


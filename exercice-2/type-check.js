function type_check_v1(value, type) {
    if (value === null || value === undefined || !type) {
        return false;
    }

    return value.constructor.name.toLowerCase() === type.toLowerCase();
}

function type_check_v2(value, config) {
    if (!(config instanceof Object)) {
        return false;
    }

    if (value === null || value === undefined) {
        return false;
    }

    if (config.type && !type_check_v1(value, config.type)) {
        return false;
    }

    if (config.value && value != config.value) {
        return false;
    }

    if (config.enum && !(config.enum instanceof Array)) {
        return false;
    }

    if (config.enum && !config.enum.includes(value)) {
        return false;
    }

    return true;
}

function type_check(value, config) {
    if (!(value instanceof Array) && !(value instanceof Object)) {
        return false;
    }

    if (!config.type) {
        return false;
    }

    if (!type_check_v1(value, config.type)) {
        return false
    }

    if (!config.properties) {
        return false;
    }

    for (let property in config.properties) {
        if (!config.properties.hasOwnProperty(property)) {
            return false;
        }

        if (!value.hasOwnProperty(property)) {
            return false;
        }

        let typeCheck = config.properties[property];
        if(typeCheck.constructor.name === 'String'){
            typeCheck = { type: typeCheck };
        }

        if (!type_check_v2(value[property], typeCheck)) {
            return false;
        }

        if (config.properties[property].properties && !type_check(value[property], config.properties[property])) {
            return false;
        }
    }

    return true;
}

Object.prototype.prop_access = function (path) {
    let obj = this;
    if (!path) {
        return this;
    }

    let notFound = false;
    let lastKey = '';
    path.split('.').map(key => {
        lastKey = key;
        if (!obj.hasOwnProperty(key)) {
            notFound = true;
            return;
        }

        obj = obj[key];
    });

    if (notFound) {
        throw new UndefinedPropertyError(path, lastKey, this);
    }

    return obj;
};

function UndefinedPropertyError(path, property, object) {

    let properties = Object.keys(object).join(', ');
    let instance = new Error(`Property '${property}' not exists for path '${path}', expected one of [${properties}]`);

    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if(Error.captureStackTrace){
        Error.captureStackTrace(instance, UndefinedPropertyError);
    }

    return instance;
}

function test(){
    let test = {
        'name': 'Oui',
        'address': {
            'street' : 'Okok',
            'city': 'Yes'
        }
    };

    let prop = null;
    try{
        prop = test.prop_access('address.city');
    }catch (error) {
        console.log('Exception caught');
        return;
    }

    console.log(JSON.stringify(prop));
}
"use strict";
class User {
    constructor(id, name, isActive) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
    }
}
module.exports = new User();

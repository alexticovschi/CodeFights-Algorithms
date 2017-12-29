function variableName(name) {
    if(name.match(/\[/g) || name.match(/\]/g) || name.match(/\-/g) || name.match(/\ /g)) {
        return false;
    }
    
    if(name.match(/\_/g)) return true;
    
    if ('0' <= name[0] && name[0] <= '9') {
        return false;
    }
    for(let i = 0; i < name.length; i++) {
        if (!('a' <= name[i].toLowerCase() && name[i].toLowerCase() <= 'z') ||
              '0' <= name[i] && name[i] <= '9') {
            return false;
        }
        return true;
    }
}

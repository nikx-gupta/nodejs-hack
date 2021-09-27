import {readFile} from "fs"

const cache = new Map();

export function dirtyRead(fileName, cb) {
    if (cache.has(fileName)) {
        console.log('called cache');
        console.log(cb);
        cb(cache.get(fileName));
    } else {
        readFile(fileName, 'utf8', (err, data) => {
            cache.set(fileName, data);
            cb(data);
        });
    }
}
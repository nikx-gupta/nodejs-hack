import {dirtyRead} from "./fileRead.mjs"
import glob from "glob";

const pt = "E:\\src\\data sources\\sakila";

glob(pt + "\\*.json", (err, files) => {
    console.log(`All files found: ${JSON.stringify(files)}`);
}).on("match", match => console.log(`Match found: ${match}`))


function createFileReader(fileName) {
    const listners = [];
    dirtyRead(fileName, value => {
        console.log(listners);
        listners.forEach(l => l(value));
    });

    return {
        onReady: l => listners.push(l)
    }
}

const rdr1 = createFileReader('data.txt');
rdr1.onReady(function (data) {
    console.log('First Call Data: ' + data);

    let rdr2 = createFileReader('data.txt');
    rdr2.onReady(function (dt) {
        console.log('Second Call Data: ' + dt);
    });
})


// rdr1.onReady(data => {
//     console.log('First Call Data: ' + data);
//
//     let rdr2 = createFileReader('data.txt');
//     rdr2.onReady(data => {
//         console.log('Second Call Data: ' + data);
//     });
// });
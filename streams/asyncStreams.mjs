import {createReadStream, createWriteStream} from 'fs'
import {createGzip} from 'zlib'

const fileName = 'E:\\src\\data sources\\polls\\generic_ballot_polls.csv';

createReadStream(fileName)
    .pipe(createGzip())
    .pipe(createWriteStream("wrnew.gz"))
    .on('finish', () => console.log('File successfully compressed'));

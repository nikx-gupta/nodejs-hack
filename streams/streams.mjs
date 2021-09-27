import {promises as fs} from 'fs'
import {gzip} from 'zlib'
import {promisify} from 'util'

const gzipPromise = promisify(gzip);
const fileName = process.argv[2];

async function main() {
    const data = await fs.readFile('E:\\src\\data sources\\polls\\generic_ballot_polls.csv');
    const gzippedData = await gzipPromise(data);
    await fs.writeFile(`${fileName}.gz`, gzippedData);
    console.log('File Successfully compressed');
}

main()




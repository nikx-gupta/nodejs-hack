function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("timeout complete");
        }, 2000);

        resolve("test sync");
    });
}

console.log(`Delaying : ${new Date().getSeconds()}s`);
delay().then(msg => console.log(msg));
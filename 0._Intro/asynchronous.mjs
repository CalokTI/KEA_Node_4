//why
//because JS is singlethreaded
//you don't want to block your application


//when
// fetching = over the network = asynchronous, as we have to wait for a response
// browser: event listerners
// converting data: stream
// file handling
// databases
// encryption / decryption
// basically any thing that takes time and/or has been impemented with a Promise


//promise why
//to avoid callback hell
//two states;
//pending
//fulfilled
//resolved or rejected

new Promise((resolve, reject) => {
    try {
        // throw new Error("Oh oh");
        resolve("Everything went well")
    } catch (error) {
        reject("nothing went well", error);
    }

})
    .then(message => console.log(message))
    .catch(errorMessage => console.log(errorMessage));

//assignment create a function called somethingGoodSomethingBad
// return a promise - that is to say that we wrap the function in a promise
// BEWARE: you should not handle the promise, just create a function that returns a promise
// make it take 4 seconds to complete


function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error("Oh oh");
                resolve("Everything went well")
            } catch (error) {
                reject("nothing went well " + error);
            }
        }, 4000)
    })
}

//const goodOrBad = await somethingGoodSomethingBad();
//console.log(goodOrBad);

(async function getCondition() {
    try {
    const goodOrBad = await somethingGoodSomethingBad();
    console.log(goodOrBad);
    }
    catch (error) {
        console.log(error);
    }
})()

//console.log(getCondition);

Promise.all([]) //waits for all promises to finish
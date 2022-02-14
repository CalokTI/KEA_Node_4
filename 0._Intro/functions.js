//hoisting - declarations are lifted to the top

//basic function
function greetings() {
    console.log("Hello World");
}

//anonymous function
const greetingsInAVariable = function () {
    console.log("Hello World - Variable");
}

//arrowfunction variable    
const greetingsArrowFunction = () => {
    console.log("Hello World - Arrowfunction variable");
}


function doingSomething(anyFunctionReference, name) {
    anyFunctionReference(name);
}

const running = (name) => {
    console.log(`${name} is running`);
}


const drinking = (name) => {
    if (name === "Carsten") {
        console.log(`${name} is not drinking`);
    } else if (name === "Julius") {
        console.log(`${name} is drowning in booze`)
    }
     else {
        console.log(`${name} is drinking`);
    }
}

const sleeping = (name) => {
    console.log(`${name} is sleeping`);
}

const studyresult = doingSomething(name => name + " is studying", "who")

console.log(studyresult)


//greetings();
//greetingsInAVariable();

doingSomething(running, "Carsten");
doingSomething(drinking, "Julius");
doingSomething(sleeping, "Carsten");
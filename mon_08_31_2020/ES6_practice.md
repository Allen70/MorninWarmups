# ES6 Practice 1
For today's morning warm-up, we are going to go over ES-6 syntax. We will start simple and get a little bit more complex. 

## Section 1 - 5 minute max per problem
<hr>

### **Lets start with the following function.**


    function sayHello(greeting){
        return greeting
    }


- problem 1: rewrite sayHello in ES6 with an EXPLICIT return
- problem 2 rewrite sayHello in ES6 with an IMPLICIT return



### **Now lets work something more practical**


    function doubleTheNumber( number ){
        return number * 2
    }

- problem 3: rewrite doubleTheNumber in ES6 with an EXPLICIT return
- problem 4: rewrite doubleTheNumber in ES6 with an IMPLICIT return

Cool! Hopefully you made it this far with google and your brain. 

## Section 2 - 10 minute max per problem

<hr>

If you are familiar with .map, .reduce, .filter, or any other applicatives you have a rough idea of what we are about to do. ES6 functions tie in beautifully with these function. Have you ever seen a .map written with an expression like below written inside the parenthesis?

    () => {}

or 

    something => otherthing 

both of these are anonymous functions. What is an anonymous function?
- In ES6 it is very easy to tell

        // is anonymous
        () => console.log('hi')

        //isn't anonymous
        const sayHi = () => console.log('hi')

- literally all an anonymous function is, is a function that IS NOT ASSIGNED A NAME


Anonymous functions aren't all that useful on there own, why even have a function if we can't store it to use later?

Let's take a look at a basic .map, to double all terms of an Array. 

    const array = [1,2,3]
    const doubledArray = array.map( number => number * 2 )

let's hone in on the inside of the .map

    number => number * 2

    /*
        if you wanted an explicit return you could type
        number => {
            return number * 2
        }
    */

Right now, go into your terminal, and type in "node" tFist code .
co get into a nodeJS playground. Enter ^^^that^^^ expression and see what the return value is!

Notice how its not a value returned? That is because we haven't INVOKED it yet. To invoke we need to invoke it like any other function, lets invoke it with the number 2. Type the following into your terminal

    ( number => number * 2 )(2)

We need to be mindful when we program of the difference between functions and INVOKED functions. 

- a function tells your computer, "here is an instruction manual on what to do"
- an INVOKED function is EQUAL TO THE FUNCTION'S RETURN VALUE

When we use our applicatives (.map, .filter, .reduce etc....) They use a callback function! That means that you input the function and not the value that the function is equal to. 

For example 

```
const doubledArray = array.map( term => term * 2 )
```

can be rewritten as 

```
function double(number){
    return number * 2
}

const doubledArray = array.map(double)
```

It might look weird to see double written inside of map with no arguments. What it is doing is passing in each element to that function for every element. Its going to look and feel weird until you do it a few times. 

here is an array
```
array = [1,2,3,4,5,6,7,8,9,10]
```

All of the problems we are about to do will use this array

problem 5) double each element of the array, and inside of your applicative use ES6 syntax ( () => {} )
problem 6) double each element of the array, and inside of your applicative use a callback to an external function
problem 7) filter out any element of the array that is not even using ES6 syntax, with an implicit return on your applicative
problem 8) filter out any element of the array that is odd using ES6 syntax with an explicit return on  your applicative
problem 9) Go through each element of the array, and for any term that is a multiple of three, change it to the string " I am a multiple of 3", use any syntax that you would like for this







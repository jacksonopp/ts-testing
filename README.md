# ts-testing template

This is a typescript testing template. It uses chai and mocha as its testing libraries.

---

### installation
To get started, type `npm install` in your terminal.

If you have yarn installed, simply type `yarn` in your teminal.

## writing and running tests
To write a test, first create file called `(filename).spec.ts` where `(filename)` matches a `.ts` file you are working with. An example of how to write a test can be found in `canary/canary.spec.ts`

To run tests, type `npm test`. 

If you are using yarn, type `yarn test`.

## resources
Check out the [Mocha docs](https://mochajs.org/) and the [Chai docs](https://www.chaijs.com/) for info on how to use the testing libraries. 

## dependencies
The dev dependencies are:

```
@types/chai
@types/mocha
chai
mocha
ts-node
typescript
```

the `@types` dependencies are simply type definitions for the testing libraries

### notes
Javascript files are ignored to save upload space. If you wish to upload javascript files, remove the last line in the `.gitignore`.
This repo compiles to ES5. I am currently working on getting it to complie to ESNext for futureproofing.

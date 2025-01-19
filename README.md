# Stale Closures in React's useEffect Hook

This repository demonstrates a common, yet subtle, bug in React applications involving stale closures within asynchronous operations inside the `useEffect` hook.  The bug arises when an asynchronous operation (like `setTimeout`) is initiated inside an effect, and that operation uses a variable from the effect's scope that is updated later. By the time the asynchronous operation completes, the value of the variable may have changed, leading to unexpected behavior.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs and the counter's behavior.  You'll see that the counter might not always increment correctly due to the stale closure.

## Solution

The solution involves ensuring that the asynchronous operation uses the latest value of `count`.  This is typically achieved by either using functional updates with `setCount` or by refactoring to remove the dependency on the closure.
## next-client-router


## Problem:

When building high-load web application with advanced caching, for example, react-query, you want to adopt all streaming features of next.js and app router.

While there's a router.replace() method in next.js, it's not suitable for high-load web application, because it will cause a full page reload, and also does not trigger Suspense boundaries.

So when you build high-load interactive parts of your web application, and you use router hook in next.js, you would likely will suffer with: 

1. full page\modules reload server-side
2. problems with activating suspense boundaries with external libraries

More in: https://github.com/vercel/next.js/issues/42346

## Solution:

This package is a wrapper upon windows.history.pushState() and replaceState() methods.

When used to change searchParams with client components that use Suspense and dynamic data fetching, client router will not cause full page reload, and also will trigger Suspense boundaries with new data getting fetched and state getting updated.

## Installation:

```jsx
npm i next-client-router
```
```jsx
yarn add next-client-router
```
```jsx
pnpm add next-client-router
```
```jsx
bun i next-client-router
```


## Usage:
```jsx
import  clientRouter from "next-client-router";

clientRouter.push("/");
clientRouter.replace("/");
```

```jsx
'use client'
import clientRouter  from "next-client-router";
import {useSearchParams} from "next/navigation";

const MyComponent = () => {
  const params = useSearchParams();

  const handleClick = () => {
    const newParams = new URLSearchParams(params);
    newParams.set("key", "value");
    clientRouter.replace(`/?${newParams}`);
  };

  return <button onClick={handleClick}>change client searchParams and provoke Suspese boundaries</button>
}
```
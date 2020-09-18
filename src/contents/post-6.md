---
path: "/blog/how-to-mock-userouter"
date: "2020-09-18"
title: "How to mock useRouter"
tags: ["react", "jest", "javascript", "react-testing", "Today I learned", "Next.js"]
---

## The problem

If you happen to have Next.js `useRouter` hook in one of you're component to test, you
have likely come across this error:

```console
TypeError: Cannot destructure property `query` of 'undefined' or 'null'.
const { query, asPath } = useRouter();
```

During test the `useRouter` hooks returns null or undefined. There are different approach
possible.

## With a Higher Order Component (HOC)

The `useRouter` hook is basically a shortcut for accessing values from the `RouterContext`.
Therefore in order to test a component with `useRouter` we need to wrap the component in a HOC with 
`RouterContext.Provider` component.

```javascript
import React from 'react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

export const withTestRouter = (component, router) => {
  const {
    route = "",
    pathname = "",
    query = {},
    asPath = "",
    push = async () => true,
    replace = async () => true,
    reload = () => null,
    back = () => null,
    prefetch = async () => undefined,
    beforePopState = () => null,
    isFallback = false,
    events = {
      on: () => null,
      off: () => null,
      emit: () => null
    }
  } = router;

  return (
    <RouterContext.Provider value={{
      route,
      pathname,
      query,
      asPath,
      push,
      replace,
      reload,
      back,
      prefetch,
      beforePopState,
      isFallback,
      events
    }}>
      {component}
    </RouterContext.Provider>
  )
}
```

## With jest.spyOn and mockImplementationOnce

With this approach we mock the implementation of `useRouter` with our own.

```javascript
// SomeComponent.test.js
...

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementationOnce(() => ({
  query: {page: 1, per_page: 10},
  asPath: '/posts'
}));
...
```

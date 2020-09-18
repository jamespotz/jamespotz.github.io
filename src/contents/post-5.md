---
path: "/blog/two-ways-to-use-usestate-setter"
date: "2020-09-03"
title: "Two ways to use React useState setter function"
tags: ["react", "react-hooks", "javascript", "Today I learned"]
---

## 1. Providing a new value

```javascript
// Initial setup
const [disabled, setDisabled] = useState(false)

// Later, modifying the state
setDisabled(!disabled)
```

## 2. Providing a function with the previous state as the argument

```javascript
// Initial setup
const [disabled, setDisabled] = useState(false)

// Later, modifying the state
setDisabled(disabled => !disabled)
```

## When to use one over the other.

- If you're component does not rely on the old state then use the new value as argument.

- If you're code relies on the previous state, then you should always use the function as an argument.
  The Problem lies in the fact that React state updates are batched,
  meaning that multiple state changes can occur in a single update.
  If you're component relies on the old state and you have multiple updates to the enabled/disabled state,
  the result may not be what you expect.

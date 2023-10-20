---
title: "5 Obscure Things in JavaScript"
description: "Explore lesser-known, quirky aspects of JavaScript that can surprise even experienced developers."
date: 2023-10-20
tags: ['JavaScript', 'Programming', 'Development']
image: https://picsum.photos/id/6/600/200
relatedPosts: ["post-01", "post-02"]
author: miguel-chavez
---

JavaScript is full of peculiarities and hidden gems that can both amaze and confound developers. Here are five obscure things in JavaScript that you might not have encountered:

1. **Truthy Object**: Did you know that an empty object is truthy in JavaScript? It can be surprising, but when used in a boolean context, an empty object evaluates to `true`. For example: `if ({}) { /* This code block will execute */ }`.

2. **Sparse Arrays**: JavaScript allows arrays to have "holes" or undefined elements. This means you can have an array with gaps between its elements. For example, `const arr = [1, , 3];` is a valid array with a hole in the second position.

3. **The `delete` Operator**: The `delete` operator can be used to remove properties from objects. However, it doesn't work the same way for arrays. When used on an array, it creates a hole but doesn't change the array's length.

4. **Hoisting with `let` and `const`**: Variables declared with `let` and `const` are hoisted to the top of their containing block, just like variables declared with `var`. However, they are not initialized until the point in the code where they are declared, leading to a temporal dead zone.

5. **NaN Oddities**: The value `NaN` stands for "Not-a-Number," but it has some surprising behaviors. For example, `NaN === NaN` evaluates to `false`, and `typeof NaN` is `"number"`. These quirks can lead to unexpected results in your code.

These obscure aspects of JavaScript add depth to the language but can also be sources of subtle bugs. Understanding them can make you a more proficient JavaScript developer, capable of handling the language's idiosyncrasies with confidence.

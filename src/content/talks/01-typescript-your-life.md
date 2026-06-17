---
title: 'Typescript Your Life (Or At Least Your API Calls)'
subtitle: 'Theodo UK talks'
pubDate: '2023-07-31'
url: 'https://youtu.be/iAktcmbgXZk'
heroImage: '../../assets/talk-01-typescript-your-life.png'
---

Typescript is great! Except sometimes, it lies to you: have you noticed how you can cast values from `any` / `unknown` to whatever type you need, and it never has a problem with that? This comes up a lot when making API calls, and can lead to nasty bugs: if the response is missing a property, you will get `undefined` when you try to access it (even if that’s impossible according to your type definitions).

In this talk, I’ll give some background on type systems, explain what is going wrong with TS, and then give a practical solution to achieve even better type safety in your projects!

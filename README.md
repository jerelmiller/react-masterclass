# React Masterclass

Lets learn React together!

Inside this repo, you will find folders covering a variety of topics. Each topic
has its own setup instructions.

## Setup

[**Node**](https://nodejs.org/en/)

At the minimum, you will need Node.js installed. Refer
to the [node](https://nodejs.org/en/) documentation for installation
instructions.

[**yarn**](https://yarnpkg.com/en/)

Installing node will also install `npm`. While `npm` is a suitable tool to
install JavaScript dependencies, I recommend using `yarn`. Yarn is a drop-in
replacement for `npm`. To install `yarn`, refer to the
[documentation](https://yarnpkg.com/en/docs/install).

[**create-react-app**](https://github.com/facebookincubator/create-react-app)

We use `create-react-app` to bootstrap new React projects. For specific examples
in this repository, you will not need this tool. This is recommended if you
would like to follow along during the lunch n' learns.

Install via `yarn`

```
$ yarn global add create-react-app
```

## Running the examples

Most of the folders within this repo are actually React apps! With the exception
of a few of the example folders, follow the process below to start the app.

Some of the examples will be used to teach JavaScript concepts. To run these
examples, follow the instructions in that example folder's README.

**Running a React app example**

1. `cd` into the directory for the example you would like to run

```
$ cd props
```

2. Install dependencies

```
$ yarn
```

3. Start the app

```
$ yarn start
```

This should open your browser with the running React app! Once running, you may
edit any file within `src` to see the browser automatically refresh with your
changes.

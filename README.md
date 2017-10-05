# React Masterclass

Lets learn React together!

Inside this repo, you will find folders covering a variety of topics. We will
try and teach from these example folders during our lunch n' learns so that we
have a bunch of learned ideas that we can refer back to!

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

## Contributing

You are encouraged to contribute. While learning these concepts, you may find it
helpful to modify or add additional examples for a given topic. Submit a PR to
add some changes! I find interactive learning to be the easiest way to work with
a new idea. It would be awesome to have a record of everyone's examples to teach
each other what we are learning.

As we move along, we will add more topics. If there is a particular topic you
are interested in that has not yet been covered, feel free to create a PR with a
new folder name of the topic you would like to learn. To commit empty folders,
create a folder with a `.gitkeep`. We can use this folder to bootstrap new
examples that cover the topic you are interested about.

## Code reviews

Just like our normal work, you are encouraged to do code reviews. Sometimes its
helpful to get feedback while you are learning a new topic. Unlike normal work,
we will not require approvals to merge the PR. Just be sure that you have run
the example before merging to ensure others can also run your example!

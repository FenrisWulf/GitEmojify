# GitEmojify

## What it does

Do you want to have a bunch of pretty emojis in your git commits, but not have to bother with finding different emoticon codes? This does it for you! This script chooses a random git emoji to add to any of your commit messages, letting you have beautiful Christmas Tree looking commit logs!

## Using git hooks on POSIX systems

    make install

This will build and install `random_emoji` and set up a template Git hook for
automatically prepending an emoji to your commit messages. You'll need to run
`git init` on already checked out repos to enable it.

## Using the Windows-based wrapper

To install this program, run the install script with the directory you install git in:

```
> ./install
Enter the path to the directory you have git installed in (e.g. ?C:\cygwin64\bin)
> C:\\cygwin64\\bin
```

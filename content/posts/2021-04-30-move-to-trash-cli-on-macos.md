---
type: post
title: Move to Trash CLI on macOS
date: 2021-04-30T16:44:15+07:00
author: ansidev
gravatar: a2ac3c4477e717c7fa15041d907e71fd
twitter: '@ansidev'
permalink: /macos/move-to-trash-cli-on-macos
categories:
  - Tips and Tricks
  - macOS
tags:
  - move to Trash
---

# Problem

On Linux, you can move files/folder to Trash from CLI using command called `rm`.
On macOS, there is also a command called `rm`, but this command will delete your files/folder permanently instead of move them to Trash. By default, you must do it via GUI.

# Solution

Install the [Homebrew](https://brew.sh/) package [trash](https://github.com/macmade/trash) using command:

```shell
brew install --HEAD macmade/tap/trash
```

You can alias the default rm command to trash, using the following line into your shell profile file:

```shell
if [ -f /usr/local/bin/trash ]; then alias rm="/usr/local/bin/trash"; fi
```

Then restart the terminal application.

Now, the command `rm` will move your files/folder to Trash instead of delete them permanently.

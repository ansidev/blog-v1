---
type: post
title: Applications don't show up in Spotlight
date: 2021-04-30T17:03:30+07:00
author: ansidev
gravatar: a2ac3c4477e717c7fa15041d907e71fd
twitter: '@ansidev'
permalink: /macos/application-dont-show-up-in-spotlight
categories:
  - Tips and Tricks
  - macOS
tags:
  - spotlight
  - search
  - index
---

# Problem

Applications don't show up in Spotlight search result.

# Solution

**Turn off spotlight**

```shell
sudo mdutil -a -i off
```

**Unload and reload it**

If your macOS System Integrity Protection (SIP) is enabled, you will see an error message looks like `Operation not permitted while System Integrity Protection is engaged`, so you can ignore this step.

```shell
sudo launchctl unload -w /System/Library/LaunchDaemons/com.apple.metadata.mds.plist
sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.metadata.mds.plist
```

**Turn on spotlight again**

```shell
sudo mdutil -a -i on
```

**If the problem was not solved, try these instructions:**

> 1. Go to System Preferences, Select Spotlight.
> 2. Select the Privacy tab.
> 3. Click the Plus (+) button.
> 4. Press `Command` + `Shift` + `C` to reveal your hard drives (if they are not available otherwise),
     or simply navigate to your hard drive (most likely MacintoshHD)
> 5. If you have more than one hard drive, hold the Command key and click your various drives to add them to your selection.
> 6. Click the `Choose` button to add them to the Privacy list.
> 7. Ignore the warning.
> 8. Remove the hard drive by clicking the minus sign.

Now everything should be reindexed as expected.

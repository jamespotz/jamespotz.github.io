---
path: "/blog/two-factor-authentication-github-push"
date: "2019-08-16"
title: "Make git push,pull and clone work with two factor authentication"
tags: ["git", "2fa"]
---

Today I faced an issue when pushing my recent changes to my Github repo. It was causing access authentication failure even if I've given my credentials correctly. I found that it was caused by enabling two-factor authentication that I enabled yesterday.

![Authentication failed](./images/authentication_failed.png)

In a nutshell, two-factor authentication is an added layer of security. Without it, your Github account can be easily accessed by someone with your correct password. The only way that someone could hack into your account, is if they know your password and have access to your phone.

To be able to push, pull, and clone your repo, you need to set up a token that you will then used as a password. First, make sure you are signed-in on your Github account, navigate to the right where you're avatar is located, and hover over it and look for settings.

![Github settings](./images/github_settings_dropdown.png)

Second, on your settings page look for 'Developer Settings' and the next page you need to click on 'Personal access tokens', and then you will
see a 'Generate new token' button.

![Personal Settings](./images/settings_sidebar.png)

![Developer Settings](./images/developer_settings.png)

Finally, give the access token a name and select scopes of your token. Once done, you can now use your access token as your password and save it on a keyring.

![Personal access token page](./images/personal_access_token_page.png)

**Note**: Store your access token in keyring or on a password manager.

---
sidebarDepth: 3
---

# Configuration

The plugin contains some configuration settings which you may find useful. If you wish to request some additional settings you can put a [feature request](https://github.com/fytinnovations/oc-user-connect-plugin/issues)

## Email Verification

Enable this option if you would like to verify subscriptions using emails.

## Key Expires in (Days)

Enter the number of days after which the key will be expired. Available only when Verify via Email is enabled.

## Verification Page

The page to redirect the user when the subscription is successful. Once the subscription is verified there is a message embedded automatically in the session you can use the flash twig component on the page to output the message.

Example:

```bash
title = "Account"
url = "/account/:code?"
layout = default

[account]
redirect = "home"
paramCode = "code"
==

<div class="container m-a">
    {% flash success %}
    <div class="alert alert-success">{{ message }}</div>
    {% endflash %}
    {% component 'account' %}
</div>
```

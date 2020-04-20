---
sidebarDepth: 3
---

# SubscriptionForm

You can embed the subscription form on any page which allows user to subscribe to your website.

## Properties

| Value               | Description                                                                              | Default                                           | Required |
|---------------------|------------------------------------------------------------------------------------------|---------------------------------------------------|----------|
| subscribeButtonText | The text which should be displayed on the subscribe button.                              | Subscribe Now                                     | No       |
| successMessage      | The message to be displayed when the user successfully submits the  subscription request | Thankyou for subscribing we'll  contact you soon. | No       |
| category            | The category the subscription will be submitted to.                                      | Uncategorized (1)                                 | Yes      |

## Sample Page

```ini

title = "Demonstration"
url = "/"
layout = "default"
is_hidden = 0

[subscriptionForm]
subscribeButtonText = "Subscribe now"
successMessage = "Thankyou for subscribing we'll contact you soon"
category = 2
==
<div class="jumbotron">
    <div class="container">
        {% component "subscriptionForm" %}
    </div>
</div>

```

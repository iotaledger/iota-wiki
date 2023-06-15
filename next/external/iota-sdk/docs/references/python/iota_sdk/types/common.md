---
sidebar_label: common
title: iota_sdk.types.common
---

## Node Objects

```python
class Node()
```

### \_\_init\_\_

```python
def __init__(url=None, jwt=None, username=None, password=None, disabled=None)
```

Initialize a Node

Parameters
----------
url : string
    Node url
jwt : string
    JWT token
username : string
    Username for basic authentication
password : string
    Password for basic authentication
disabled : bool
    Disable node

## SendAmountParams Objects

```python
class SendAmountParams()
```

### \_\_init\_\_

```python
def __init__(address, amount)
```

Initialise SendAmountParams

Parameters
----------
address : string
    Address of the output
amount : int
    Amount of the output


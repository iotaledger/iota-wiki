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

#### Parameters

- **url**_: string_  
   Node url
- **jwt**_: string_  
   JWT token
- **username**_: string_  
   Username for basic authentication
- **password**_: string_  
   Password for basic authentication
- **disabled**_: bool_  
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

#### Parameters

- **address**_: string_  
   Address of the output
- **amount**_: int_  
   Amount of the output

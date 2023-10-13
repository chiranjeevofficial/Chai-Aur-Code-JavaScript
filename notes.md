# Hitesh Chaudhary - JavaScript

## Variable

### There are 4 ways to create variable in javascript.

> | Keyword | Description | Example |
> | --- | --- | --- |
> | const | Its store th econstant value. |  const x = 10; |
> | let | Its work as ordinary variable. | let y = 5; |
> | var | Its working same as let, but its have scope issue | var z = 12; |
> | ***withoutKeyword*** | Its wrong way to make variable in javascript. | k =15; |

* **Note:** Prefer not to use var because of issue in block scope and functional scope.

### Classification of Variable

> | keyword | Changes |
> | --- | --- |
> | const | false |
> | let | true |
> | var | true |
> | ***withoutKeyword*** | true |

print variable value syntax - 

Example Code
```
const accountId = 14335;
let accountEmail = "chiranjeev@google.com";
var accountPassword = "Hello@123";
accountCity = "Rishikesh";
let accountState;
```

for single value - 
```
console.log(accountId);
```

for multiple value - 
```
console.table(
    [
        accountId,
        accountEmail,
        accountPassword,
        accountCity,
        accountState
    ]
)
```

Output 

| (index) | Values |
| :---: | :---: |
| 0 | 14335 |
| 1 | 'chiranjeev@google.com' |
| 2 | 'Hello@123' |
| 3 | 'Rishikesh' | 
| 4 | undefined |
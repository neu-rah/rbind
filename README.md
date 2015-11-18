# rbind

node bind function last parameter (right side)

This tiny module offers a bind like functionality but binds to the last parameter.

```javascript
var rbinder=require("rbinder");
function f() {return arguments;}
rbinder(f);//now functions f has an rbind member
f.rbind(1)(2);// should return a 2 parameters argument
```

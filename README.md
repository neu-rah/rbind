# rbinder

bind function last parameter (right side)

This tiny module offers a bind like functionality but binds to the last parameter.

```javascript
var rbinder=require("rbinder");
function f() {return arguments;}
rbinder(f);//now functions f has an rbind member
f.rbind(1)(2);// should return a 2 parameters argument
```

you can patch all functions of your module at once

```javascript
var rbinder=require("rbinder");
rbinder(Function.prototype);//bind all module functions
f.rbind(1)(2);// should return a 2 parameters argument
```

However functions from imported module wont be patched by last trick.
The still can be patched individually by rbinder.

This patch can be applied to all imported module functions for particular module, by hooking to any imported function prototype like this.

```javascript
rbinder(fs.readFile.constructor.prototype)
fs.readFile.rbind(...);//now fs.readFile has a rbind functions
fs.write.rbind(...);//as well as all the other functions of fs module
```

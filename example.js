var rbinder=require("rbinder")
function f(){return arguments;}
rbinder(f);
console.log(f.rbind(1)(2));

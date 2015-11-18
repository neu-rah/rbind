var rbinder=require("rbinder")
function f(){console.log(arguments);}
rbinder(f);
f.rbind(1)(2);

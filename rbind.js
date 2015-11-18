//bind last parameter
Function.prototype.rbind=module.exports=function() {
  Function.prototype.rbind=function(last_param) {
    var boundFn=this;//arguments.callee;
    return function() {
      arguments[arguments.length++]=last_param;
      return boundFn.apply(this,arguments);
    }
  }
}

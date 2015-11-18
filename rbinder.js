//bind last parameter
module.exports=function(fn) {
  fn.rbind=function(last_param) {
    var boundFn=this;//arguments.callee;
    return function() {
      arguments[arguments.length++]=last_param;
      return boundFn.apply(this,arguments);
    }
  }
}

function getId(obj){
  return parseInt($(obj).attr('id').split("-").pop(), 10);
}

String.prototype.toUnderscore = function(){
  return this.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
};
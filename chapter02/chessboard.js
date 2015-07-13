// Student Workspace
Chess.start = function (n) {

if (n===0) {
  return "";
}
var size=n || 8;
var width=size;
var height=size;
var lines="";
for (var start=1; start<=height;++start) {
  if (start%2!=0) {
    for (var oddz=1; oddz<=width; ++oddz) {
      if (oddz%2!=0) {
        lines += " ";
      }else {
        lines += "#";
      }
    }
    lines+="\n";
  }else {
    for (var evenz=1; evenz<=width; ++evenz) {
      if (evenz%2==0) {
        lines +=" ";
      }else {
        lines +="#";
      }
    }
    lines+="\n";
  }
}
return lines;
};
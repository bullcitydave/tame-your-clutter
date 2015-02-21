<<<<<<< HEAD
function fac(r){return 0==r?1:fac(r-1)*r}function sum(r,t){return r+t}function sum(r){for(total=0,i=0;i<r.length;i++)total+=r[i];return total}function range(r,t){if(array=[],t>r)for(;t>=r;)array.push(r),r++;return array}
=======
function fac(t){return 0==t?1:fac(t-1)*t}function sum(t,n){return t+n}function sum(t){for(total=0,i=0;i<t.length;i++)total+=t[i];return total}function range(t,n){if(array=[],n>t)for(;n>=t;)array.push(t),t++;return array}define(["jquery","knockout"],function(t,n){var r={status:n.observable("active")};n.applyBindings(r,t("html")[0])});
>>>>>>> master

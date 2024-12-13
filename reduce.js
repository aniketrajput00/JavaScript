let n=prompt("Enter number=");

let arr=[];

for(i=1;i<=n;i++){
    arr[i-1]=i;
}

let sum=arr.reduce((res,cur)=>{
    return res+cur;
});
console.log("sum",sum);

let fact=arr.reduce((res,cur)=>{
    return res*cur;
});
console.log("factorial",fact);
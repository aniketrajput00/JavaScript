v=["a","e","i","o","u","A","E","I","O","U"];
function vowels(str){

    count=0;
   v.forEach((val,i)=> {
    if(str[i]==val)
        count++;
     console.log("number of vowels:",count);
   });
}

vowels("aniket");
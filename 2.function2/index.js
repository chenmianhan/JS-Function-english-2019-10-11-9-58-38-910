function palindrome(message){
   for(var i=0,j=message.length-1;i<j;i++,j--){
       if(message[i]!=message[j])return false;
   }
   return true;
  }
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true
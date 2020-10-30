const vowels =['a','e','i','o','u']
function vowelCount(text){
   let counter = 0;
   for (let letter of text.toLowerCase()) {
      if(vowels.includes(letter)){
         counter++
      }
   } 
   return counter
}
console.log(vowelCount('beautiful'))
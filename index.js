const makeRansomNote = (note, magazine) => {
  let noteArr = note.replace(/\s/g,'').split('')
   let dictionary = {}
   let ransom = {}
  if (noteArr.length > magazine.length){
    return false
  }
  else {

     magazine.forEach( el => {
       if (dictionary[el]){
         return dictionary[el] += 1
       } else {
         return dictionary[el] = 1
       }
     })

     noteArr.forEach( el => {
       if (ransom[el]){
         return ransom[el] += 1
       } else {
         return ransom[el] = 1
       }
     })
   }

   let bools = Object.keys(ransom).map( key => {
     if (dictionary[key]){
       if (dictionary[key] < ransom[key]){
         return false
       } else {
         return true
       }
     } else {
       return false
     }
   })

   if (bools.includes(false)){
     return false
   } else {
     return true
   }
 }

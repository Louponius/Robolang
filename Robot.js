function Robot(cmd,arg1,arg2,arg3,arg4){
  if (cmd == "Beep"){
    console.log(arg1)
    return arg1
  }

  if (cmd == "Boop"){
    if (arg1 > arg2){
      return true
    } else {
      return false
    }
  }

  if (cmd == "Bap"){
     if (arg1 < arg2){
        return true
      } else {
        return false
      }
   }
  
   if (cmd == "Boap"){
     if (arg1 == arg2){
       return true
     } else{
       return false
     }
   }
}

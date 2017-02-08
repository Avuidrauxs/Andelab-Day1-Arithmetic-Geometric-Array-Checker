module.exports={

 aritGeo : function (arr) {


  function checkArit(arr){
      
      let aritDiff = arr[1] - arr[0];
      
      for (i = 0;i<arr.length-1;i++)
      {
        if(arr[i+1] - arr[i] !== aritDiff) return false;
      }
      
      return true;
}

function checkGeo(arr){
      
      let geoDiv = arr[1] / arr[0];
      
      for (i = 0;i<arr.length-1;i++)
      {
        if(arr[i+1] / arr[i] !== geoDiv) return false;
      }
      
      return true;
      
    }
  
   if (arr[0] < arr.length) return 0;
   if(checkArit(arr))    return "Arithmetic";
   if(checkGeo(arr)) return "Geometric";
  
   return -1;
   
  
}


};
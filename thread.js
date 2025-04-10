const PrintInGap = ()=>{
               let i = 1 ; 
               const interval = setInterval(()=>{
                              console.log(i)   
                              i++;
                              if(i>10){
                                             clearInterval(interval)
                              }
               },500)
}
PrintInGap()
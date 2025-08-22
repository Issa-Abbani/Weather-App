export const storage = (function(){
  const loadUserData = ()=>{
    let savedData = localStorage.getItem("userData");
    if(savedData){
      savedData = JSON.parse(savedData);
      return savedData;  
    }else{
      return;
    }
  }

  const saveUserData = (userData)=>{
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  return{loadUserData,saveUserData};

})();
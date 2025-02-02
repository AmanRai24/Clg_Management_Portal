export function getFormBody(params) {
    let formBody = [];

    for (let teacher in params) {
      //--- encodeURIComponent is userd for convert data in url format eg: 'user name' => 'user%20name'
      let encodedKey = encodeURIComponent(teacher);
      let encodedValue = encodeURIComponent(params[teacher]);

      formBody.push(encodedKey + '=' + encodedValue);
    }

    return formBody.join('&'); //-- user%20name=abc&password=abc
  } 

export function isToken(){
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

  export function isUserToken(){
    if(localStorage.getItem('usertoken')){
      return true;
    }else{
      return false;
    }
  }

  export function  getAuthTokenFromLocalStorage(){
    return localStorage.getItem('token');
  }
  export function  getUserTokenFromLocalStorage(){
    return localStorage.getItem('usertoken');
  } 
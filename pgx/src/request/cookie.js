export function setCookie(c_name,value,expiredays){
  let exdate=new Date();
  exdate.setDate(exdate.getDate()+expiredays);
  document.cookie=c_name+ "=" +escape(value)+
  ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

//函数中的参数为 要获取的cookie键的名称。
export function getCookie(key){
  if (document.cookie.length>0){
    let c_start = document.cookie.indexOf(key+ "=");
    let c_end
    if (c_start!=-1){
      c_start=c_start + key.length+1;
      c_end = document.cookie.indexOf(";",c_start);
      if (c_end==-1){ 
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start,c_end));
    }
  }
  return "";
}

// 设置过期时间以秒为单位
// export function setCookie(c_name,value,expireseconds){
//   var exdate=new Date();
//   exdate.setTime(exdate.getTime()+expireseconds * 1000);
//   document.cookie=c_name+ "=" +escape(value)+
//   ((expireseconds==null) ? "" : ";expires="+exdate.toGMTString())
// }
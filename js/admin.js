

$.ajax({
  url : "http://127.0.0.1:8280/users",
  type: "GET",
  success: function(data, textStatus, jqXHR)
  {

    console.log(",......."+data);
    if(data!=null && data.length>0){
      for(let i = 0;i < data.length;i++){
        //var date = new Date(data[i].createdDate);
        var date =getDate(data[i].createdDate);
        var time = formatAMPM(data[i].createdDate)
        console.log

        var htmlData = '<div><p>'+(i+1)+'</p><p>'+data[i].email+'</p><p>'+date+'</p><p>'+time+'</p><p>'+data[i].practiceName+'</p><div class="clear"></div></div>';
        $("#adminData").append(htmlData);
     }
    }else{
      console.log("......");
    }
     
  },
  error: function (jqXHR, textStatus, errorThrown)
  {
    var myJSON = JSON.parse(jqXHR.responseText);
    alert(myJSON.error.message);
    console.log("data","data......."+myJSON.error.message);
  }
});

function getDate(date){
  var date = eval(date); //Note the value is in "" hence a string

  var today = new Date(date);
  var dd = today.getDate();

  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  if(dd<10) 
  {
      dd='0'+dd;
  } 

  if(mm<10) 
  {
      mm='0'+mm;
  } 
   today = mm+'-'+dd+'-'+yyyy;
  // console.log(today);
  // today = mm+'/'+dd+'/'+yyyy;
  // console.log(today);
  // today = dd+'-'+mm+'-'+yyyy;
  // console.log(today);
  // today = dd+'/'+mm+'/'+yyyy;
  // console.log(today);
  return today;
}
function formatAMPM(currentDate) {
  var currentDate = eval(currentDate); //Note the value is in "" hence a string

  var date = new Date(currentDate)
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
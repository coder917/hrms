// localStorage.clear();
$.ajax({
  type: "GET",
  url: "../json/bumen.json",
  data: {
    method: "query"
  }, dataType: "json",//返回的数据类型 
  success: function (data) {
    djson = JSON.stringify(data);
    console.log(djson)
    if (localStorage.getItem("bumen") == null) localStorage.setItem("bumen", djson); //会返回1,2,3
  }
});

function loadXMLDoc2(a) {
  var xmlhttp;
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  }
  else {// code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("xinxi").innerHTML = xmlhttp.responseText;
    }
  }
  if (a == 1) {
    xmlhttp.open("POST", "pass.html", true);
    xmlhttp.send();
  }
};
var k=1;
$(".col-md-3 a").click(function () {
  var bumen = $(this).html();
  // console.log(bumen)
  // console.log(bumen);
  // $(".table tr:gt(0)").remove();

  var html = '';
  // var j = 1;
  var data = window.localStorage.getItem('bumen');
  data = data ? JSON.parse(data) : [];
  // console.log(data)
      for (var i in data) {
        if (bumen===data[i].部门名称) {
          // console.log(html)
          $('h4').html('部门信息');
          $("#bumen").html(data[i].部门名称);
          $("#danw").html(data[i].单位编制数);
          $("#bumenlead").html(data[i].部门领导);
          $("#ps").html(data[i].备注);
          if(k===1)
          $("#xinxi").append("<button class='btn btn-primary' oncilck='loadXMLDoc2(1)'>修改</button>")
          k++
        }
      }
});
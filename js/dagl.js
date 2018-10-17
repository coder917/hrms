// localStorage.removeItem("temp");
$.ajax({
  type: "GET",
  url: "../json/renshi.json",
  data: {
    method: "query"
  }, dataType: "json",//返回的数据类型 
  success: function (data) {
    djson = JSON.stringify(data);
    if (localStorage.getItem("temp") == null) localStorage.setItem("temp", djson); //会返回1,2,3
  }
});

var data = window.localStorage.getItem('temp');
data = data ? JSON.parse(data) : [];
console.log(data.length)
console.log(data)
var html = '';
for (var i = 0; i < data.length; i++) {//循环json对象，拼接tr,td的html
  html = html + '<tr>';
  html = html + '<td>' + (i + 1) + '</td>';
  // html = html + '<td><input type="checkbox" value=""></td>';
  html = html + '<td>' + data[i].工号 + '</td>';
  html = html + '<td>' + data[i].姓名 + '</td>';
  html = html + '<td>' + data[i].部门 + '</td>';
  html = html + '<td>' + data[i].岗位 + '</td>';
  // html = html + '<td>' + data[i].职务 + '</td>';
  html = html + '<td><a onclick="show(' + i + ')">查看</a> <a onclick="change(' + i + ')">修改</a> <a data-toggle="modal" data-target="#myModal"  data-groupClassId="' + i + '">删除</a></td>';
  html = html + '</tr>';
}
// $('#tr').html(html);//通过jquery方式获取table，并把tr,td的html输出到table中	
$(".table").append(html);



$(".col-md-3 a").click(function () {
  var bumen = $(this).html();
  // console.log(bumen);
  $(".table tr:gt(0)").remove();
  var html = '';
  var j = 1;
  var data = window.localStorage.getItem('temp');
  data = data ? JSON.parse(data) : [];
  console.log(data)
  for (var i = 0; i < data.length; i++) {//循环json对象，拼接tr,td的html     
    if (bumen === data[i].部门) {
      // console.log(data)
      html = html + '<tr id=' + i + '>';
      html = html + '<td>' + j + '</td>';
      // html = html + '<td><input type="checkbox" value=""></td>';
      html = html + '<td>' + data[i].工号 + '</td>';
      html = html + '<td>' + data[i].姓名 + '</td>';
      html = html + '<td>' + data[i].部门 + '</td>';
      html = html + '<td>' + data[i].岗位 + '</td>';
      html = html + '<td><a onclick="show(' + i + ')">查看</a> <a onclick="change(' + i + ')">修改</a> <a data-toggle="modal" data-target="#myModal" data-groupClassId="' + i + '">删除</a></td>';
      html = html + '</tr>';
      j++;
    }
  }
  $(".table").append(html);
  if (j == 1) {
    console.log($(".table tr:last").html());
    $(".table").append('<tr><td colspan="8">没有查到符合条件的数据。</tr>');
    console.log($(".table tr:last").html());
  }
});

function show (i) {
  // var s = document.getElementById("txt");
  window.open("pdetail.html?" + "id=" + i);
}

function change (i) {
  window.open("pdch.html?" + "id=" + i);
}

$('#myModal').on('show.bs.modal', function (event) {
  var groupClassId = $(event.relatedTarget).attr('data-groupClassId'); //获取id 后这里可以直接用
  console.log(groupClassId);
  $("#myModal").attr('data-groupClassId', groupClassId);  //给此弹框绑定 后面函数可以直接用
});

function deletep () {
  var i = $("#myModal").attr('data-groupClassId');
  var attr = localStorage.getItem('temp');
  attr = attr ? JSON.parse(attr) : [];
  console.log(attr.length)
  attr.splice(i, 1);
  console.log(attr.length)
  localStorage.setItem('temp', JSON.stringify(attr))
  loadXMLDoc(1)
  $("#myModal").modal('hide');
}
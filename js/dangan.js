$.ajax({
  type: "GET", 
  url: "../json/admin.json", 
  data: {
    method: "query"
  }, dataType: "json",//返回的数据类型 
  success: function (data) {
    console.log(data)
    $("#gonghao").append(data.工号);
    $("#name").append(data.姓名);
    $("#sex").append(data.性别);
    $("#birth").append(data.出生年月);
    $("#idcard").append(data.身份证号);

    $("#jiguan").append(data.籍贯);
    $("#minzu").append(data.民族);
    $("#hyzk").append(data.婚姻状况);
    $("#zzmm").append(data.政治面貌);
    // $("#ygzt").append(data.员工状态);

    $("#workt").append(data.参加工作时间);
    $("#gongl").append(data.工作年限);
    $("#xueli").append(data.学历);
    $("#biyeschool").append(data.毕业院校);
    $("#biyet").append(data.毕业时间);

    $("#email").append(data.电子邮件);
    $("#adress").append(data.联系地址);
    $("#phone").append(data.联系电话);
    $("#aihao").append(data.爱好);
    $("#techang").append(data.特长);

    $("#ruzhit").append(data.入职日期);
    $("#bumen").append(data.部门);
    $("#ganngwei").append(data.岗位);

    $("#bank").append(data.工资卡开户行);
    $("#banknum").append(data.工资卡帐号);
    console.log(data.工资卡帐号zhanghao)
    $("#base").append(data.基本工资);
    $("#gangmon").append(data.岗位工资);
    $("#jixiaomon").append(data.绩效工资);
  },
  error: function () { alert("查询失败！");
 }

});
$(function () {
    //控制新增的弹层
    var $modal = $('#doc-modal-1');

    $('#addNews').on('click', function (e) {

        SetNewModel(0, "",1, "", "");
        //使用详情看 http://amazeui.org/javascript/modal
    
            $modal.modal({
                width: 900,
                height: 800
            });
     
    });
    $('#Cancel').on('click', function () {
        $modal.modal('close');
    });
    //分页js加载
    SetPageHtml();

    //修改和新增的保存
    $('#formSubmit').click(function () {
        var id = 0;
        id= $(this).attr('date-id');
        var newModel = {
            id:0,
            TypeId: $('#selectType').val(),
            Name: $('#doc-ipt-text-1').val(),
            Conent: editor.getContent(),
            Author:"",
            Creator:"",
            Praise: 0,
            Look: 0,
            display: 0,
            IsComment: false,
            IsDelete:false,
            CreatTime: new Date("yyyy-MM-dd HH:MM:SS")
           };
        $.post("../New/UpdateNews",
            { "Conent": newModel.Conent, "Name": newModel.Name, "TypeId": newModel.TypeId, "id": id },
            function (result) {
                $modal.modal('close');
                if (result.statu == 0) {
                    var message = '发布新闻';
                    if (id > 0)
                    {
                        message= '编辑新闻';
                    }
                    bfeMsgBox.success("", message+result.msg);
                    }
                else{
                    bfeMsgBox.error("", result.msg);
                }
                AjaxGetList(1, 0);
             
            });
    })

    $('.newEdit').click(function () {
        var id = $(this).attr('data-id');
        $.ajax({
            url: "../New/GetModel",
            data: { id: id },
            type: "post",
            dataType: 'json',
            success: function (result) {
                SetNewModel(result.id, result.Name, result.TypeId, result.Conent)
                $modal.modal({
                    width: 900,
                    height: 800
                }); 
            },
            error: function (er) {
                BackErr(er);
            }
        });
    });

 $('.newDel').click(function () {
        var id = $(this).attr('data-id');
        $('#my-confirm-Del').modal({
            relatedTarget: this,
            onConfirm: function (options) {
                $.ajax({
                    url: "../New/DelelNews",
                    data: { id: id },
                    type: "get",
                    dataType: 'json',
                    success: function (result) {
                        alert(result);
                    },
                    error: function (er) {
                        BackErr(er);
                    }
                });
            },
            // closeOnConfirm: false,
            onCancel: function () {
               
            }
        });
    })
});
//修改的弹窗内容
$('#addss').click(function () {
    var id = $(this).attr('data-id');
    var $modal = $('#doc-modal-1');
    $modal.modal('close');
    $modal.modal({
        width: 900,
        height: 800
    });
    //$.ajax({
    //    url: "../New/GetModel",
    //    data: { id: id },
    //    type: "post",
    //    dataType: 'json',
    //    success: function (result) {

    //    },
    //    error: function (er) {
    //        BackErr(er);
    //    }
    //});
});



function SetPageHtml() {
    var pageCount = $("#pageDemo").attr("data-PageCount");
    var pageIndex = $("#pageDemo").attr("data-indexPage");
    $('#pageDemo').page({
        pages: 3,
        first: "首页", //设置false则不显示，默认为false  
        last: "尾页", //设置false则不显示，默认为false      
        prev: '<', //若不显示，设置false即可，默认为上一页
        next: '>', //若不显示，设置false即可，默认为下一页
        groups: 3, //连续显示分页数
        jump: function () { }//这里就是去异步请求方法
    });
}

function SetNewModel(id,title,typeId,content,d)
{
    $('#newTitle').text("编辑新闻");
    $('#formSubmit').attr('date-id', id);
    $('#selectType').val(typeId);
    $('#doc-ipt-text-1').val(title);
    editor.setContent(content);
}

//异步获取数据并更新列表
function AjaxGetList(index,typeId)
{
    $.ajax({
        url: "../New/GetList",
        data: { index: index, typeId: typeId },
        type: "post",
        dataType: 'json',
        success: function (result) {
            var htmlTem = '';
            SetAllCount(result.page.count);
            result.rows.forEach(function (e) {
                htmlTem += '<tr><td><input type="checkbox" /></td>';
                htmlTem += ' <td>1</td>';
                htmlTem += '<td>' + e.TypeName + '</td>';
                htmlTem += '<td>' + e.Name + '</td>';
                htmlTem += '<td class="am-hide-sm-only">' + e.Conent + '</td>';
                htmlTem += ' <td class="am-hide-sm-only">' + e.display + '</td>';
                htmlTem += '  <td class="am-hide-sm-only">' + e.Author + '</td>';
                htmlTem += ' <td class="am-hide-sm-only">' + e.CreatTime + '</td>';
                htmlTem += ' <td>';
                htmlTem += ' <div class="">';
                htmlTem += ' <div class="am-btn-group am-btn-group-xs">';
                htmlTem += '<button class="am-btn am-btn-default am-btn-xs am-text-secondary newEdit" id="newEdit" data-id="' + e.id + '"><span class="am-icon-pencil-square-o"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span> 编辑</button>';
                htmlTem += ' <button class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only newDel"  data-id="' + e.id + '"><span class="am-icon-trash-o"></span> 删除</button>';
                htmlTem += '</div>';
                htmlTem += '</div>';
                htmlTem += '</td>';
                htmlTem += '</tr>'
            });
            $("#newTbody").html('');
            $("#newTbody").html(htmlTem);
        },
        error: function (er) {
          
        }
    });
}

//总行数赋值
function SetAllCount(count)
{
    $('#new-pageCount').text(count);
}
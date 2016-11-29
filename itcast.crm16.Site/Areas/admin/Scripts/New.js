$(function()
{
    //控制新增的弹层
    var $modal = $('#doc-modal-1');
 
    $('#addNews').on('click', function (e) {
        $modal.width=420;
        var $target = $(e.target);
        //使用详情看 http://amazeui.org/javascript/modal
      if (($target).hasClass('js-modal-open')) {
          $modal.modal({
              width: 900,
              height:800
          });
      }
    });
    $('#Cancel').on('click', function () {
        $modal.modal('close');
    });
    //分页js加载
    $('#pageDemo').page({
            pages:10,
            first: "首页", //设置false则不显示，默认为false  
            last: "尾页", //设置false则不显示，默认为false      
            prev: '<', //若不显示，设置false即可，默认为上一页
            next: '>', //若不显示，设置false即可，默认为下一页
            groups: 3, //连续显示分页数
            jump: function () { }//这里就是去异步请求方法
        });
})
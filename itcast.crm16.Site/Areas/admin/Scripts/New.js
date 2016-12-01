$(function()
{
    //控制新增的弹层
    var $modal = $('#doc-modal-1');//弹窗div  
 
    $('#addNews').on('click', function (e) {
        $modal.width=420;
      var $target = $(e.target);
      if (($target).hasClass('js-modal-open')) {
        $modal.modal();//弹起
      } else if (($target).hasClass('js-modal-close')) {
        $modal.modal('close');//关闭
      } else {
        $modal.modal('toggle');
      }
    });
})
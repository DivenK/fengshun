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
})
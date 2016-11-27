$(function()
{
    //控制新增的弹层
    var $modal = $('#doc-modal-1');
 
    $('#addNews').on('click', function (e) {
        $modal.width=420;
      var $target = $(e.target);
      if (($target).hasClass('js-modal-open')) {
        $modal.modal();
      } else if (($target).hasClass('js-modal-close')) {
        $modal.modal('close');
      } else {
        $modal.modal('toggle');
      }
    });
})
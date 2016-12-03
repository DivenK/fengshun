$(function () {
    //控制新增的弹层
    var $modal = $('#doc-modal-1');//弹窗div  
 
    $('#btnAddManage').on('click', function (e) {        
        $modal.modal({ closeViaDimmer: 0, width: 800, height: 900});//弹起
    });

})
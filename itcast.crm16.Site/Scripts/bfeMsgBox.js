/*
 * BFE-MessageBox
 * Copyright 2014-2015
 * Authors: bushidian
 */
/* global define */

(function (define) {
    define(['jquery'], function ($) {
        return (function () {
         
            var bfeMsgBoxType = {
                error: 'error',
                info: 'info',
                success: 'success',
                warning: 'warning',
                confirm: 'confirm'
            };

            function error(content,title) {
                content = content.length > 200 ? content.substring(0, 200) + '......' : content;
                swal(title || '错误', content || '操作失败', bfeMsgBoxType.error);
            }

            function info(content,title) {
             
                swal(title || '提示', content || '提示', bfeMsgBoxType.info);
            }

            function success(title,content) {
                toastr.success(content, title);
            }

            function confirm(content, callback, title) {
                swal({
                    title: title || '您确定',
                    text: content,
                    type: bfeMsgBoxType.warninge,
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes",
                    cancelButtonText: "No",
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function(isConfirm) {
                    if (isConfirm && typeof (callback) == 'function') {
                        callback(isConfirm);
                    }
                    swal.close();
                });
            }

            function warning(content, title) {

                toastr.warning(content, title);
            }

            ////////////////

            var bfeMsgBox = {
                info: info,
                error: error,
                warning: warning,
                confirm: confirm,
                success: success,
                version: '1.1'
            };

            return bfeMsgBox;

         
        })();
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require('jquery'));
    } else {
        window['bfeMsgBox'] = factory(window['jQuery']);
    }
}));


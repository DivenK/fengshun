using itcast.crm16.IServices;
using itcast.crm16.model;
using itcast.crm16.WebHelper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using itcast.crm16.WebHelper.Attrs;

namespace itcast.crm16.Site.Areas.admin.Controllers 
{
    [SkipCheckLogin]
    public class ManageController : BaseController
    {
        public ManageController(IsysMenusServices mMer, IManageServices manageSer) : base(mMer)
        {
            base.manageSer = manageSer;
        }


        //
        // GET: /admin/Manage/

        public ActionResult Index()
        {
            int count = 0;
            //获取企业数据信息
            List<Manage> manageList = manageSer.QueryByPage(1, 15, out count, c => true, c => c.id);
            ViewBag.manageList = manageList;

            return View();
        }

        ///// <summary>
        ///// 添加或者修改页面
        ///// </summary>
        ///// <param name="manageID"></param>
        ///// <param name="type">0表示修改，1表示添加</param>
        ///// <returns></returns>
        //public ActionResult Edit(int manageID, int type)
        //{
        //    ViewBag.Manage = null;
        //    if (type == 0)
        //    {
        //        ViewBag.Title = "修改";
        //        Manage entity = manageSer.QueryWhere(c => c.id == manageID).FirstOrDefault();
        //        ViewBag.Manage = entity;
        //    }
        //    else
        //    {
        //        ViewBag.Title = "添加";
        //    }

        //    return View();
        //}

    }
}

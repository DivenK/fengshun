using itcast.crm16.IServices;
using itcast.crm16.model;
using itcast.crm16.WebHelper;
using itcast.crm16.WebHelper.Attrs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

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

    }
}

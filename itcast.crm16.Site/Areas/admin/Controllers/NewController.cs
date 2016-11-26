using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using itcast.crm16.WebHelper;
using itcast.crm16.WebHelper.Attrs;
using itcast.crm16.IServices;
namespace itcast.crm16.Site.Areas.admin.Controllers
{
    [SkipCheckLogin]
    public class NewController : BaseController
    {
        //
        // GET: /admin/New/
        public NewController(IsysMenusServices mSer,INewServices news,INewTypeServices newsType):base(mSer)
        {
            base.news = news;
            base.newsType = newsType;
        }
        public ActionResult Index()
        {
           ViewBag.newList=news.QueryWhere(c => c.IsDelete != 0);
            return View();
        }

    }
}

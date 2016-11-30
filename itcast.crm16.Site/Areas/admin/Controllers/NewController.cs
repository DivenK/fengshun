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
        public NewController(IsysMenusServices mSer, INewServices news, INewTypeServices newsType) : base(mSer)
        {
            base.news = news;
            base.newsType = newsType;
        }
        public ActionResult Index()
        {
            ViewBag.newList = news.QueryWhere(c => c.IsDelete == 0);
            ViewBag.TotalPage = TotalPage = (ViewBag.newList as List<model.New>).Count;
            ViewBag.PageSize = pageSize;
            ViewBag.PageCount = GetPageCount();
            return View();
        }
        /// <summary>
        /// 更新
        /// </summary>
        /// <param name="newModel"></param>
        /// <param name="id"></param>
        /// <returns></returns>
        [ValidateInput(false)]//防止对文本验证，保存不了HTML元素
        public ActionResult UpdateNews(string Name, string Conent, int TypeId, int id)
        {
            model.New newModel = new model.New();
            newModel.Name = Name;
            newModel.Conent = Conent;
            newModel.TypeId = TypeId;
            newModel.id = id;
            newModel.IsComment = true;
            newModel.display = 0;
            newModel.Author = "User";
            newModel.Creator = "User";
            try
            {
                if (id > 0)
                {
                  
                    news.Edit(newModel, new string[] { "Name", "Conent", "IsComment", "TypeId", "display" });
                }
                else
                {
                    news.Add(newModel);
                }
                news.SaveChanges();
                return WriteSuccess("成功");
            }
            catch (Exception ex)
            {
                return WriteError(ex.Message);
            }
        }

        /// <summary>
        /// 软删除
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ActionResult DelelNews(int id)
        {
            if (id > 0)
            {
                model.New model = new crm16.model.New() {
                id=id,
                IsDelete=1};
                try
                {
                    news.Edit(model, new string[] { "IsDelete" });
                    news.SaveChanges();
                    return WriteSuccess("删除成功");
                }
                catch (Exception ex)
                {
                    return WriteError("删除失败："+ex.Message);
                }
            }
            return WriteError("删除失败:选择值参数为空，请在尝试");
        }

        /// <summary>
        /// 在网站显示状态
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ActionResult UpdateDispay(int id)
        {
            if (id > 0)
            {
                model.New model = new crm16.model.New()
                {
                    id = id,
                    display = 1
                };
                try
                {
                    news.Edit(model, new string[] { "display" });
                    news.SaveChanges();
                    return WriteSuccess("设置成功");
                }
                catch (Exception ex)
                {
                    return WriteError("设置失败：" + ex.Message);
                }
            }
            return WriteError("设置失败:选择值参数为空，请在尝试");
        }
    }
}

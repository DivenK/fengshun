//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace itcast.crm16.Services
{
    using System;
    using System.Collections.Generic;
    
    using itcast.crm16.IServices;
    using itcast.crm16.model;
    using itcast.crm16.IRepository;
    public partial class VipUserServices:BaseBLL<VipUser>,IVipUserServices
    {
    IVipUserRepository dal;
      public VipUserServices(IVipUserRepository dal)
        {
    	this.dal=dal;
    	base.basedal=dal; 
    	}
       
       
       
       
       
       
    }
}

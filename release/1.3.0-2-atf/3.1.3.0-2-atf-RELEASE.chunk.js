/*! 1.3.0-2-atf-RELEASE */
(window.oilJsonp=window.oilJsonp||[]).push([[3],{132:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getGroupList=function(){var e=(0,r.getPoiGroupName)(),t=(0,o.getGlobalOilObject)("oilCachedGroupList");return new Promise(function(i){t||!(0,r.isPoiActive)()?i(t):(0,o.fetchJsonData)((0,r.getPoiListDirectory)()+"/"+e+".json").then(function(e){t=e.companyList,(0,o.setGlobalOilObject)("oilCachedGroupList",t),e.iabVendorWhitelist&&e.iabVendorWhitelist.length&&(0,r.setIabVendorWhitelist)(e.iabVendorWhitelist),e.iabVendorBlacklist&&e.iabVendorBlacklist.length&&(0,r.setIabVendorBlacklist)(e.iabVendorBlacklist),i(t)}).catch(function(t){(0,n.logError)("OIL getGroupList failed and returned error: "+t+'. Group "'+e+'" not found! Please add the JSON file with the correct name.'),i([])})})};var o=i(5),n=i(2),r=i(13)}}]);
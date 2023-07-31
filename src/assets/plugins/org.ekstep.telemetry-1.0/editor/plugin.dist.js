org.ekstep.pluginframework.pluginManager.registerPlugin({"id":"org.ekstep.telemetry","ver":"1.0","author":"Sunil A S","title":"Telemetry Plugin","description":"","publishedDate":"","editor":{"main":"editor/plugin.js"}},org.ekstep.contenteditor.basePlugin.extend({type:"org.ekstep.telemetry",service:void 0,initialize:function(){this.service=ecEditor.getService("telemetry"),ecEditor.addEventListener("content:load:complete",this.registerEvents,this),ecEditor.addEventListener("content:load:complete",this.logPluginErrors,this)},registerEvents:function(){var n=this;ecEditor.addEventListener("object:selected",function(e,t){t&&t.id&&""!=t.id&&n.interactEvent("select","","plugin",t.type,t.ver,t.id)},this),ecEditor.addEventListener("object:modified",function(e,t){t&&t.id&&""!=t.id&&n.interactEvent("modify","","plugin",t.type,t.ver,t.id)},this),ecEditor.addEventListener("object:unselected",function(e,t){t&&t.id&&""!=t.id&&n.interactEvent("unselect","","plugin",t.type,t.ver,t.id)},this),ecEditor.addEventListener("object:removed",function(e,t){t&&t.id&&""!=t.id&&(t=ecEditor.getPluginInstance(t.id),n.service.pluginLifeCycle({type:"remove",pluginid:t.manifest.id,pluginver:t.manifest.ver,objectid:t.id,assetid:t.getAttribute("asset"),stage:ecEditor.getCurrentStage().id,containerid:"",containerplugin:""}))},this),ecEditor.addEventListener("stage:removed",function(e,t){t&&t.stageId&&""!=t.stageId&&(t=ecEditor.getPluginInstance(t.stageId),n.service.pluginLifeCycle({type:"remove",pluginid:t.manifest.id,pluginver:t.manifest.ver,objectid:t.id,assetid:t.getAttribute("asset"),stage:t.id,containerid:"",containerplugin:""}))},this),ecEditor.addEventListener("stage:delete",function(e,t){t&&t.stageId&&""!=t.stageId&&n.interactEvent("click","delete","plugin","org.ekstep.stage","1.0",t.stageId)},this),ecEditor.addEventListener("stage:duplicate",function(e,t){t&&t.stageId&&""!=t.stageId&&n.interactEvent("duplicate","","plugin","org.ekstep.stage","1.0",t.stageId)},this),ecEditor.addEventListener("stage:select",function(e,t){t&&t.stageId&&""!=t.stageId&&n.interactEvent("select","","plugin","org.ekstep.stage","1.0",t.stageId)},this),ecEditor.addEventListener("stage:reorder",function(e,t){t&&t.stageId&&""!=t.stageId&&n.interactEvent("modify","reorder","stage","org.ekstep.stage","1.0",t.stageId)},this),ecEditor.addEventListener("plugin:load",function(e,t){t&&n.service.pluginLifeCycle({type:"load",pluginid:t.plugin,pluginver:t.version,objectid:"",stage:"",containerid:"",containerplugin:""})},this),ecEditor.addEventListener("plugin:add",function(e,t){var i=ecEditor.getCurrentStage()?ecEditor.getCurrentStage().id:"";t&&n.service.pluginLifeCycle({type:"add",pluginid:t.plugin,pluginver:t.version,objectid:t.instanceId,stage:i,containerid:"",containerplugin:""})},this),ecEditor.addEventListener("plugin:error",function(e,t){var i=ecEditor.getService("content").getContentMeta(org.ekstep.contenteditor.api.getContext("contentId")).pkgVersion,i={id:org.ekstep.contenteditor.api.getContext("contentId"),ver:!_.isUndefined(i)&&i.toString()||"0",type:"Content"};n.service.error({err:t.err,errtype:"CONTENT",stacktrace:t.stackTrace||"",object:i,plugin:{id:t.plugin,ver:t.version,category:""}})},this)},interactEvent:function(e,t,i,n,r,d){this.service.interact({type:e,subtype:t,target:i,pluginid:n,pluginver:r,objectid:d,stage:ecEditor.getCurrentStage().id})},logPluginErrors:function(e,t){var i=this,n=ecEditor.getService("content").getContentMeta(org.ekstep.contenteditor.api.getContext("contentId")).pkgVersion,r={id:org.ekstep.contenteditor.api.getContext("contentId"),ver:!_.isUndefined(n)&&n.toString()||"0",type:"Content"},n=org.ekstep.pluginframework.pluginManager.getErrors();_.each(n,function(e){i.service.error({err:e.error,errtype:"CONTENT",stacktrace:e.stackTrace||"",object:r,plugin:{id:e.plugin,ver:e.version,category:""}})})}}))
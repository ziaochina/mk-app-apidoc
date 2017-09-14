module.exports = [{
    "type": "POST",
    "url": "/v1/apidoc/test",
    "title": "测试",
    "name": "test",
    "group": "webapi__apidoc",
    "permission": [{
        "name": "anyone"
    }],
    "description": "apidoc应用测试webapi接口",
    "parameter": {
        "fields": {
            "Parameter": [{
                "group": "Parameter",
                "type": "Object",
                "optional": false,
                "field": "option",
                "description": "json对象"
            }]
        },
        "examples": [{
            "title": "请求示例 ",
            "content": "{\n    param1 : 'aa',\n    param2 : 2\n}",
            "type": "json"
        }, {
            "title": "请求说明 ",
            "content": "{\n    param1 : 'aa', //参数1\n    param2 : 2     //参数2\n}",
            "type": "json"
        }]
    },
    "success": {
        "examples": [{
            "title": "返回示例 ",
            "content": "{\n    result:true,\n    value:true\n}",
            "type": "Json"
        }, {
            "title": "返回说明",
            "content": "{\n    result:true, //result标志，ok:true,err:false\n    value:true   //value:返回值\n}",
            "type": "Json"
        }]
    },
    "version": "0.0.0",
    "filename": "./apps/mk-app-apidoc/webapi.js",
    "groupTitle": "webapi__apidoc"
}]
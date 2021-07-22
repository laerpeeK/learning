/*
深拷贝
解决复制对象时出现的多个变量引用同一对象的问题。
*/
function deep_clone(obj) {
    var result = JSON.parse(JSON.stringify(obj))
    return result;
}

/*
随机字符串生成
给DOM节点生成唯一ID时使用
*/
function randomString(len) {
    len = len || 32;
    //****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}


/*
创建封面
根据要生成的模板不同，设置不同的type，
函数内根据type，再对封面内的['doms']进行处理。
*/

function create_top_page(pages, type, program_detail) {
    if(type === 'JONGTAY_A4_8') {
        //

    }
    return pages;
}

/*
创建尾页
根据要生成的模板不同，设置不同的type，
函数内根据type，再对封面内的['doms']进行处理。
*/
function create_last_page(pages, type, program_detail) {
    if(type === 'JONGTAY_A4_8') {
        //
    }
    return pages;
}

/*
创建空间页和产品页
根据要生成的模板不同，设置不同的type，
函数内根据type，再对封面内的['doms']进行处理。
*/
function create_center_page(pages,type, program_detail, page_refrence, space_index) {
    if(type === 'JONGTAY_A4_8') {
        //预处理


            //产品页数量


            //空间页填充


            //修改的地方
            {

            }

            //产品页添加dom节点


            //产品页dom节点id添加



            //产品页填充


                //第一行
                {

                }

                //第二行
                {

                }


                //空间页…&产品页公有dom节点加载


                //product_page doms节点 id添加


        }
    return pages;
}

//用于存储各个模板的样式信息
let Store = {
    JONGTAY_A4_8: {}
}

/*
中泰PPT 各个DOM元素 及其样式声明
static: 空间页，产品页公有DOM元素
space: 空间页私有DOM元素
product: 产品页私有DOM元素
*/

Store['JONGTAY_A4_8'] = {
    'static': {},
    'space': {},
    'product': {},
}

/*
真正调用的函数
model: 从ppt模板库拉去的模板数据
program_detail: 方案内数据信息
type: 要生成的ppt类型
*/
function purify(model, program_detail, type) {

    //pages

    //封面
    pages = create_top_page(pages, type, program_detail);

    //获取第一个空间页索引  --- 15


    //空间页&产品页添加
    pages = create_center_page(pages,type, program_detail, page_refrence, space_index);
    //尾页
    pages = create_last_page(pages, type, program_detail);
    return pages
}


//return {purified: purify(model, program_detail, type)}
// 数组排序
export const sortArr = (arr) =>{
    function sortNum(a,b){
         return a - b
    }
    return arr.sort(sortNum);
}

// 数组排序
export const sortArrObj = (arr,objPropery) =>{
    function sortNum(a,b){
         return a[objPropery] - b[objPropery]
    }
    return arr.sort(sortNum);
}

//四舍六入五成双
export const evenRound = (num, decimalPlaces) =>{
    var d = decimalPlaces || 0;
    var m = Math.pow(10, d);
    var n = +(d ? num * m : num).toFixed(8); // Avoid rounding errors
    var i = Math.floor(n), f = n - i;
    var e = 1e-8; // Allow for rounding errors in f
    var r = (f > 0.5 - e && f < 0.5 + e) ?
                ((i % 2 == 0) ? i : i + 1) : Math.round(n);
    return d ? r / m : r;
}

//四舍五入 并保留几小数 decimalPlaces 为小数位数
export const roundDigit = (num,decimalPlaces) =>{
    let digit = Math.pow(10,decimalPlaces);
    return Math.round(num * digit)/digit;    
}

// 对数字修改，展示指定位数的小数位 
export const numDecimal = (val,decimal) =>{
    if((val == '' && val != 0) || val == undefined)return;

    let num = 0;
    val = val.toString();
    if(val.indexOf('.')>-1){
        let dec =  val.split('.');
        if(dec[1].length>decimal)return num = dec[0]+"."+dec[1].toString().splice(0,decimal);
        else return num = val + getNumString(0,(decimal-dec[1].length));
    }
    else num =  val + '.' + getNumString(0,decimal);
    return num 
}

// 
export const getNumString = (valStr,num)=>{
    let str = '';
    for(var i=0;i<num;i++){
        str += valStr;
    }
    return str;
}

// 检验日期格式是否正确
export const dateCheck = (val,type) =>{
    if(val == ''|| val == undefined)return false;
    debugger
    let result = [],d = '',dj = true;
    // val.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    switch(type){
        case 'yyyy-MM-dd':
            result = val.match(/^(\d{4})-(\d{2})-(\d{2})$/);    
            break;
        case 'yyyy-MM-dd HH':
            result = val.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2})$/);
            break;
    }
    if (result == null)return false; 

    switch(type){
        case 'yyyy-MM-dd':
            d = new Date(result[1], result[2] - 1, result[3]);
            dj = (d.getFullYear() == result[1] && (d.getMonth() + 1) == result[2] && d.getDate() == result[3]);
            break;
        case 'yyyy-MM-dd HH':
            d = new Date(result[1], result[2] - 1, result[3],result[4]);
            dj = (d.getFullYear() == result[1] && (d.getMonth() + 1) == result[2] && d.getDate() == result[3] && d.getHours() == result[4]);
            break;
    }
    return dj;
}

// 时间转字符串
export const dateSwitchString = (data,type) =>{
    if((data == '' || data== undefined) && (type == undefined || type == ''))return '';

    var date = '';    
    if(type == 'new' || type == 'new1')date = new Date();
    else date = new Date(data);

    var y = date.getFullYear(); 
    var m = date.getMonth() + 1; 
    var d = date.getDate();  
    var h = date.getHours(); 
    var minute = date.getMinutes(); 
    var s = date.getSeconds(); 

    m = m < 10 ? ('0' + m) : m;  
    d = d < 10 ? ('0' + d) : d; 

    h = h < 10 ?('0'+h):h;
    minute = minute < 10 ? ('0' + minute) : minute;
    s = s < 10 ? ('0' + s) : s;

    if(type == 'new')return y + '年' + m + '月' + d+'日 '+h+':'+minute; 
    else if(type == 'new1')return y + '-' + m + '-' + d+' '+h+':'+minute+':'+s; 
    else if(type == 'day')return y + '-' + m + '-' + d;
    else return y + '-' + m + '-' + d+' '+h+':'+minute+':'+s; 
}

// 时间差计算
export const timeDiffer = (start,end)=>{
    if(start== null || end == null || start=='' || end=='')return '';
    let timeDiff = (new Date(end) - new Date(start))/1000,diffStr = '';

    if(timeDiff == 0)return '';

    if((timeDiff / 86400)>1){
        diffStr = (timeDiff/86400).toFixed(0) +'天';
    }
    if((timeDiff % 86400 / 3600)>1){
        diffStr += (timeDiff % 86400 / 3600).toFixed(0) + '小时'
    }
    if((timeDiff % 86400 % 3600 / 60)>1){
        diffStr += (timeDiff % 86400 % 3600 /60).toFixed(0) + '分'
    }
    return diffStr;
}

//简单的计算公式解析  "样品试验数据-空白试验数据"
export const simpMath = (str) =>{    
    // 清楚空格
    let formula = str.replace(/\s+/g,''),arr=[],symbol;

    if(str.indexOf('AVERAGE') != -1){     //平均值     
        arr = [formula.replace(/AVERAGE/g,'').slice(1,-1)];
        symbol = 'AVERAGE';   
    }
    return [arr,symbol]
}

// 计算修约
export const countRound = (val,type,numBit) =>{
     switch(type){
        //修约为指定小数位数[四舍五入] 
        case 'F':           
            val = roundDigit(val,numBit);             
            break;
        // 修约 四舍六入五成双
        case 'B':
            val = evenRound(val,numBit);         
            break;
    }
    return val;
}

//数组筛选 获取相同数据
export const getArr = (arrPerson,objPropery,objValue) =>{
    let arr = [];
    arrPerson.forEach(item => {
        if(item[objPropery] == objValue)arr.push(item);
    });
    return arr;
}

//数组筛选 获取不相同数据
export const removeArr = (arrPerson,objPropery,objValue) =>{
    let arr = [];
    arrPerson.forEach(item => {
        if(item[objPropery] != objValue)arr.push(item);
    });
    return arr;
}

//数组筛选
export const deleteArr = (arrPerson,objPropery,objValue) =>{
    let arr = [];
    arrPerson.forEach(item => {
        if(item[objPropery] != objValue)arr.push(item);
    });
    return arr;
}

//表格默认项设置
export const setTableCol =(colArr,localStr,defaultArr)=>{
    let arr = [],showColArr = [];
    showColArr = [{type:'selection', width: 40, align: 'center'}];

    if(localStorage.getItem(localStr)!=null){
        arr = localStorage.getItem(localStr).split(',');

        if(arr[arr.length-1]>colArr.length - 1){    //清除旧的无效数据
            localStorage.removeItem(localStr);
            arr = defaultArr;
        }
    }
    else arr = defaultArr;

    arr.forEach(item=>{
        showColArr.push(colArr[item]);   
    })
    return showColArr
}

export const setTableColItem = (colArr,localStr,defaultArr) =>{
    let arr = [],showColArr = [];

    if(localStorage.getItem(localStr)!=null){
        arr = localStorage.getItem(localStr).split(',');

        if(arr[arr.length-1]>colArr.length - 1){    //清除旧的无效数据
            localStorage.removeItem(localStr);
            arr = defaultArr;
        }
    }
    else arr = defaultArr;

    arr.forEach(item=>{
        showColArr.push(colArr[item]);   
    })
    return showColArr
}

//表格项设置
export const setTableItem = (colArr,msg) =>{
    let showCol = [];
    showCol = [{type: 'selection', width: 40, align: 'center'}];

    msg.forEach(item=>{
        showCol.push(colArr[item])
    });
    
    return showCol
}

export const setTableItemTwo = (colArr,msg) =>{
    let showCol = [];

    msg.forEach(item=>{
        showCol.push(colArr[item])
    });
    
    return showCol
}

// 两数组判断是否相同
export const isContained =(a, b)=>{
    if(!(a instanceof Array) || !(b instanceof Array)) return false;
    if(a.length != b.length) return false;
 
    for(var i = 0, len = b.length; i < len; i++){
        if(a.indexOf(b[i]) == -1 && b.indexOf(a[i]) == -1) {
            return false;
        }
    }
    return true;
}

export const errorInfo = (data) =>{
    let errInfo = '';
    switch(data){
        case 'Exception:参数异常:不能为空':
            errInfo = '参数异常:不能为空';
            break;
        case '数据行暂无变化:见证用户不能是当前登录用户':
            errInfo = '见证用户不能是当前登录用户';
            break;
        case '没有权限:签名用户密码不正确':
            errInfo = '签名用户密码不正确';
            break;
        case '没有权限:请输入正确的账号和密码':
            errInfo = '请输入正确的账号和密码';
            break;
        case '没有权限:电子签名身份校验失败':    
            errInfo = '没有权限:电子签名身份校验失败';
            break;

        case '数据行暂无变化:签名用户不能是当前登录用户':
            errInfo = '签名用户不能是当前登录用户';
            break;    
        case '失败:该方法已经有升级在未发布的版本了，请勿重新操作':
            errInfo = '该方法已经有升级在未发布的版本了，请勿重新操作';   
            break; 
        case 'Exception:未知异常':
            errInfo = '请求失败';
            break;
        case '暂无数据:流程未关联业务，无法启用':
            errInfo = '流程未关联业务，无法启用';
            break;
        case "Exception:未知异常:Column 'FieldValue' cannot be null":
            errInfo = '当前字段值为空,审批失败';
            break;    
        case '参数异常:审核代码已经被流程使用，不能禁用！':
            errInfo = '当前审批代码已使用，无法禁用！';
            break;    
        default:case '数据已存在:方法编号已经存在':
            errInfo = data;
            break;   
    }
    if(data.indexOf('Duplicate entry')>-1){
        if(data.indexOf('mobile')>-1) errInfo = '重复邮箱';
        if(data.indexOf('user_account')>-1) errInfo = '当前账号为已删除账号，请联系系统管理员进行恢复';
        if(data.indexOf('MENU_CODE')>-1)errInfo = '菜单编码重复';
        if(data.indexOf('menu_button_code')>-1)errInfo = '按钮编码重复';

        else errInfo = '重复录入';
    }
    return errInfo;
}

// 任务执行状态
export const statusText = (num)=>{
    let colorTxt, innerTxt;
    switch (num) {
      case 0:
        colorTxt = '#909399';
        innerTxt = '草稿';
        break
      case 1:
        colorTxt = '#39d384'; 
        innerTxt = '进行中';
        break
      case 2:
        colorTxt = '#ffcc00';
        innerTxt = '已完成';
        break
      case 3:
        colorTxt = '#ff9800';
        innerTxt = '已复核';
        break
      case 4:
        colorTxt = '#ff9800';
        innerTxt = '复核并锁定';
        break
      case 5:
        colorTxt = '#ff4949';
        innerTxt = '重做';
        break  
      case 6:
        colorTxt = '#2684ff';
        innerTxt = '已审核';
        break  
      case -1:
        colorTxt = '#333333';
        innerTxt = '已废弃';
        break
    }
    return [colorTxt,innerTxt];
}

// 提取字符中汉字
export const GetChinese = (strValue)=> {  
    if(strValue!= null && strValue!= ""){  
        var reg = /[\u4e00-\u9fa5]/g;   
        return strValue.match(reg).join("");  
    }  
    else  
        return "";  
}  

//  筛去数字及特殊符号 
export const removeNumSymbol = (strVal) =>{
    if(strVal){
        let symReg = /[%&\(\)\.*-+=?$\/0-9]/g;
        return strVal.replace(symReg,'');
    }   
    else return '';
}
const lower = (val) =>val.toLowerCase();

// 当数值大于99时 显示99+
const numSwitch = (val) =>{
    if(val > 99)return '99+';
    else return val;
}

const valEmpty = (val) =>{
    if((val == '' && val != 0) || !val)return '--';
    else return val;
}

// 字段截取
const strSub = (value,num)=> {
    if(!value)return '';
    else return (value.length>num?value.substring(0,num)+'...':value);
}

const strSwitch = (value)=>{
    if(!value)return 'N/A';
    else return value
}

export {
    lower,
    numSwitch,
    valEmpty,
    strSub,
    strSwitch
}
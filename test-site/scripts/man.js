// querySelector()返回文档中与指定选择器或选择器组匹配的地一个Element对象。若找不到，返回null。
// 采用的是深度优先遍历

/* 点击图片时切换图片 */
// 1.获取图片的引用
let myImage = document.querySelector('img');

// 2.当点击图片时，切换图片
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === './images/yanglao.jpg') {
        myImage.setAttribute('src', './images/yanglao2.jpg');
    } else {
        myImage.setAttribute('src', './images/yanglao.jpg');
    }
}

/* 个性化标题 */
// 1.获取按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 2.定义函数 需要避免用户输入名字时按到取消和未输入就按确定导致用户名错误的情况
function setUserName() {
    let myName = prompt('请输入您的名字。');
    if(!myName || myName === null) {
        setUserName()
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + '，欢迎您来到养老宝！';
    }
}

// 3.初始化代码
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + '，欢迎您来到养老宝！';
}

//  4.为按钮添加onclick事件处理器
myButton.onclick = function() {
    setUserName();
}
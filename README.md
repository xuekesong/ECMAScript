# 介绍
ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会）在标准ECMA-262中定义的脚本语言规范。这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMA-262标准的实现和扩展。
# 历史版本
主要的几个历史版本如下：
1. 2015年6月：ECMAScript 2015（ES2015），第 6 版，最早被称作是 ECMAScript 6（ES6），添加了类和模块的语法，其他特性包括迭代器，Python风格的生成器和生成器表达式，箭头函数，二进制数据，静态类型数组，集合（maps，sets 和 weak maps），promise，reflection 和 proxies。作为最早的 ECMAScript Harmony 版本，也被叫做ES6 Harmony。
2. 2016年6月：ECMAScript 2016（ES2016），第 7 版，多个新的概念和语言特性。
3. 2017年6月：ECMAScript 2017（ES2017），第 8 版，多个新的概念和语言特性。
4. 2018年6月：ECMAScript 2018 （ES2018），第 9 版，包含了异步循环，生成器，新的正则表达式特性和 rest/spread 语法。
5. 2019年6月：ECMAScript 2019 （ES2019），第 10 版。
# 主要特性
  ## ES6(ES2015)
  1. let和const
    <p>在ES6以前，JS只有var一种声明方式，但是在ES6之后，就多了let跟const这两种方式。用var定义的变量没有块级作用域的概念，而let跟const则会有，因为这三个关键字创建是不一样的。[example](./js/var_let_const.js)</p>
    ![变量特性](./img/var_let_const.png)
  2. 类（class）
    <p>写法进行了更改，在ES6之前，如果我们要生成一个实例对象，传统的方法就是写一个构造函数，通过构造函数去绑定方法；但是在ES6之后，我们可以通过类的形式直接书写，[例子如下](./js/class.js)：</p>
  构造函数  

          function Person(name, age) {
            this.name = name
            this.age = age
          }
          Person.prototype.information = function () {
            return 'My name is ' + this.name + ', I am ' + this.age
          }

    类  
   
          class Person {
            constructor(name, age) {
              this.name = name;
              this.age = age;
            }

            information() {
              return `My name is ${this.name}, I am ${this.age}`;
            }
          }

          let person = new Person('珂', 18);

  3. 箭头函数
    <p>箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或 new.target。这些函数表达式更适用于那些本来需要匿名函数的地方，并且它们不能用作构造函数。[code](./js/arrow_function.js)</p>
   
    let list = [1, 2, 3, 4, 5, 6, 7];
    let newList = list.map(function (item) {
      return item * item;
    })
    
    // es6
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const newArr = list.map(item => item * item);
    
  4. 函数参数默认值
    <p>定义函数时可给参数设置默认值[example](./js/function_defaults.js)</p>  
    
    function config (data = 'data is empty') {
      return data;
    } 
  5. 模板字符串
    <p>主要是拼接字符串的问题，不用再使用+进行字符串与变量值的拼接，而是直接使用``${}``来展示</p>
   
    let name = '拼接字符串';
    let age = 20;
    const info = `My name is ${name}, I am ${age}`;
    
  6. 解构赋值
    <p>通过解构赋值，可以将属性/值从这个对象/数组中取出，赋值给其他变量[example](./js/destructuring.js)</p>
    
    let a = 10;
    let b = 20;
    [a, b] = [b, a];
    
  7. 模块化
    <p>[es6之前js并没有模块化的概念，有的也只是社区定制的类似的CommonJS和AMD之类的规则，通过exports可导出模块。](./js/module.js)[es6之后可通过export导出模块，不过该方式必须在script的type=module类型下面才可以正确执行。](./js/module.html)</p>
  8. [扩展操作符](./js/spread_operator.js)
    <p>扩展操作符可以在函数调用/数组构造时，将数组表达式或者string在语法层面展开；还可以在构造字面量对象时，将对象表达式按key-value的方式展开。</p>
  9. Promise
    <p>Promise 是ES6提供的一种异步解决方案，比回调函数更加清晰明了。共有三种状态:</p>
    1. 等待中（pending）
    2. 完成（resolved）
    3. 拒绝（rejected）
    <p>一旦从等待状态变成为其他状态就永远不能更改状态了，也就是说一旦状态变为 resolved 后，就不能再次改变</p>
    
    new Promise((resolve, reject) => {
      resolve('success')
      // 无效
      reject('reject')
    })
    
    <p>当我们在构造Promise的时候，构造函数内部的代码是立即执行的</p>
    
    new Promise((resolve, reject) => {
      resolve('success');
    })
    console.log('finish');  
    
    <p>Promise实现了链式调用，也就是说每次调用then之后返回的都是一个Promise，并且是一个全新的Promise，原因也是因为状态不可变。如果你在then中 使用了return，那么return的值会被Promise.resolve()包装</p>
    
    Promise.resolve(1)
      .then(res => {
        console.log(res) // => 1
        return 2 // 包装成 Promise.resolve(2)
      })
      .then(res => {
        console.log(res) // => 2
      })
      

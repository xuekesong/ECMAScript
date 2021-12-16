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
    ```javascript
      function Person(name, age) {
        this.name = name
        this.age = age
      }
      Person.prototype.information = function () {
        return 'My name is ' + this.name + ', I am ' + this.age
      }
    ```
    类
    ```javascript
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
      console.log(person.information());
    ```
  3. 箭头函数
    <p>箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或 new.target。这些函数表达式更适用于那些本来需要匿名函数的地方，并且它们不能用作构造函数。[code](./js/arrow_function.js)</p>
    ```javascript
    let list = [1, 2, 3, 4, 5, 6, 7];
    let newList = list.map(function (item) {
      return item * item;
    })
    ```
    ```javascript
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const newArr = list.map(item => item * item);
    ```
  4. 函数参数默认值
  <p>定义函数时可给参数设置默认值[example](./js/function_defaults.js)</p>
      function config (data = 'data is empty') {
        return data;
      } 
  5. 模板字符串
  <p>主要是拼接字符串的问题，不用再使用+进行字符串与变量值的拼接，而是直接使用``${}``来展示</p>
  ```javascript
    let name = '拼接字符串';
    let age = 20;
    const info = `My name is ${name}, I am ${age}`;
  ```
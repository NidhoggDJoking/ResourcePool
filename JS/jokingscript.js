// 代码片段导入


// 给定一个 key 和一个 set 作为参数，给定上下文时调用它们。主要用于函数组合。使用闭包以存储的参数调用存储的 key
const call = (key, ...args) => context => context[key](...args);

// 将接受数组的函数改变为可变参数函数。给定一个函数，返回一个闭包，将所有输入收集到一个接受函数的数组中
const collectInto = fn => (...args) => fn(args);

// flip 接受一个函数参数，然后将该函数第一个参数作为最后一个参数。（注：翻转参数）返回一个接受可变参数输入的闭包，并且在应用其余参数之前将最后一个参数作为第一个参数
const flip = fn => (...args) => fn(args.pop(), ...args);

// 执行从左到右的函数组合。使用Array.reduce（）与展开操作符(...)来执行从左到右的函数组合。第一个(最左边的)函数可以接受一个或多个参数；其余的函数必须是一元函数。
const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));

// 转换一个异步函数，以返回一个 promise 。使用柯里化返回一个函数，这个函数返回一个调用原始函数的 Promise 。 使用 ...rest 运算符传入所有参数。在 Node 8+ 中，你可以使用 util.promisify
const promisify = func => (...args) => new Promise((resolve, reject) => func(...args, (err, result) => (err ? reject(err) : resolve(result))));

// 接受一个可变参数函数并返回一个闭包，该闭包接受一个参数数组映射到该函数的输入。使用闭包和展开运算符 (...) 将参数数组映射到函数的输入
const spreadOver = fn => argsArr => fn(...argsArr);

// 把一个数组分块成指定大小的小数组。使用 Array.from() 创建一个新的数组，它的长度就是生成 chunk(块) 的数量。 使用 Array.slice() 将新数组的每个元素映射到长度为 size 的 chunk 中。 如果原始数组不能均匀分割，最后的 chunk 将包含剩余的元素。
const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));

// 从数组中移除 falsey 值元素。使用 Array.filter() 过滤掉数组中所有 假值元素(false, null, 0, "", undefined, 和 NaN)
const compact = arr => arr.filter(Boolean);

// 根据给定的函数对数组的元素进行分组，并返回每个分组中元素的数量。使用 Array.map() 将数组的值映射到函数或属性名称。 使用 Array.reduce() 创建一个对象，其中的键是从映射的结果中产生的
const countBy = (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => { acc[val] = (acc[val] || 0) + 1; return acc;}, {});

// 计算数组中值的出现次数。每次遇到数组中的某个特定值时，使用 Array.reduce() 来递增计数器
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a + 0), 0);

// 深度平铺一个数组。使用递归。 通过空数组([]) 使用 Array.concat() ，结合 展开运算符( ... ) 来平铺数组。 递归平铺每个数组元素。
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

// 返回两个数组之间的差异。根据数组 b 创建一个 Set 对象，然后在数组 a 上使用 Array.filter() 方法，过滤出数组 b 中不包含的值
const difference = (a, b) => {const s = new Set(b); return a.filter(x => !s.has(x));};

// 过滤出数组中比较函数不返回 true 的所有值。 类似于difference ,除了接受一个 comparator （比较函数）。使用 Array.filter() 和 Array.findIndex() 来查找合适的值。
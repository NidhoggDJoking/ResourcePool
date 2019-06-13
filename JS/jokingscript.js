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
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

// 返回数组的所有不同值。使用 ES6 的 Set 和 ...rest 操作符剔除重复的值
const distinctValuesOfArray = arr => [...new Set(arr)];

// 删除数组中的元素，直到传递的函数返回 true 。 返回数组中的其余元素。循环访问数组，使用 Array.slice() 在数组中从第一个元素开始删除，直到函数的返回值为 true。 返回其余的元素
const dropElements = (arr, func) => { while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1); return arr;};

// 返回从右开始删除 n 个元素的新数组。检查 n 是否小于给定数组的长度，并且使用 Array.slice() 来从右开始删除指定数量的元素
const dropRight = (arr, n = 1) => arr.slice(0, -n);

// 返回数组中的每个第 n 个元素。使用 Array.filter() 创建一个包含给定数组的每个第 n 个元素的新数组
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

// 过滤掉数组中的非唯一值。使用 Array.filter() 滤除掉非唯一值，使数组仅包含唯一值
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

// 返回 提供的函数返回真(truthy)值的最后一个元素。使用 Array.filter() 移除 fn 返回 falsey 值的元素，Array.slice(-1) 得到最后一个元素
const findLast = (arr, fn) => arr.filter(fn).slice(-1);

// 将数组平铺到指定的深度使用递归，为每个深度级别 depth 递减 1 。 使用 Array.reduce() 和 Array.concat() 来合并元素或数组。 基本情况下，depth 等于 1 停止递归。 省略第二个参数，depth 只能平铺到 1 (单层平铺) 的深度
const flatten = (arr, depth = 1) => depth != 1 ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flatten(v, depth - 1) : v), []) : arr.reduce((a, v) => a.concat(v), []);

// 从数组的最后一个元素开始，为每个数组元素执行一次提供的函数。使用 Array.slice(0) 克隆给定的数组，Array.reverse() 反转数组，Array.forEach() 遍历这个反向数组
const forEachRight = (arr, callback) => arr.slice(0).reverse().forEach(callback);

// 根据给定的函数对数组元素进行分组。使用 Array.map() 将数组的值映射到函数或属性名称。使用 Array.reduce() 来创建一个对象，其中的 key 是从映射结果中产生
const groupBy = (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {acc[val] = (acc[val] || []).concat(arr[i]);return acc;}, {});

// 返回数组的第一个元素。使用 arr[0] 返回传递数组的第一个元素
const head = arr => arr[0];

// 返回数组中所有 val 的索引。 如果 val 从不出现，则返回 [] 。使用 Array.forEach() 循环元素和 Array.push() 来存储匹配元素的索引。 返回索引数组
const indexOfAll = (arr, val) => {const indices = [];arr.forEach((el, i) => el === val && indices.push(i));return indices;};

// 返回一个数组中除了最后一个元素以外的所有元素。使用 arr.slice(0,-1) 返回排除了最后一个元素的数组
const initial = arr => arr.slice(0, -1);

// 初始化一个给定行数和列数，及值的二维数组。使用 Array.map() 生成 h 行，其中每个行都是一个长度为 w 的新数组。 如果未提供值 val ，则默认为 null
const initialize2DArray = (w, h, val = null) => Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));

// 初始化一个数组，该数组包含指定范围内的数字，包括 start 和 end ，数字间隔为 step 。使用 Array.from(Math.ceil((end+1-start)/step)) 创建一个所需长度的数组（元素的数量等于 (end-start)/step 或者 (end+1-start)/step 包括 end ）， 用 Array.map() 填充在这个范围内要求的值。 你可以省略 start 来使用默认值 0。 您可以省略 step 使用默认值 1
const initializeArrayWithRange = (end, start = 0, step = 1) => Array.from({ length: Math.ceil((end + 1 - start) / step) }).map((v, i) => i * step + start);

// 使用指定的值初始化和填充数组。使用 Array(n) 创建所需长度的数组，使用 fill(v) 以填充所需的值。 你可以忽略 val ，使用默认值 0
const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);

// 返回两个数组中都存在的元素列表。根据数组 b 创建一个 Set 对象，然后在数组 a 上使用 Array.filter() 方法，只保留数组 b 中也包含的值
const intersection = (a, b) => { const s = new Set(b);return a.filter(x => s.has(x));};

// 如果数组按升序排序，则返回 1 ;如果按降序排列则返回-1 ;如果未排序则返回0。计算前两个元素的排序方向 direction 。 使用 Object.entries() 来循环使用数组对象并对它们进行比较。 如果 direction 改变，则返回 0 ，如果直到最后一个元素， direction 没有改变，则返回 direction
const isSorted = arr => {const direction = arr[0] > arr[1] ? -1 : 1;for (let [i, val] of arr.entries())if (i === arr.length - 1) return direction;else if ((val - arr[i + 1]) * direction > 0) return 0;};

// 将数组的所有元素拼接成一个字符串并返回此字符串。 使用分隔符和结束分隔符。使用 Array.reduce() 将元素拼接成一个字符串。 省略第二个参数 separator ，则默认使用分隔符','。 省略第三个参数 end ，默认使用与separator相同的值
const join = (arr, separator = ',', end = separator) =>arr.reduce((acc, val, i) =>i == arr.length - 2 ? acc + val + end : i == arr.length - 1 ? acc + val : acc + val + separator,'');

// 返回数组中的最后一个元素。使用 arr.length - 1 来计算给定数组的最后一个元素的索引并返回
const last = arr => arr[arr.length - 1];

// 获取任何数量的可迭代对象或具有 length 属性的对象，并返回最长的一个。使用 Array.sort() 按 length 对所有参数进行排序，返回第一个（最长）元素
const longestItem = (...vals) => [...vals].sort((a, b) => b.length - a.length)[0];

// 使用一个函数将数组的值映射到对象，其键值对中，原始值作为键，映射值作为值。使用一个匿名的内部函数作用域来声明一个 undefined 的内存空间，使用闭包来存储返回值。 使用一个新的 Array 来存储带有函数映射的数组和一个逗号运算符来返回第二个步骤，而不需要从一个上下文移动到另一个上下文（由于闭包和操作顺序）
const mapObject = (arr, fn) =>(a => ((a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})))();
// concat
// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayConcat = array1.concat(array2);

// reverse
// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const arrayStraight = [1, 2, 3];
const arrayReverse = arrayStraight.reverse();

// push
// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const arrayPush = [1, 2, 3];
arrayPush.push(4, 5, 6);

// unshift
// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const arrayUnshift = [1, 2, 3];
arrayUnshift.unshift(4, 5, 6);

// shift
// 5. Дан массив ['js', 'css', ‘html']. Выведите на экран первый элемент и удалите его.
const arrayShift = ["js", "css", "html"];
console.log(arrayShift.shift());

// pop
// 6. Дан массив ['js', 'css', ‘html']. Выведите на экран последний элемент и удалите его.
const arrayPop = ["js", "css", "html"];
console.log(arrayPop.pop());

// slice
// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const array3 = [1, 2, 3, 4, 5];
const arraySlice1 = array3.slice(0, -2);

// slice
// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const array4 = [1, 2, 3, 4, 5];
const arraySlice2 = array4.slice(3);

// splice
// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const array5 = [1, 2, 3, 4, 5];
array5.splice(1, 2);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const array6 = [1, 2, 3, 4, 5];
const array7 = array6.splice(1, 3);

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const array8 = [1, 2, 3, 4, 5];
array8.splice(3, 0, "a", "b", "c");

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const array9 = [1, 2, 3, 4, 5];
array9.splice(1, 0, "a", "b");
array9.splice(6, 0, "c");
array9.splice(8, 0, "e");

// sort
// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const array10 = [3, 4, 1, 2, 7];
array10.sort();

// Object.keys
// 14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
const object = {
  js: "test",
  jq: "hello",
  css: "world",
};
const arrayKeys = (Object.keys(object));
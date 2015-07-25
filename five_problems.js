// Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.

function for_loop_summer(num_list) {
  var len = num_list.length;
  var sum = 0;
  for (i=0; i<len; i++) {
    sum += num_list[i];
  }
  return sum;
}

function while_loop_summer(num_list) {
  var i = 0;
  var sum = 0;
  while (num_list[i] !== undefined) {
    sum += num_list[i];
    i++;
  }
  return sum;
}

function recursion_summer(num_list) {
  var len = num_list.length;
  if (len == 1) {
    return num_list[0];
  }
  return recursion_summer(num_list.slice(0,1)) + recursion_summer(num_list.slice(1,len));
}

// Write a function that combines two lists by alternatingly taking elements. For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].

function list_weaver(list1, list2) {
  if (list1.length > list2.length) {
    return combine_lists(list1, list2);
  } else {
    return combine_lists(list2,list1);
  }
}
function combine_lists(long, short) {
  var i = 0;
  var new_list = [];
  while(short[i] != undefined) {
    new_list.push(short[i]);
    new_list.push(long[i]);
    i++;
  }
  return new_list.concat(long.slice(i,long.length));
}

// Problem 3
// Write a function that computes the list of the first 100 Fibonacci numbers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.

function fib_it_up(len) {
  var fib_list = [0,1];
  var i = 1;
  while (i < len-1) {
    fib_list.push(fib_list[i] + fib_list[i-1]);
    i++;
  }
  return fib_list;
}

// Problem 4
// Write a function that given a list of non negative integers, arranges them such that they form the largest possible number. For example, given [50, 2, 1, 9], the largest formed number is 95021.

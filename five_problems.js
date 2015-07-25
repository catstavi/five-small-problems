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
    new_list.push(short[i])
    new_list.push(long[i])
    i ++
  }
  return new_list.concat(long.slice(i,long.length));
}

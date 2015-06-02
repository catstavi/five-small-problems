# Problem 1
# Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.
def sum1(num_array)
  sum = 0
  for num in num_array do
    sum+=num
  end
  sum
end

def sum2(num_array)
  sum = 0
  i = 0
  while i<num_array.length
    sum += num_array[i]
    i+=1
  end
end

def sum3(num_array)
  len = num_array.length
  if len == 1
    return num_array[0]
  else
    sum3(num_array[0..len/2]) + sum3(num_array[len/2..len-1])
  end
end

# Problem 2
#
# Write a function that combines two lists by alternatingly taking elements. For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].

def combonie(a1, a2)
  i=0
  combo = []
  while !(a1[i].nil? and a2[i].nil?)
    unless a1[i].nil?
      combo << a1[i]
    end
    unless a2[i].nil?
      combo << a2[i]
    end
    i+=1
  end
  combo
end

# Problem 3
# Write a function that computes the list of the first 100 Fibonacci numbers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.

# recursion version (slower than non recursive)
def fib(n)
  answer = []
  return n if n<= 1
  fib(n-1) + fib(n-2)
end

def fib(digit)
  if digit == 1
    return [0]
  end
  answer = [0,1]
  i=0
  (digit-2).times do
    num = answer[i] + answer[i+1]
    answer << num
    i+=1
  end
  answer
end

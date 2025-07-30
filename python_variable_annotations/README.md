Python Variable Annotations
This repository contains solutions to basic and complex tasks related to type annotations in Python. Each task demonstrates the usage of type hints and annotations to make Python code more readable and maintainable.

Table of Contents
Basic Annotations - Add

Basic Annotations - Concat

Basic Annotations - Floor

Basic Annotations - To String

Define Variables

Complex Types - List of Floats

Complex Types - Mixed List

Complex Types - String and Int/Float to Tuple

Complex Types - Functions

Let's Duck Type an Iterable Object

Task Breakdown
0. Basic Annotations - Add
Description: Write a type-annotated function add that takes two floats as arguments and returns their sum as a float.

python
Copy code
# 0-add.py
def add(a: float, b: float) -> float:
    return a + b
Example:

bash
Copy code
$ cat 0-main.py
#!/usr/bin/env python3
add = __import__('0-add').add

print(add(1.11, 2.22) == 1.11 + 2.22)
print(add.__annotations__)
Output:

python
Copy code
True
{'a': <class 'float'>, 'b': <class 'float'>, 'return': <class 'float'>}
1. Basic Annotations - Concat
Description: Write a type-annotated function concat that takes two strings as arguments and returns their concatenated result.

python
Copy code
# 1-concat.py
def concat(str1: str, str2: str) -> str:
    return str1 + str2
2. Basic Annotations - Floor
Description: Write a type-annotated function floor that takes a float and returns the floor of the float as an integer.

python
Copy code
# 2-floor.py
import math

def floor(n: float) -> int:
    return math.floor(n)
3. Basic Annotations - To String
Description: Write a type-annotated function to_str that takes a float and returns its string representation.

python
Copy code
# 3-to_str.py
def to_str(n: float) -> str:
    return str(n)
4. Define Variables
Description: Define and annotate variables with specified values.

a: an integer with a value of 1

pi: a float with a value of 3.14

i_understand_annotations: a boolean with a value of True

school: a string with a value of "Holberton"

python
Copy code
# 4-define_variables.py
a: int = 1
pi: float = 3.14
i_understand_annotations: bool = True
school: str = "Holberton"
5. Complex Types - List of Floats
Description: Write a type-annotated function sum_list that takes a list of floats and returns their sum as a float.

python
Copy code
# 5-sum_list.py
from typing import List

def sum_list(input_list: List[float]) -> float:
    return sum(input_list)
6. Complex Types - Mixed List
Description: Write a type-annotated function sum_mixed_list that takes a mixed list (containing both integers and floats) and returns their sum as a float.

python
Copy code
# 6-sum_mixed_list.py
from typing import List, Union

def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    return sum(mxd_lst)
7. Complex Types - String and Int/Float to Tuple
Description: Write a type-annotated function to_kv that takes a string and an integer or float, returning a tuple where the first element is the string and the second element is the square of the number.

python
Copy code
# 7-to_kv.py
from typing import Union, Tuple

def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    return (k, v ** 2)
8. Complex Types - Functions
Description: Write a type-annotated function make_multiplier that takes a float and returns a function that multiplies a float by the multiplier.

python
Copy code
# 8-make_multiplier.py
from typing import Callable

def make_multiplier(multiplier: float) -> Callable[[float], float]:
    def multiplier_function(x: float) -> float:
        return x * multiplier
    return multiplier_function
9. Let's Duck Type an Iterable Object
Description: Annotate the element_length function’s parameters and return values with the appropriate types. The function should return a list of tuples, where each tuple contains a sequence and its length.

python
Copy code
# 9-element_length.py
from typing import Iterable, Sequence, List, Tuple

def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    return [(i, len(i)) for i in lst]

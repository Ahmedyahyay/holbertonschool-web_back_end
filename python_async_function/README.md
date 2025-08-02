Python Async Function Projects
This repository contains multiple Python asynchronous coroutine examples focused on concurrency using asyncio. The goal of these tasks is to showcase various ways to handle multiple asynchronous functions and measure performance.

File Structure
0-basic_async_syntax.py: Contains the basic asynchronous coroutine wait_random that takes an integer argument (max_delay) and waits for a random delay between 0 and max_delay seconds.

1-concurrent_coroutines.py: Implements wait_n which runs multiple wait_random coroutines concurrently and returns a list of delays in ascending order.

2-measure_runtime.py: Includes a function measure_time that calculates the total execution time of wait_n divided by the number of coroutines.

3-tasks.py: Introduces a function task_wait_random that wraps wait_random inside an asyncio task.

4-tasks.py: Modifies wait_n to use task_wait_random and returns a list of delays in ascending order.

0. The Basics of Async
Objective: Write an asynchronous coroutine that waits for a random delay between 0 and max_delay seconds.

wait_random uses the random module to generate a random float value between 0 and the max_delay.

The coroutine will return this random delay after waiting for it.

Example usage:

python
Copy code
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random

print(asyncio.run(wait_random()))
print(asyncio.run(wait_random(5)))
print(asyncio.run(wait_random(15)))
Expected Output:

Copy code
9.034261504534394
1.6216525464615306
10.634589756751769
1. Execute Multiple Coroutines Simultaneously with Async
Objective: Modify the previous code to create an async function called wait_n that runs wait_random n times concurrently with a given max_delay.

The wait_n function will collect and return a list of delays from each invocation of wait_random.

The list should be returned in ascending order, achieved by ensuring the completion order without using sort().

Example usage:

python
Copy code
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n

print(asyncio.run(wait_n(5, 5)))
print(asyncio.run(wait_n(10, 7)))
print(asyncio.run(wait_n(10, 0)))
2. Measure the Runtime
Objective: Measure the total execution time of wait_n divided by n to calculate the average runtime per task.

The measure_time function accepts n and max_delay, calls wait_n, and measures the time it takes to execute using the time module.

Example usage:

python
Copy code
import asyncio
measure_time = __import__('2-measure_runtime').measure_time

n = 5
max_delay = 9

print(measure_time(n, max_delay))
3. Tasks: Wrapping Coroutines in Tasks
Objective: Write a function task_wait_random that returns an asyncio Task wrapping the wait_random coroutine.

task_wait_random takes max_delay as an argument and returns a Task object.

Example usage:

python
Copy code
import asyncio
task_wait_random = __import__('3-tasks').task_wait_random

async def test(max_delay: int) -> float:
    task = task_wait_random(max_delay)
    await task
    print(task.__class__)

asyncio.run(test(5))
4. Tasks with Multiple Coroutines
Objective: Modify wait_n to task_wait_n to run multiple wait_random coroutines concurrently using task_wait_random.

The function task_wait_n behaves similarly to wait_n but with the Task object to handle multiple tasks.

Example usage:

python
Copy code
import asyncio
task_wait_n = __import__('4-tasks').task_wait_n

n = 5
max_delay = 6
print(asyncio.run(task_wait_n(n, max_delay)))

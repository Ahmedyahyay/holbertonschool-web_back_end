Python Async Comprehension Projects
This repository contains multiple Python asynchronous comprehension examples, focusing on using asyncio for asynchronous programming. These tasks explore async generators, async comprehensions, and running tasks concurrently.

File Structure
0-async_generator.py: Contains the coroutine async_generator that asynchronously generates random numbers after waiting for 1 second.

1-async_comprehension.py: Implements async_comprehension, which collects 10 random numbers using async comprehension over async_generator.

2-measure_runtime.py: Includes a coroutine measure_runtime that executes async_comprehension four times in parallel using asyncio.gather and measures the total runtime.

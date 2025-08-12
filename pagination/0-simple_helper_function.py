#!/user/bin/env python3

    from typing import Tuple


def index_range(page: int, page_size: int) -> tuple:
    """
    Returns a tuple of size two containg a start index and an end index.

    Args:
        page (int): The page number
        page_size (int): The number of items per page

    Returns:
        tuple: A tuple containing a start index and an edn index
    """

    if not isinstance(page, int) or not isinstance(page_size, int):
        raise TypeError("Both page and page_size must be integers")
    if page < 1 or page_size < 1:
        raise ValueError("Both page and page_size must be positive")

    start = (page - 1) * page_size
    end = page * page_size

    return (start, end)

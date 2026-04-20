Custom Linked List

My Overview:

I built this to get a better handle on how data structures actually work under the hood. In JavaScript, we usually just use arrays, but manually managing nodes and pointers forces you to think about how data is actually linked in memory.
What it does

This is a standard Singly Linked List class. I implemented the following methods:

    append(value) & prepend(value) - Adding to the ends.

    size() & head() & tail() - Quick access to the list structure.

    at(index) - Finding a specific node.

    pop() - Removes the first node and returns its value.

    contains(value) & findIndex(value) - Searching the list.

    toString() - Prints the list in a readable format: ( value ) -> ( value ) -> null.

What I found most challenging:

The most challenging part of this project was insertAt and removeAt. Dealing with "off-by-one" errors while trying to track the node before the index you want to change is a mental workout. It’s a surgical process; you have to make sure the pointers are reassigned in the exact right order, or you lose the rest of the list into the void.

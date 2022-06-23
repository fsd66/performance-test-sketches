# Queue Comparison Results

It seems that using a "Linked List"-based Queue (LLQ) versus the usual Array-based Queue (AQ) has significantly faster population time.
The AQ uses ".unshift()" to push new elements, which is an O(n) operation as the entire array has to be copied over to a new one.
Whereas the LLQ can insert and remove elements in O(1) time.
Something to be noted is that the LLQ has much longer "pop" times than the AQ and that is because instead of using a built-in function of the Array object,
we are implementing our own pointer-switching scheme.

I'm honestly confused why Javascript doesn't have more built-in "standard" data structures like Stacks (though an Array can be used as a one easily), Queues, Heaps, etc,
but maybe there's actually a good reason for that and I'm just completely ignorant to some obvious alternative...

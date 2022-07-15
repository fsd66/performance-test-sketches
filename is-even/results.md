# Is-Even Results

It seems like the modulo operator wins out over the bitwise operator in this scenario, but only barely...
The modulo operator takes about 0.0127ms to evaulate 1000 numbers, while the bitwise operator takes about 0.0133ms to do the same.
The modulo method is clearly the preferred operation as it is both slightly faster and its intent is near universally understood by programmers in this context.

Update: The performance differences between the modulo and bitwise operations in this situation is likely negligible.
Either way the conclusion still stands that the modulo operator is much more clear in its intent than the bitwise operator.

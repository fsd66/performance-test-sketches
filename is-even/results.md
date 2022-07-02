# Is-Even Results

It seems like the modulo operator wins out over the bitwise operator in this scenario, but only barely...
The modulo operator takes about 0.0127ms to evaulate 1000 numbers, while the bitwise operator takes about 0.0133ms to do the same.
The modulo method is clearly the preferred operation as it is both slightly faster and its intent is near universally understood by programmers in this context.

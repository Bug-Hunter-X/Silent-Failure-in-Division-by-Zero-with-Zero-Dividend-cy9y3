# Silent Failure in Division by Zero with Zero Dividend

This repository demonstrates an uncommon JavaScript error: a silent failure when dividing zero by zero.  The `foo` function returns 0 instead of handling this edge case properly (e.g., throwing an error or returning `NaN`). This can lead to unexpected and difficult-to-debug issues in applications.

The `bug.js` file contains the faulty code, while `bugSolution.js` provides a corrected version.
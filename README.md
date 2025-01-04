# Express.js: Missing Status Codes in Error Responses

This repository demonstrates a common but subtle error in Express.js applications: inconsistent handling of error responses.  Specifically, the application sometimes sends error messages without specifying the appropriate HTTP status code. This can make debugging and client-side handling difficult.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides a corrected version.

## The Problem

The original code simulates an asynchronous operation that randomly fails. When it fails, it sends an error message to the client without setting an HTTP status code. This leads to ambiguous responses, making it challenging for clients to understand if an error occurred and what type of error it was.

## The Solution

The solution involves explicitly setting the appropriate HTTP status code (e.g., 500 for internal server errors) when sending error responses. This provides a clear indication to the client that an error occurred and aids in proper error handling.
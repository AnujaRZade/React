1. Fetch the data, pagination -> click on next button will get the second set of data elements.
    1. we have shown static data.
    2. make fetch API call to get the dynamic data
                - show loader
                - as you recieve the data then hide the loader and render the data.
                - get the paginated data only (show only next 10 set of data)
                - implemented the pagination
                - custom hook - reusing the logic
2. Infinite Scrolling: 
            2.1. create the ref for the last element in the list
            2.2. Use Intersection Observer API.
            2.3. When the last element will come in the viewport load the next set of data.

The code is implementing an infinite scroll/lazy loading feature. Here's a brief explanation:

## State Management:

**data:** Stores the fetched data.

**pageNum:** Tracks the current page number for pagination.

**error:** Captures any error messages from the fetch request.

**isLoading:** Indicates if data is being loaded.


##  loadDataHandler Function:

Fetches data from the API with pagination parameters (_page and _limit).
Sets loading state, fetches data, updates data state, handles errors, and resets loading state.
useEffect Hook:

Calls loadDataHandler whenever pageNum changes, triggering a new data fetch.

##  Rendering:

Displays a heading, loading indicator, error message, fetched data, current page number, and a "Next" button to increment pageNum.
Styling:

## CSS modules are used for styling with styleObj.        


Line-by-Line Execution Flow
Function Call: loadDataHandler()

The loadDataHandler function is invoked, either manually or as a side effect (e.g., via useEffect).
Setting isLoading: setIsLoading(true)

When setIsLoading(true) is called:
React schedules a re-render of the component because the state has changed (isLoading is now true).
Important: The re-render does not happen immediately at this exact line. Instead, React schedules it to happen after the current function completes.
Continue Execution: await fetch(...)

After setIsLoading(true) is called, the function continues executing.
The await keyword causes the function to pause until the fetch request completes (i.e., resolves or rejects).
Pending Fetch: React Re-Renders the Component

While the fetch request is pending (waiting for a response), React proceeds with the re-render that was scheduled when setIsLoading(true) was called.
During this re-render:
React executes the component function (InfiniteScroll in this case) again.
The updated state (isLoading is now true) is used, so the component conditionally renders the "Loading......" message.
The rest of the JSX is also re-evaluated with the current state values.
Fetch Completes: Execution Resumes

Once the fetch request completes, the function resumes after the await statement.
If the fetch was successful, setData(userData) is called to update the data state.
If there was an error, setError(error.message) is called.
Final State Update: setIsLoading(false)

The finally block runs, and setIsLoading(false) is called.
This schedules another re-render because the isLoading state is changing again (from true back to false).
Component Re-Renders Again

React now re-renders the component with isLoading set to false.
During this re-render, the "Loading......" message is no longer displayed.
The component will now display either the fetched data or the error message, depending on the result of the fetch.
Summary of Re-Renders
First Re-Render: Triggered after setIsLoading(true) is called and while the fetch is pending. This re-render shows the "Loading......" message.
Second Re-Render: Triggered after setIsLoading(false) (in the finally block). This re-render hides the "Loading......" message and displays the data or error.
Key Points
React schedules a re-render after any state update (like setIsLoading(true)), but the re-render doesn’t interrupt the current function. It happens after the function completes.
The component function (InfiniteScroll) is re-executed during each render, using the latest state values.
The await keyword pauses the function until the async operation completes, but the component can re-render while waiting.
This sequence ensures that the UI reflects the current state at all times: showing a loading message when data is being fetched and then displaying the result once available.


### Great question! The difference between using setPageNum(pageNum + 1) and setTime(prevTime => prevTime + 1) comes down to how state updates work in React, particularly when dealing with asynchronous operations like setInterval.

1. setPageNum(pageNum + 1) in Button Click Handler
When you use setPageNum(pageNum + 1) inside a button's onClick handler, the state update is based on the current value of pageNum at the time the button is clicked:

When you click the button, React's state management system grabs the current value of pageNum and increments it by 1.
This works fine because the event handler is only triggered once per click, so the current value of pageNum is accurate and up-to-date.
2. setTime(prevTime => prevTime + 1) in setInterval
In the case of a setInterval, you're dealing with an asynchronous operation where the state might change multiple times before the interval callback executes:

If you use setTime(time + 1), the callback inside setInterval might refer to a stale value of time (the value when the interval was first set up), leading to incorrect behavior.
By using setTime(prevTime => prevTime + 1), you're ensuring that React gives you the most recent state value (prevTime) when the update occurs. This way, even if the state has changed multiple times, the update is always based on the latest state.
Why the Difference?
Synchronous vs. Asynchronous Contexts:
Button Click (Synchronous): The state update happens immediately after the button is clicked, so you can safely use the current state value directly.
setInterval (Asynchronous): The callback might run some time later, during which the state might have changed. Using the functional form (prevTime => prevTime + 1) ensures you're working with the most up-to-date state.
Summary:
Use setState(value + 1) when the state update is synchronous and based on the current value, like in a button click handler.
Use setState(prevValue => prevValue + 1) when the state update occurs in an asynchronous context (like setInterval) to ensure you’re always working with the most recent state.
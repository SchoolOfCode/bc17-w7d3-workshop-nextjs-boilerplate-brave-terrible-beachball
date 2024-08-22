Users should see a link on the home page saying "Book Consultation", they should not see the phone number anymore. ✅
Users should be able to click the link and go to a "Design Booking" page ("/booking")✅
When a user reaches the "Design Booking" page they should see a simple form that matches the designs you've been given. ✅
When a user submits the form it should validate that no fields are empty. ✅
If there is an empty form field show an error.✅
If there is no error then console log the form data 🙂 (don't worry about posting the data anywhere).✅

## REDUCER

1. Check everyone understands the basics of using useReducer. ✅

2. Move your code over to useReducer. Do not add a single new feature to begin with. It's not easy moving to reducer, don't make it harder.

3. Once the form does exactly what it did before but using useReducer - move on to add some of the new functionality like a loading indicator into your state. You can make the handle submit dispatch an action to say the form is submitting, then simulate waiting for 2 seconds (useTimeout maybe), then dispatch another action to say form submitted successfully.

4. Now continue to add more features ... like disabling the form while it's submitting, or more granular errors.

# OBJECTIVES

As a user when I submit the form it should  show me that it is submitting.

As a user I should not be able to submit again while it is submitting.

As a user when I submit the form in a correct way (passes validation) I should see the form replaced with a simple success message.

As a user when I submit the form in an incorrect way I should see that the form is no longer submitting and that there are errors.

As a user who has incorrectly submitted the form I should see an error under each field that has failed validation. The error should be specific to the field ("Not a valid phone number", "No bookings outside of England, Wales or Scotland").


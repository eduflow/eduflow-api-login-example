eduflow-api-login-example
=========================
This is a small example of how to log in a user into Eduflow via the API.

Fill in `API_KEY` and `COURSE_ID` in the `index.js`-file and run:

    node index.js

in the data you get back, the `invitationLink` is a link that the course
participant can use to be logged into Eduflow directly.
At this point they will be asked to set a password.

The second request is needed if the user is already part of the course.
In that case, `newParticipants` in the first response will be empty.
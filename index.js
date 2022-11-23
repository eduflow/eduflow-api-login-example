const API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const NEW_USER_FULLNAME = 'Test User 001';
const NEW_USER_EMAIL = 'test001@example.org';
const COURSE_ID = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';


(async () => {
  let response = await fetch('https://app.eduflow.com/api/graphql', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: `mutation AddCourseParticipants {
  addCourseParticipants(
    courseId: "${COURSE_ID}",
    participantType: Student,
    invitees: [{ name: "${NEW_USER_FULLNAME}", email: "${NEW_USER_EMAIL}"}],
    inviteNow: false,
  ) {
    newParticipants {
      user {
        name
        email
      }
      invitationLink
    }
  }
}`}),
  })
  let json = await response.json()
  console.log(JSON.stringify(json))

  response = await fetch('https://app.eduflow.com/api/graphql', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: `{
  course(id: "${COURSE_ID}") {
    title
    
    participants(searchTerm: "${NEW_USER_EMAIL}") {
      edges {
        node {
          user {
            email
            name
          }
          invitationLink
        }
      }
    }
  }
}`}),
  })
  json = await response.json()
  console.log(JSON.stringify(json))
})();


const myForm = document.querySelector('#form');
const username = document.querySelector('#userNameForm3')
const userComments = document.querySelector("#textArea")

const baseURL = `http://localhost:5050/api`

const login = body => axios.post(`${baseURL}/login`, body).then( res => {
    res.data
  }).catch(err => {
    console.log(err)
    alert('Uh oh. Your request did not work.')
  })
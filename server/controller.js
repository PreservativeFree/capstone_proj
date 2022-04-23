//require('dotenv').config()
const users = [];
//const {CONNECTION_STRING} = process.env

module.exports = { 
/*
  getDepartment: (req, res) => {
    let {department} = req.body
    res.status.send(req.body)
  },
*/
  register: (req, res) => {
    const {username, email, firstName, lastName, address, phoneNumber, password} = req.body
   // const salt = bcrypt.genSaltSync(5)
  //  const passwordHash = bcrypt.hashSync(password, salt)
    let user = {
      username,
      email,
      firstName,
      lastName,
      address,
      phoneNumber,
      password
    }
      console.log('Registering User')
     // console.log(req.body)
      users.push(user)
  //    let userToReturn = {...user}
  //    delete userToReturn.passwordHash
      res.status(200).send(req.body)
  },

/*
    getCreditCards: (req, res) => {
        const creditCards = ["American Express", "Capital one", "BoA Credit Card"]
        creditCards.forEach(creditCards => {
            const option = document.createElement('option')
            option.setAttribute('value', creditCards[i])
            option.textContent = creditCards[i]
            creditSelect.appendChild(option)
        })
        .then(res => res.status(200).send(creditCards))
            .catch(err => console.log(err))
    },*/
    
    login: (req, res) => {
        console.log('Logging In User')
        const { username, password } = req.body 
        for (let i = 0; i < users.length; i++) {
          if(users[i].username === username) {

            if(1) {
              let userToReturn = {...users[i]}
              
              res.status(200).send(userToReturn)
            }
          }
        }
        res.status(400).send("User not found.")
    }
  }
/*
    register: (req,res) => {
            const {username, email, firstName, lastName, password} = req.body

            let user = {
              username,
              email,
              firstName,
              lastName,
            }
              console.log('Registering User')
              console.log(req.body)
              users.push(user)
              let userToReturn = {...user}
              res.status(200).send(req.body)
          }
            .then(dbRes => res.status(200).send(req.body)
            .catch(err => console.log(err))
    }
    */

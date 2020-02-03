const securePassword = require('secure-password')
// Initialise our password policy
const pwd = securePassword()

const userPassword = Buffer.from('my secret password')

async function run () {

    // Register user
    const hash = await pwd.hash(userPassword)
    let hs = hash.toString();
    console.log("number of bytes: " + securePassword.HASH_BYTES)
    // Save hash somewhere
    const result = await pwd.verify(userPassword, Buffer.from(hs)) //hash)
    
  switch (result) {
    case securePassword.INVALID_UNRECOGNIZED_HASH:
      return console.error('This hash was not made with secure-password. Attempt legacy algorithm')
    case securePassword.INVALID:
      return console.log('Invalid password')
    case securePassword.VALID:
      return console.log('Authenticated')
    case securePassword.VALID_NEEDS_REHASH:
      console.log('Yay you made it, wait for us to improve your safety')

      try {
        const improvedHash = await pwd.hash(userPassword)
      }
      catch (err) {
        console.error('You are authenticated, but we could not improve your safety this time around')
      }
      break;
  }
}

run()


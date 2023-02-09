// const login = async ()=>{
//     try {
//    const response = await fetch()
//     const result = await response.json()
//     } catch (error) {
//         console.log(error)
//     }
// }

let token 
let postId
let messages

const login = async ()=>{
    try { 
        const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/users/login', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username: 'abaldwin19',
                password: '1234'
              }
            })
          })
          const result = await response.json()
          console.log(result)
          token = result.data.token
    } catch (error) {
        console.log(error)
    }
}

const register = async ()=>{
       try {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/users/register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: 'abaldwin19',
            password: '1234'
          }
        })
      })
      const result = await response.json()
      } catch (error) {
           console.log(error)
       }
  }

  const getPosts = async()=>{
    try{
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts')
      const result = await response.json()
      //console.log(result.data.posts)
    } catch(error){
      console.log(error)
    }
  }

  const createPost = async()=>{
    try{
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title: "My favorite stuffed animal",
            description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
            price: "$480.00",
            willDeliver: true
          }
        })
      })
      const result = await response.json()
      console.log(result.data.post)
      postId = result.data.post._id
    } catch(error){
      console.log(error)
    }
  }

    
  const deletePost = async()=>{
  try {
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts/${postId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    const result = await response.json()
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const message = async ()=>{
      try {
     const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        message: {
          content: "Do you still have this?  Would you take $10 less?"
        }
      })
    })
      const result = await response.json()
      console.log(result)
      } catch (error) {
          console.log(error)
      }
  }
  

  

const runfile = async()=>{
    //await register()
    await login()
    await createPost()
    await getPosts()
    await deletePost()
    await message()
    
}

runfile()
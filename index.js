const express = require('express')
const app = express()
app.use(express.json())
const uuid = require('uuid')
const PORT = 3000




app.listen(PORT, ()=>{
    console.log(`Server started on PORT ${PORT}`);
})


const usuarios = []

app.get('/users',(request,response)=>{
    return response.json(usuarios)
})

app.post('/users',(request,response)=>{
    const {name, age, sex, job} = request.body

    const usuario = {id:uuid.v4(),name,age,sex,job}

    usuarios.push(usuario)

    return response.status(201).json(usuario)
})

app.put('/users/:id',(request,reponse)=>{
    const {name, age, sex, job} = request.body
    const {id} = request.params
    const usuarioAtualizado = {id, name, age, sex, job}
    const index = usuarios.findIndex(user => user.id === id)
    if(index < 0){
        return reponse.status(404).json({message:"User not found"})
    }
    usuarios[index] = usuarioAtualizado

    return reponse.json(usuarioAtualizado)
})


app.delete('/users/:id',(request,response)=>{
    const {id} = request.params

    const index = usuarios.findIndex(user => user.id === id)
    if(index < 0){
        return response.status(404).json({message:"User not found"})
    }

    usuarios.splice(index,1)

    return response.json({message:"User deleted"})
})

















// const express = require('express')
// const uuid = require('uuid')
// const app = express()
// app.use(express.json())


// const users = []

// app.get('/users', (req, res)=>{
//     return res.json(users)
// })

// app.post('/users', (req, res)=>{
//     const {name,age} =  req.body

//     const usuario = {id:uuid.v4(), name, age }

//     users.push(usuario)

//     return res.status(201).json(usuario)
// })


// app.put('/users/:id', (req, res)=>{
//     const {id} = req.params
//     const {name,age} = req.body

//     const usuarioAtualizado = {id, name, age}

//     const index = users.findIndex(usuarios => usuarios.id === id)

//     if(index < 0){
//        return res.status(404).json({messagem:"user not found"}) 
//     }

//     users[index] = usuarioAtualizado

//     return res.json(usuarioAtualizado)
// })


// app.delete('/users/:id', (req, res)=>{
//     const {id} = req.params
    
//     const index = users.findIndex(usuarios => usuarios.id === id)

//     if(index < 0){
//         return res.status(404).json({messagem:"user not found"}) 
//      }

//      users.splice(index,1)

//     return res.status(204).json()
// })
















// app.listen(3000, ()=>{
//     console.log("Serve on");
// })
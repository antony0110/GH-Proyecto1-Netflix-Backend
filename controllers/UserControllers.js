const { User,Token,Pedido } = require('../models/index')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const UserController={
    
   async register(req,res){
       try {
        const hash = await bcrypt.hash(req.body.password,10)
        const user = await User.create({
            ...req.body,
            password:hash
        })
         res.send(user); 
       } catch (error) {
        console.log(error)
        res.status(500).send 
       }
    },
    login(req,res){
        User.findOne({
            where:{
                username:req.body.username
            }
        }).then(user=>{
            if(!user){
                return res.status(400).send({message:"Usuario o contraseña incorrectos"})
            }
          bcrypt.compare(req.body.password,user.password).then(isMatch=>{
            if(!isMatch){
                return res.status(400).send({message:"Usuario o contraseña incorrectos"})
            } 
            const token = jwt.sign({id:user.id}, 'mimamaMeMima' , {expiresIn:'2w'} );
            Token.create({token,UserId:user.id});//añadimos el token al final del array
            res.send({message:'Bienvenido Sr', user,token});
          });
        })
    },
Profiles(req,res){
        User.findAll({attributes: { exclude: ['password']}},{include:[Pedido]})
          .then(users => res.send(users))
           .catch(err=>{
               console.log(err)
               res.status(500).send({message:'Ha habido un problema al cargar los usuarios'})
          })
   },
   Id(req, res) {
    let id = req.params.id;
    User.findAll( {include:[Pedido]},{ where:{ id: id }})
    .then( User => {
        res.json(User);
    })
  }
    //   Profile (req,res){
     //     let username = req.query.username;
     //     User.findAll({ where: { username: username }}).then( User => {
//res.json(User);
        //  });
     //   }
  };
module.exports=UserController;


//async login(req, res) {
  //  try {
    //    const user = await UserModel.findOne({ //buscamos el usuario por el email, ej: 'user@email.com'
      //      email: req.body.email
        ///});
        //console.log(user)
       // if(!user){
       //    return res.status(400).send({message:'Wrong credentials'});
     //   }
        //const isMatch = await bcrypt.compare(req.body.password,user.password);
      //  console.log(isMatch)
    //    if(!isMatch){
      //     return res.status(400).send({message:'Wrong credentials'});
    //    }
    //    const token = jwt.sign({"_id":"5e9ec482ebead138a00b8d32"}, 'mimamaMeMima' , {expiresIn:'2w'} );
   //     if(user.tokens.length>4) user.tokens.shift();//si ya hay 5 tokens eliminamos el más antiguo
     //   user.tokens.push(token);//añadimos el token al final del array
   //     await user.save();//guarda los cambios en mongoDB
      //  res.send({message:'Welcome Mr '+user.email,user,token});
 //   } catch (error) {
        //console.error(error)
    //    res.status(500).send({
        //    message: 'There was a problem trying to log in'
     //   })
  //  }
//}
//}

//module.exports = UserController;
const user=require('../model/data')

const getmethod = () => {
    return user.find()
  }

  const Postmethod = (data) => {
    let users = user(data);
    return users.save()
  }

  const deletemethod=(id)=>{
    return user.deleteOne({_id:id})
    }
    
    const editemethod=(data)=>{
        return user.updateOne({email:data.email},{$set:data})
    }

  module.exports = {
    getmethod,
    Postmethod,
    deletemethod,
    editemethod
  }
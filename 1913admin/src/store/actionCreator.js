export default {
    changeToken(params){
      let action = {
        type:'CHANGE_TOKEN',
        params:params
      }
      return action
    }
  
}
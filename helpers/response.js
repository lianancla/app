const defecto ={
  data:null,
  error:null
}
export class Response {
  constructor(object = defecto) {
    (this.data = object.data), (this.error = object.error);
  }
  data = null;
  error = null;
  error = async (error)=>{
    //ago lo q quiera con el error
  } 
}

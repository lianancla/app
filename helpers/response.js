const defecto = {
  data: null,
  error: null,
};
export class Response {
  constructor(object = defecto) {
    (this.data = object.data), (this.error = object.error);
  }
  send_error = async () => {
    console.log(this.error);
  };
}
/*
export const makeResponse = ()=>{
  return new Response()
}
*/
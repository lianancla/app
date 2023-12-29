let defecto = {
  data: null,
  error: null,
};
export class Response {
  constructor(object = defecto) {
    (this.data = object.data), (this.error = object.error);
  }

  send_error = ({error}) => {
    console.log(error); ///despues cambiar para notificar a un gmail o crear un archivo log
  };

}

export   const makeResponse =  ({data}) => {
  return new Response({data});
};

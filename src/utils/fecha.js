const fecha = (info) => {
   const date = new Date();

   const formato = 'mm/dd/yy'

   const map = {
      dd: date.getDate(),
      mm: date.getMonth() + 1,
      yy: date.getFullYear().toString(),
   }

   const dateString = formato.replace(/mm|dd|yy/gi, matched => map[matched])

   const date1 = new Date(info)
   const date2 = new Date(dateString)

   const milisegundosDia = 24 * 60 * 60 * 1000;
   const milisegundosTranscurridos = Math.abs(date1.getTime() - date2.getTime());
   const dias = Math.round(milisegundosTranscurridos/milisegundosDia);
   
   const data = {
      años: Math.trunc(dias / 365),
      meses: Math.round((dias % 365)/30),
   }
      
   return data
}

export default fecha
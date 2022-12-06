//main


let alr = "Sucess"
alert(alr);









































































// init
bridge.subscribe((e) => console.log(e)); 
    
// Отправляет событие нативному клиенту
bridge.send("VKWebAppInit", {});      
    
// Проверяет, поддерживается ли событие на текущей платформе
if (bridge.supports("VKWebAppResizeWindow")) {
  bridge.send("VKWebAppResizeWindow", {"width": 800, "height": 1000});
}
// Отправка события
bridge.send('VKWebAppGetEmail')
  .then((data) => {
    if (data.result) {
      // Обработка события в случае успеха
      console.log(data.email);
    } else {
      // Ошибка
    }
  })
  .catch((error) => {
    // Обработка события в случае ошибки
    console.log(error);
  });
  // Подписывается на события, отправленные нативным клиентом
bridge.subscribe(event => {
    if (!event.detail) {
      return;
    }
  
    switch(event.detail.type) {
      case 'VKWebAppOpenCodeReaderResult':
        if (event.detail.data.result) {
          // Обработка события в случае успеха
          console.log(event.detail.data.result);
        } else {
          // Ошибка
        }
        break;
      case 'VKWebAppOpenCodeReaderFailed':
        // Обработка события в случае ошибки
        console.log(event.detail.data.error_type, event.detail.data.error_data);      
        break;
    }
  });


































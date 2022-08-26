import React from "react"
import "./style_ourBenefits.css"//import styles for component benefits

const Benefits = ()=> {//create component benefits
    return (
        // create parent div benefits
        <div className="benefits">
        <div className="benefit"> 
         <div className="benefits__header">Работаем круглосуточно</div>
         <div className="benefits__content">
          <div className="benefits__content-img-one img_style"></div>
          <div className="benefits__content-text">Мы готовы в любое время суток принять домашних питомцев и их хозяев</div>
         </div>
        </div>

        <div className="benefit"> 
         <div className="benefits__header">Широкий спектр услуг</div>
         <div className="benefits__content">
          <div className="benefits__content-img-two img_style"></div>
          <div className="benefits__content-text">Кроме широкопрофильных докторов  в клинике развиты узкие направления в ветеринарии – офтальмология, стоматология, дерматология, травматология, ортопедия и онкология</div>
         </div>
        </div>

        <div className="benefit"> 
         <div className="benefits__header">Большой опыт</div>
         <div className="benefits__content">
          <div className="benefits__content-img-three img_style"></div>
          <div className="benefits__content-text">30 высококвалифицированных врачей нашей клиники предоставляют ветеринарную помощь уже на протяжении 18 лет!</div>
         </div>
        </div>

        <div className="benefit"> 
         <div className="benefits__header">Собственная лаборатория</div>
         <div className="benefits__content">
          <div className="benefits__content-img-four img_style"></div>
          <div className="benefits__content-text">Оборудованная профессиональным оснащением производства компании IDEXX International Inc.(США), которое позволяет получить результаты исследования прямо на приеме</div>
         </div>
        </div>

        <div className="benefit"> 
         <div className="benefits__header">Оснащенные стационары</div>
         <div className="benefits__content">
          <div className="benefits__content-img-five img_style"></div>
          <div className="benefits__content-text">Обычный и инфекционный стационар с индивидуальным подогревом каждой клетки. Для питомцев в критическом состоянии предусмотрены кислородные камеры</div>
         </div>
        </div>

        <div className="benefit"> 
         <div className="benefits__header">Новейшее оборудование</div>
         <div className="benefits__content">
          <div className="benefits__content-img-six img_style"></div>
          <div className="benefits__content-text">Помимо лабораторного оборудования и цифрового рентгена в клинике используется современный эндоскоп KARL STORZ</div>
         </div>
        </div>

        <div className="benefit"> 
         <div className="benefits__header">Запись на прием онлайн</div>
         <div className="benefits__content">
          <div className="benefits__content-img-seven img_style"></div>
          <div className="benefits__content-text">Запись на приём позволяет избежать ожиданий в очереди, но если вы не можете приехать - мы выезжаем на дом!</div>
         </div>
        </div>

        <div className="benefit"> 
         <div className="benefits__header">Аптека и зоомагазин</div>
         <div className="benefits__content">
          <div className="benefits__content-img-eight img_style"></div>
          <div className="benefits__content-text">Для удобства в клинике предусмотрен аптечный пункт, а также бутик с одеждой и косметическими средствами для ухода за домашними любимцами</div>
         </div>
        </div>
        
        <div className="benefit"> 
         <div className="benefits__header">Груминг-салон</div>
         <div className="benefits__content">
          <div className="benefits__content-img-nine img_style"></div>
          <div className="benefits__content-text">Отдельный кабинет для проведения гигиенческих и косметических процедур, таких как мытьё и сушка, стрижка или тримминг, уход за ушами, глазами и когтями и многое другое</div>
         </div>
        </div>

        </div>//close parent div
    )
}
export default Benefits//export component benefiits
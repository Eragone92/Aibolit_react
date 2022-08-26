import React from "react"
import "./style_services.css"//import styles for component services

const Services = ()=> {//create component services
    return (
      // create parent div for services
        <div className="services">
          {/* services card one */}
           <div className="services__serviceCard">
            {/* text in card one */}
             <div className="services__serviceCard-text">Терапия</div>
             {/* image for card */}
             <div className="services__serviceCard_one-img image"></div>
             {/* service is 26 */}
             <div className="service">26 услуг</div>
           </div>

           <div className="services__serviceCard">
             <div className="services__serviceCard-text">Хиругия</div>
             <div className="services__serviceCard_two-img image"></div>
             <div className="service">26 услуг</div>
           </div>
           
           <div className="services__serviceCard">
             <div className="services__serviceCard-text">Неврология</div>
             <div className="services__serviceCard_three-img image"></div>
             <div className="service">26 услуг</div>
           </div>

           <div className="services__serviceCard">
             <div className="services__serviceCard-text">Ортопедия</div>
             <div className="services__serviceCard_four-img image"></div>
             <div className="service">26 услуг</div>
           </div>



           <div className="services__serviceCard">
             <div className="services__serviceCard-text">Дерматология</div>
             <div className="services__serviceCard_five-img image"></div>
             <div className="service">26 услуг</div>
           </div>

           <div className="services__serviceCard">
             <div className="services__serviceCard-text">Офтальмология</div>
             <div className="services__serviceCard_six-img image"></div>
             <div className="service">26 услуг</div>
           </div>
           
           <div className="services__serviceCard">
             <div className="services__serviceCard-text">Кардиология</div>
             <div className="services__serviceCard_seven-img image"></div>
             <div className="service">26 услуг</div>
           </div>

           <div className="services__serviceCard">
             <div className="services__serviceCard-text">Стоматология</div>
             <div className="services__serviceCard_eight-img image"></div>
             <div className="service">26 услуг</div>
           </div>


           <div className="services__serviceCard">
             <div className="services__serviceCard-text">Репродуктология</div>
             <div className="services__serviceCard_nine-img image"></div>
             <div className="service">26 услуг</div>
           </div>

           <div className="services__serviceCard">
             <div className="services__serviceCard-text">Визуальная диагностика</div>
             <div className="services__serviceCard_ten-img image"></div>
             <div className="service">26 услуг</div>
           </div>
           
           <div className="services__serviceCard">
             <div className="services__serviceCard-text">Лаборатория</div>
             <div className="services__serviceCard_eleven-img image"></div>
             <div className="service">26 услуг</div>
           </div>

           <div className="services__serviceCard">
             <div className="services__serviceCard-text">Онкология</div>
             <div className="services__serviceCard_twelve-img image"></div>
             <div className="service">26 услуг</div>
           </div>

           <div className="services__serviceCard">
             <div className="services__serviceCard-text">Эндокринология</div>
             <div className="services__serviceCard_thirteen-img image"></div>
             <div className="service">26 услуг</div>
           </div>

           <div className="services__serviceCard">
             <div className="services__serviceCard-text">Экзотические животные</div>
             <div className="services__serviceCard_fourteen-img image"></div>
             <div className="service">26 услуг</div>
           </div>
           
           <div className="services__serviceCard">
             <div className="services__serviceCard-text">Аптека</div>
             <div className="services__serviceCard_fifteen-img image"></div>
             <div className="service">26 услуг</div>
           </div>

           <div className="services__serviceCard">
             <div className="services__serviceCard-text">Груминг</div>
             <div className="services__serviceCard_sixteen-img image"></div>
             <div className="service">26 услуг</div>
           </div>



        </div>//close parent div
    )
}
export default Services//export component services
import React from "react"
import Imagess from "../Img/img"//iportcomponent img
import "./style_footer.css"//import styles for component footer
import "./../adaptive.css"

const Footer = ()=> {//create component footer
    return (
        // create parent tsimantic tag footer
        <footer className="footer">
            {/* left side */}
            <div className="footer__leftSide">
            <div className="footer__one">
                {/* add component imagess with props */}
            <Imagess src={require("./../../Images/logo_footer.png")} alt="footer logo" class="footer__logo"/>
          <div className="footer__one_text">
          <h3>Айболит</h3>
          <p>ветеринарная клиника</p>
          </div>
          </div>
          <div className="footer__two">
            <p>Политика конфиденциальности в отношении обработки персональных данных</p>
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/">Услуги и цены</a></li>
                <li><a href="/">История компании</a></li>
                <li><a href="/">Наши специалисты</a></li>
                <li><a href="/">Вакансии</a></li>
                <li><a href="/">Реквизиты</a></li>
                <li><a href="/">Онлайн-оплата</a></li>
            </ul>
            <ul>
                <li><a href="/">Отзывы</a></li>
                <li><a href="/">Контакты</a></li>
                <li><a href="/">Груминг-салон</a></li>
                <li><a href="/">Косметика</a></li>
                <li><a href="/">Новости и акции</a></li>
                <li><a href="/">Блог</a></li>
            </ul>
          </div>
          </div>
          {/* right side */}
          <div className="footer__rightSide">
            {/* add component imagess with some props */}
            <Imagess src={require("../../Images/vidg.png")} alt="ios" class="footer__rightSide-img"/>
            <ul className="footer__rightSide_socials">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul className="footer__rightSide_info">
                <li>aibolit34.ru</li>
                <li>aibolit34@gmail.com</li>
            </ul>
            <p>Made with from UnitBean</p>
          </div>
        </footer>//close parent tag footer
    )
}
export default Footer//export component footer
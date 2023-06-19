import React from "react";
import chicken from "./chicken.svg";
import style from "./header-style.module.css";
import {useState, useEffect} from 'react'
import { FaBars, FaShoppingBag, FaShoppingCart, FaBook } from "react-icons/fa";

export default function Header({cartNumber, user}) {

  function Button() {
    const navToggle = document.querySelector(`button.${style["nav-toggle"]}`);
    const navMenu = document.querySelector(`.${style["nav-menu"]}`);

    navMenu.classList.toggle(style.show);
    navToggle.classList.toggle(style["not-show"]);
  }

  function closeButton() {
    const navToggle = document.querySelector(`button.${style["nav-toggle"]}`);
    const navMenu = document.querySelector(`.${style["nav-menu"]}`);

    navMenu.classList.toggle(style.show);
    navToggle.classList.toggle(style["not-show"]);
  }

  return (
    <nav className={style.nav}>
      <div id={style.chicken}>
        <img src={chicken} alt="Chicken" id={style["chicken-image"]} />
        <h1 className={style.header}>É De Casa</h1>

        <button className={`${style["nav-toggle"]} ${style.show}`} onClick={Button}>
          <span className={style.burger}>
            <FaBars />
          </span>
        </button>

        <div id={style.navigation} className={style["nav-menu"]}>
          <ul>
            <li>
              {
                user === '' && <button id={style["LogIn"]} onClick={() => {window.location.href = '/login'}}>Entrar</button>
              }
              {
                user !== '' && <p className={style.welcomeUser}>Olá {user}, seja bem-vindo</p>
              }
            </li>
            <li className={style.icons}>
              <a href="/" className={style.link}>
                <FaShoppingBag className={style.animation} /> Comprar
              </a>
            </li>
            <li className={style.icons}>
              <a href="#" className={style.link}>
                <FaShoppingCart className={style.animation} /> Carrinho
                <span> {`${cartNumber}`}  </span>
              </a>
            </li>
            <li className={style.icons}>
              <a href="/about" className={style.link}>
                <FaBook className={style.animation} /> Sobre
              </a>
            </li>
            <li>
              <button id={style["close-nav"]} onClick={closeButton}>
                X
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

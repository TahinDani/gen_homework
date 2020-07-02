import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/Menu.css'

const MENU = [
  {
    name: "Kárbejelentés",
    submenu: [
      {name: "Gépjármű"},
      {name: "Élet-Egészség-Baleset"},
      {name: "Lakás-Vagyon"},
    ]
  },
  {
    name: "Biztosításkötés",
    submenu: [
      {name: "Lakásbiztosítás"},
      {name: "Utasbiztosítás"},
      {name: "Casco"},
    ]
  },
  {
    name: "Ügyintézés",
    submenu: [
      {name: "Szerződéskötés"},
      {name: "Díjfizetés"},
      {
        name: "Információ", 
        submenu: [
          {name: "info 1"},
          {name: "info 2"},
        ]
      },
    ]
  },
]

class Menu extends Component {

  createMenu = () => {
    
  }

  render() {
    return (
      <div className="Menu">
        <div className="Menu-item">
          <div className="Menu-item-button">Kárbejelentés</div>
          <div className="Menu-item-submenu">
            <a className="submenu-item" href="#">Gépjármű</a>
            <a className="submenu-item" href="#">Élet-Egészség-Baleset</a>
            <a className="submenu-item" href="#">Lakás-Vagyon</a>
          </div>
        </div>
        <div className="Menu-item">
          <div className="Menu-item-button">Biztosításkötés</div>
          <div className="Menu-item-submenu">
            <a className="submenu-item" href="#">LakásBiztosítás</a>
            <a className="submenu-item" href="#">Utasbiztosítás</a>
            <a className="submenu-item" href="#">Casco</a>
            <a className="submenu-item" href="#">Kötelező biztosítás</a>
          </div>
        </div>
        <div className="Menu-item">
          <div className="Menu-item-button">Ügyintézés</div>
          <div className="Menu-item-submenu">
            <a className="submenu-item" href="#">Szerződéskezelés</a>
            <div className="submenu-item">
              <div className="submenu-button">Információk &gt;</div>
              <div className="submenu-menu">
                <a className="submenu-item" href="#">Személyes szerződéskötés és módosítás</a>
                <a className="submenu-item" href="#">Generali klub</a>
                <a className="submenu-item" href="#">Tudatos fogyasztó</a>
              </div>
            </div>
            <a className="submenu-item" href="#">Dokumentumigénylés</a>
          </div>
        </div>
        <div className="Menu-item">
          <div className="Menu-item-button">Lakossági termékeink</div>
          <div className="Menu-item-submenu">
            <div className="submenu-item">
              <div className="submenu-button">Jármű &gt;</div>
              <div className="submenu-menu">
                <a className="submenu-item" href="#">Kötelező biztosítás</a>
                <a className="submenu-item" href="#">Casco</a>
                <a className="submenu-item" href="#">Motor</a>
              </div>
            </div>
            <div className="submenu-item">
              <div className="submenu-button">Otthon &gt;</div>
              <div className="submenu-menu">
                <a className="submenu-item" href="#">Kötelező biztosítás</a>
                <a className="submenu-item" href="#">Casco</a>
                <a className="submenu-item" href="#">Motor</a>
              </div>
            </div>
            <div className="submenu-item">
              <div className="submenu-button">Nyugdíj &gt;</div>
              <div className="submenu-menu">
                <a className="submenu-item" href="#">Kötelező biztosítás</a>
                <a className="submenu-item" href="#">Casco</a>
                <a className="submenu-item" href="#">Motor</a>
              </div>
            </div>
          </div>
        </div>
        <div className="Menu-item">
          <div className="Menu-item-button">Vállalati termékek</div>
          <div className="Menu-item-submenu">
            <a className="submenu-item" href="#">Cégpaletta</a>
            <a className="submenu-item" href="#">Kollektív egészségbiztosítás</a>
            <div className="submenu-item">
              <div className="submenu-button">Kollektív személybiztosítás &gt;</div>
              <div className="submenu-menu">
                <a className="submenu-item" href="#">Kötelező biztosítás</a>
                <a className="submenu-item" href="#">Casco</a>
                <a className="submenu-item" href="#">Motor</a>
              </div>
            </div>
          </div>
        </div>
        <div className="Menu-item">
          <div className="Menu-item-button">Befektetések</div>
          <div className="Menu-item-submenu">
            <div className="submenu-item">
              <div className="submenu-button">Jármű &gt;</div>
              <div className="submenu-menu">
                <a className="submenu-item" href="#">Kötelező biztosítás</a>
                <a className="submenu-item" href="#">Casco</a>
                <a className="submenu-item" href="#">Motor</a>
              </div>
            </div>
            <div className="submenu-item">
              <div className="submenu-button">Otthon &gt;</div>
              <div className="submenu-menu">
                <a className="submenu-item" href="#">Kötelező biztosítás</a>
                <a className="submenu-item" href="#">Casco</a>
                <a className="submenu-item" href="#">Motor</a>
              </div>
            </div>
            <div className="submenu-item">
              <div className="submenu-button">Nyugdíj &gt;</div>
              <div className="submenu-menu">
                <a className="submenu-item" href="#">Kötelező biztosítás</a>
                <a className="submenu-item" href="#">Casco</a>
                <a className="submenu-item" href="#">Motor</a>
              </div>
            </div>
          </div>
        </div>
        <div className="Menu-item">
          <div className="Menu-item-button">Kapcsolat</div>
          <div className="Menu-item-submenu">
            <div className="submenu-item">
              <div className="submenu-button">Térképes kapcsolatkeresés &gt;</div>
              <div className="submenu-menu">
                <a className="submenu-item" href="#">Kötelező biztosítás</a>
                <a className="submenu-item" href="#">Casco</a>
                <a className="submenu-item" href="#">Motor</a>
              </div>
            </div>
            <div className="submenu-item">
              <div className="submenu-button">Online kapcsolatfelvétel &gt;</div>
              <div className="submenu-menu">
                <a className="submenu-item" href="#">Email küldése</a>
                <a className="submenu-item" href="#">Véleménybeküldés</a>
                <Link to="/panaszbejelentes" className="submenu-item" >Panaszbejelentés</Link>
              </div>
            </div>
            <div className="submenu-item">
              <div className="submenu-button">Telefonos kapcsolatfelvétel &gt;</div>
              <div className="submenu-menu">
                <a className="submenu-item" href="#">Kötelező biztosítás</a>
                <a className="submenu-item" href="#">Casco</a>
                <a className="submenu-item" href="#">Motor</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
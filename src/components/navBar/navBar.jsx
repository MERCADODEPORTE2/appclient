import React, { useState } from "react";
import SearchBar from "../searcBar/serachBar";

import styles from "./styles.module.css";
import logoMD from "../../assets/mdlogo.webp";
import blacoBotin from "../../assets/navbar0/blancoBotin.png";
import blancoremera from "../../assets/navbar0/blancoRemera.png";
import blacoguante from "../../assets/navbar0/blancoGuante.png";

import futbol from "../../assets/navbar0/futbolJuli.jpg";
import basquet from "../../assets/navbar0/basquetLebron.jpg";
import voley from "../../assets/navbar0/voleymujer.avif";

const NavBar = () => {
  //
  const [all, setAll] = useState(false);
  const [accessories, setAccessories] = useState(false);
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  //
  const [allMovil, setAllMovil] = useState(false);
  const [accessoriesMovil, setAccessoriesMovil] = useState(false);

  return (
    <div className={styles.navBar}>
      <div className={styles.center}>
        <a href="/">
          <img
            src={logoMD}
            alt="logo MD"
            className={styles.icon}
            loading="lazy"
          />
        </a>
        <div className={styles.menus}>
          <div
            onMouseLeave={() => setAll(false)}
            className={styles.containerButtons}
          >
            <div
              onMouseOver={() => setAll(true)}
              className={styles.principalButton}
            >
              <a href="/productos">
                <span name="all">TODO</span>
              </a>
            </div>
            {all && (
              <div className={styles.dropDowns}>
                <div className={styles.dropDownsButtons}>
                  <a href="/productos/calzado">
                    <button className={styles.title}>CALZADOS</button>
                  </a>

                  <img
                    src={blacoBotin}
                    alt="imagen calzado"
                    width={170}
                    height={130}
                    loading="lazy"
                  />
                  <a href="/productos/calzado/novedades">Novedades</a>
                  <a href="/productos/calzado/botines">Botínes</a>
                </div>
                <div className={styles.dropDownsButtons}>
                  <a href="/productos/ropa">
                    <button className={styles.title}>ROPA</button>
                  </a>

                  <img
                    src={blancoremera}
                    alt="imagen remera"
                    width={170}
                    height={130}
                    loading="lazy"
                  />
                  <a href="/productos/ropa/novedades">Novedades</a>
                  <a href="/productos/ropa/camiseta">Camisetas</a>
                  <a href="/productos/ropa/musculosa">Musculosas</a>
                  <a href="/productos/ropa/pantalon">Pantalones</a>
                  <a href="/productos/ropa/shorts">Shorts</a>
                  <a href="/productos/ropa/conjunto">Conjuntos</a>
                </div>
                <div className={styles.dropDownsButtons}>
                  <a href="/productos/accesorio">
                    <button className={styles.title}>ACCESORIOS</button>
                  </a>
                  <img
                    src={blacoguante}
                    alt="imagen guantes"
                    width={170}
                    height={130}
                    loading="lazy"
                  />
                  <a href="/productos/accesorio/pelotas">Pelotas</a>
                  <a href="/productos/accesorio/gorra">Gorras</a>
                  <a href="/productos/accesorio/medias">Medias</a>
                  <a href="/productos/accesorio/guantes">Guantes</a>
                </div>
                <div className={styles.dropDownsButtons}>
                  <a href="/productos-deportivos">
                    <button className={styles.title}>DEPORTE</button>
                  </a>
                  <a href="/productos/fútbol">Fútbol</a>
                  <a href="/productos/básquet">Básquet</a>
                  <a href="/productos/tenis">Tenis</a>
                  <a href="/productos/vóley">Vóley</a>
                </div>
              </div>
            )}
          </div>
          {/* //?--------------------------*/}
          <div
            onMouseLeave={() => setAccessories(false)}
            className={styles.containerButtons}
          >
            <div
              onMouseOver={() => setAccessories(true)}
              className={styles.principalButton}
            >
              {/* <a href="/catalogs/accesorio"> */}
              <a href="/productos-deportivos">
                <p name="accessories">DEPORTES</p>
              </a>
            </div>

            {accessories && (
              <div className={styles.dropDowns}>
                <div className={styles.dropDownsButtons}>
                  <a href="/productos/fútbol">
                    <button className={styles.title}>FÚTBOL</button>
                  </a>
                  <img
                    src={futbol}
                    alt="img fútbol"
                    width={175}
                    height={100}
                    loading="lazy"
                  />
                  <a href="/productos/accesorio/novedades">Novedades</a>
                  <a href="/productos/accesorio/guantes">Gauntes</a>
                  <a href="/productos/accesorio/canilleras">Canilleras</a>
                  <a href="/productos/accesorio/medias">Medias</a>
                  <a href="/productos/accesorio/pelotas">Pelotas</a>
                  <a href="/productos/accesorio/bolso">Bolso Deportivo</a>
                  <a href="/productos/accesorio/targetas">Tarjetas</a>
                  <a href="/productos/accesorio/silbato">Silbatos</a>
                  <a href="/productos/accesorio/conos">Conos</a>
                  <a href="/productos/accesorio/venda">Venda Elastica</a>
                </div>
                <div className={styles.dropDownsButtons}>
                  <a href="/productos/básquet">
                    <button className={styles.title}>BÁSQUET</button>
                  </a>
                  <img
                    src={basquet}
                    alt="img básquet"
                    width={155}
                    height={100}
                    loading="lazy"
                  />
                  <a href="/productos/accesorio/novedades">Novedades</a>
                  <a href="/productos/accesorio/pelota-básquet">Pelotas</a>
                  <a href="/productos/accesorio/red">Red</a>
                  <a href="/productos/ropa/shorts">Shorts</a>
                  <a href="/productos/ropa/camiseta-básquet">Camisetas</a>
                  <a href="/productos/accesorio/venda">Venda Elastica</a>
                </div>
                <div className={styles.dropDownsButtons}>
                  <a href="/productos/vóley">
                    <button className={styles.title}>VÓLEY</button>
                  </a>
                  <img
                    src={voley}
                    alt="img voley"
                    width={155}
                    height={100}
                    loading="lazy"
                  />
                  <a href="/productos/accesorio/novedades">Novedades</a>
                  <a href="/productos/accesorio/pelota-voley">Pelotas</a>
                  <a href="/productos/accesorio/bolso">Bolsos</a>
                </div>
                <div className={styles.dropDownsButtons}>
                  <a href="/productos/otros">
                    <button className={styles.title}>OTROS</button>
                  </a>
                  <a href="/productos/accesorio/protector">Protector Bucal</a>
                  <a href="/productos/accesorio/antiparras">Antiparras</a>
                  <a href="/productos/accesorio/soga">Soga Para Saltar</a>
                  <a href="/productos/accesorio/conos">Conos</a>
                  <a href="/productos/accesorio/venda">Vendas Elásticas</a>
                  <a href="/productos/accesorio/pesa">Pesas</a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.rigth}>
          <SearchBar />
          <a href="/ayuda/faqs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "#101010" }}
            >
              <path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z"></path>
            </svg>
          </a>
        </div>
        {/* //!----------------------------------------------------------------------------------------------------- */}
        <div className={styles.movil}>
          <button
            onClick={() => setSearch(true)}
            className={styles.buttonBurger}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              style={{ fill: "#ffd904" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
              />
            </svg>
          </button>

          {search && (
            <div className={styles.movilMenu}>
              <div className={styles.top}>
                <button
                  onClick={() => setSearch(false)}
                  className={styles.buttonOut}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    style={{ fill: "#ffd904" }}
                  >
                    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                  </svg>
                </button>
              </div>
              <div className={styles.nav}>
                <SearchBar />
              </div>
            </div>
          )}

          <button onClick={() => setMenu(true)} className={styles.buttonBurger}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              style={{ fill: "#ffd904" }}
              className={styles.burger}
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </button>
          {menu && (
            <div className={styles.movilMenu}>
              <div className={styles.top}>
                <button
                  onClick={() => setMenu(false)}
                  className={styles.buttonOut}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    style={{ fill: "#ffd904" }}
                  >
                    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                  </svg>
                </button>
              </div>
              {/* +++++++++++ OPTIONS +++++++++++++ */}
              <div className={styles.options}>
                <div>
                  {allMovil ? (
                    // flechita top
                    <button onClick={() => setAllMovil(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        style={{ fill: "#ffd904" }}
                      >
                        <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
                      </svg>
                      TODO
                    </button>
                  ) : (
                    // flechita bottom
                    <button onClick={() => setAllMovil(true)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        style={{ fill: "#ffd904" }}
                      >
                        <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                      </svg>
                      TODO
                    </button>
                  )}
                </div>
                {allMovil && (
                  <div>
                    <div className={styles.dropDownsButtonsMovil}>
                      <a href="/productos/calzado">
                        <button className={styles.title}>CALZADOS</button>
                      </a>
                      <a href="/productos/calzado/novedades">Novedades</a>
                      <a href="/productos/calzado/botines">Botínes</a>
                    </div>
                    <div className={styles.dropDownsButtonsMovil}>
                      <a href="/productos/ropa">
                        <button className={styles.title}>ROPA</button>
                      </a>

                      <a href="/productos/ropa/novedades">Novedades</a>
                      <a href="/productos/ropa/camiseta">Camisetas</a>
                      <a href="/productos/ropa/musculosa">Musculosas</a>
                      <a href="/productos/ropa/pantalon">Pantalones</a>
                      <a href="/productos/ropa/shorts">Shorts</a>
                      <a href="/productos/ropa/conjunto">Conjuntos</a>
                    </div>
                    <div className={styles.dropDownsButtonsMovil}>
                      <a href="/productos/accesorio">
                        <button className={styles.title}>ACCESORIOS</button>
                      </a>
                      <a href="/productos/accesorio/pelotas">Pelotas</a>
                      <a href="/productos/accesorio/gorra">Gorras</a>
                      <a href="/productos/accesorio/medias">Medias</a>
                      <a href="/productos/accesorio/guantes">Guantes</a>
                    </div>
                    <div className={styles.dropDownsButtonsMovil}>
                      <a href="/productos-deportivos">
                        <button className={styles.title}>DEPORTE</button>
                      </a>
                      <a href="/productos/fútbol">Fútbol</a>
                      <a href="/productos/básquet">Básquet</a>
                      <a href="/productos/tenis">Tenis</a>
                      <a href="/productos/vóley">Vóley</a>
                    </div>
                  </div>
                )}

                <div>
                  {accessoriesMovil ? (
                    // flechita top
                    <button onClick={() => setAccessoriesMovil(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        style={{ fill: "#ffd904" }}
                      >
                        <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
                      </svg>
                      DEPORTES
                    </button>
                  ) : (
                    // flechita bottom
                    <button onClick={() => setAccessoriesMovil(true)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        style={{ fill: "#ffd904" }}
                      >
                        <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                      </svg>
                      DEPORTES
                    </button>
                  )}
                </div>

                {accessoriesMovil && (
                  <div>
                    <div className={styles.dropDownsButtonsMovil}>
                      <a href="/productos-deportivos">
                        <button className={styles.title}>TODO</button>
                      </a>
                      <a href="/productos-deportivos">
                        <button className={styles.title}>FÚTBOL</button>
                      </a>
                      <a href="/productos/accesorio/novedades">Novedades</a>
                      <a href="/productos/accesorio/guantes">Gauntes</a>
                      <a href="/productos/accesorio/canilleras">Canilleras</a>
                      <a href="/productos/accesorio/medias">Medias</a>
                      <a href="/productos/accesorio/pelotas">Pelotas</a>
                      <a href="/productos/accesorio/bolso">Bolso Deportivo</a>
                      <a href="/productos/accesorio/targetas">Tarjetas</a>
                      <a href="/productos/accesorio/silbato">Silbatos</a>
                      <a href="/productos/accesorio/conos">Conos</a>
                      <a href="/productos/accesorio/venda">Venda Elastica</a>
                    </div>
                    <div className={styles.dropDownsButtonsMovil}>
                      <a href="/productos/básquet">
                        <button className={styles.title}>BÁSQUET</button>
                      </a>
                      <a href="/productos/accesorio/novedades">Novedades</a>
                      <a href="/productos/accesorio/pelota-básquet">Pelotas</a>
                      <a href="/productos/accesorio/red">Red</a>
                      <a href="/productos/ropa/shorts">Shorts</a>
                      <a href="/productos/ropa/camiseta-básquet">Camisetas</a>
                      <a href="/productos/accesorio/venda">Venda Elastica</a>
                    </div>
                    <div className={styles.dropDownsButtonsMovil}>
                      <a href="/productos/vóley">
                        <button className={styles.title}>VÓLEY</button>
                      </a>

                      <a href="/productos/accesorio/novedades">Novedades</a>
                      <a href="/productos/accesorio/pelota-voley">Pelotas</a>
                      <a href="/productos/accesorio/bolso">Bolsos</a>
                    </div>
                    <div className={styles.dropDownsButtonsMovil}>
                      <a href="/productos/otros">
                        <button className={styles.title}>OTROS</button>
                      </a>
                      <a href="/productos/accesorio/protector">
                        Protector Bucal
                      </a>
                      <a href="/productos/accesorio/antiparras">Antiparras</a>
                      <a href="/productos/accesorio/soga">Soga Para Saltar</a>
                      <a href="/productos/accesorio/conos">Conos</a>
                      <a href="/productos/accesorio/venda">Vendas Elásticas</a>
                      <a href="/productos/accesorio/pesa">Pesas</a>
                    </div>
                  </div>
                )}
                <div className={styles.question}>
                  <a href="/ayuda/faqs">
                    <span>PREGUNTAS FRECUENTES</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

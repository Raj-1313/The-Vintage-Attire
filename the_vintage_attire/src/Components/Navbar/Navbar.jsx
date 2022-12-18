import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import V from "./V.png";
import { AiOutlineShopping } from "react-icons/ai";
import "./Navbar.scss";
import { Flex,Box } from "@chakra-ui/react";
import Login from "../Login";
import { Button, useDisclosure } from "@chakra-ui/react";
import { AuthLogin, logout } from "../../Redux/AuthReducer/Auth_actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const { userDetails, isAuth,isLoading,isError } = useSelector((store) => store.Auth_reducer);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (userDetails?.category == "Admin") {
      setIsAdmin(true);
    }
  }, [isAuth, userDetails]);




  return (
    <div>
      <nav className="navbar-head">
        {/* navbar is divided in two parts left and right */}

        <ul className="left-navbar">
          {/* first li tag New Category */}
          <li className="left-navbar-li">
            <a href="/">New</a>

            {/* on hover this property will show */}
            <div className="new-cat-hover">
              <div className="new-cat-div">
                <h2>Shop new Arrivals</h2>
                <ul className="new-cat-ul">
                  <li>
                  <Link to="/product/women">
                    For Women
                    </Link>
                  </li>
                  <Link to="/product/men">
                  <li>For Men</li>
                    </Link>
                  <Link to="/product/kids">
                  <li>For Girls</li>
                  </Link >
                  <Link to="/product/kids">
                  <li>For Boys</li>
                  </Link >
                </ul>
              </div>
              <div className="new-cat-div">
                <h2>What to Shop Now</h2>
                <br />
                <h3>WOMEN</h3>
                <ul className="new-cat-ul">
                  <li>The Gift Guide</li>
                  <li>Olympia’s Picks</li>
                  <li>Marie Marot X J.Crew</li>
                  <li>The Sun Shop</li>
                  <li>The Ski Shop</li>
                  <li>The Holiday Party Shop</li>
                  <li>Statement Coats</li>
                  <li>Tartan Everything</li>
                </ul>
              </div>

              <div className="new-cat-div">
                <br />
                <br />
                <h3>MEN</h3>
                <ul className="new-cat-ul">
                  <li>Peak Sweater Season</li>
                  <li>The Holiday Party Shop</li>
                  <li>Heavyweight Chamois Workshirts</li>
                  <li>New Parkas & Topcoats</li>
                  <li>Source Materials</li>
                  <li>Heritage 14 Oz. Fleece</li>
                </ul>
              </div>
              <div className="new-cat-div">
                <h2>Bookmark These</h2>
                <div className="new-cat-photo">
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1206_flyouts_new_img0_new.jpg"
                      alt=""
                    />
                    <p>The Holiday Party Shop</p>
                  </div>

                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1206_flyouts_new_img1.jpg"
                      alt=""
                    />
                    <p>Peak Sweater Season</p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* women category  */}

          <li>
            <a href="/product/women">Women</a>
            <div className="women-cat-hover">
              <div className="women-cat-div">
                <h2>WOMEN</h2>
                <div className="women-cat-subdiv">
                  <ul className="women-cat-ul">
                    <li>New Arrivals</li>
                    <li>Gifts</li>
                    <li>Best Sellers</li>
                    <li>Top Rated</li>
                    <li>Brands We Love</li>
                    <li>The Re-Imagined Shop</li>
                    <li>Shop All</li>
                    <li>Sale</li>
                  </ul>
                </div>

                <div className="women-cat-subdiv">
                  <br />
                  <h2>What to Shop Now</h2>
                  <ul className="women-cat-ul">
                    <li>The Gift Guide</li>
                    <li>Olympia’s Picks</li>
                    <li>Marie Marot X J.Crew</li>
                    <li>The Sun Shop</li>
                    <li>The Ski Shop</li>
                    <li>The Holiday Party Shop</li>
                    <li>Statement Coats</li>
                    <li>Tartan Everything</li>
                  </ul>
                </div>
              </div>

              <div className="women-cat-div">
                <h2>Clothing</h2>
                <ul className="women-cat-ul">
                  <li>All Clothing</li>
                  <li>Sweaters</li>
                  <li>Shirts & Tops</li>
                  <li>T-Shirts & Tank Tops</li>
                  <li>Dresses & Jumpsuits</li>
                  <li>Blazers</li>
                  <li>Pants</li>
                  <li>Denim</li>
                  <li>Coats & Jackets</li>
                  <li>Skirts</li>
                  <li>Shorts</li>
                  <li>Swimwear</li>
                  <li>Sweatshirts & Sweatpants</li>
                  <li>Active</li>
                  <li>Matching Sets</li>
                  <li>Pajamas & Intimates</li>
                  <li>Suiting</li>
                  <li>Maternity</li>
                </ul>
              </div>

              <div className="women-cat-div">
                <h2>Shoes and Sneakers</h2>
                <div className="women-cat-subdiv">
                  <ul className="women-cat-ul">
                    <li> All Shoes & Sneakers</li>
                    <li>Sneakers</li>
                    <li>Boots</li>
                    <li>Dress Shoes</li>
                    <li>Slippers</li>
                  </ul>
                </div>

                <div className="women-cat-subdiv">
                  <h2>Accessories</h2>

                  <ul className="women-cat-ul">
                    <li>All Accessories</li>
                    <li>Jewelry</li>
                    <li>Bags</li>
                    <li>Hats, Scarves, & Gloves</li>
                    <li>Accessories & More</li>
                    <li>Candles, Beauty, & Home</li>
                    <li>Socks & Tights</li>
                  </ul>
                </div>
              </div>

              <div className="women-cat-div">
                <h2>The Sun Shop</h2>
                <div id="women-cat-subdiv">
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img0.jpg"
                      alt=""
                    />
                    <p>The Ski shop</p>
                  </div>
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img1_new.jpg"
                      alt=""
                    />
                    <p>The Sun shop</p>
                  </div>
                </div>
                <div id="women-cat-subdiv2">
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img3.jpg"
                      alt=""
                    />
                    <p>Festive Pj Sets</p>
                  </div>
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img2.jpg"
                      alt=""
                    />
                    <p>New Sweaters</p>
                  </div>
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img4.jpg"
                      alt=""
                    />
                    <p>Our Warmest Coats</p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Men Hover / Category */}
          <li>
            <a href="/product/men">Men</a>
            <div className="men-cat-hover">
              <div className="men-cat-div">
                <h2>MEN</h2>
                <div className="men-cat-subdiv">
                  <ul className="men-cat-ul">
                    <li>New Arrivals</li>
                    <li>Gifts</li>
                    <li>Best Sellers</li>
                    <li>Top Rated</li>
                    <li>Brands We Love</li>
                    <li>The Re-Imagined Shop</li>
                    <li>Shop All</li>
                    <li>Sale</li>
                  </ul>
                </div>

                <div className="men-cat-subdiv">
                  <br />
                  <h2>What to Shop Now</h2>
                  <ul className="men-cat-ul">
                    <li>The Gift Guide</li>
                    <li>Olympia’s Picks</li>
                    <li>Marie Marot X J.Crew</li>
                    <li>The Sun Shop</li>
                    <li>The Ski Shop</li>
                    <li>The Holiday Party Shop</li>
                    <li>Statement Coats</li>
                    <li>Tartan Everything</li>
                  </ul>
                </div>
              </div>

              <div className="men-cat-div">
                <h2>Clothing</h2>
                <ul className="men-cat-ul">
                  <li>All Clothing</li>
                  <li>Sweaters</li>
                  <li>Coats & Jackets</li>
                  <li>T-Shirts & Tank Tops</li>
                  <li>Dresses & Jumpsuits</li>
                  <li>Blazers</li>
                  <li>Casual Shirts</li>
                  <li>Dress Shirts</li>
                  <li>Pants & Chinos</li>
                  <li>Denim</li>
                  <li>Suits & Tuxedos</li>
                  <li>Blazers</li>
                  <li>Sweatshirts & Sweatpants</li>
                  <li>Polos & Rugby</li>
                  <li>T-Shirts</li>
                  <li>Pajamas & Loungewear</li>
                  <li>Swim</li>
                  <li>Underwear & Boxers</li>
                </ul>
              </div>

              <div className="men-cat-div">
                <h2>Shoes and Sneakers</h2>
                <div className="men-cat-subdiv">
                  <ul className="men-cat-ul">
                    <li> All Shoes & Sneakers</li>
                    <li>Sneakers</li>
                    <li>Boots</li>
                    <li>Dress Shoes</li>
                    <li>Slippers</li>
                  </ul>
                </div>

                <div className="men-cat-subdiv">
                  <h2>Accessories</h2>
                  <br />
                  <ul className="men-cat-ul">
                    <li>All Accessories</li>
                    <li>Jewelry</li>
                    <li>Bags</li>
                    <li>Hats, Scarves, & Gloves</li>
                    <li>Accessories & More</li>
                    <li>Candles, Beauty, & Home</li>
                    <li>Socks & Tights</li>
                  </ul>
                </div>
              </div>

              <div className="men-cat-div">
                <h2>The Sun Shop</h2>
                <div id="men-cat-subdiv">
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_m_img0.jpg"
                      alt=""
                    />
                    <p>Peak sweater season</p>
                  </div>
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_m_img1.jpg"
                      alt=""
                    />
                    <p>Mount Snow X J.Crew</p>
                  </div>
                </div>
                <div id="men-cat-subdiv2">
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_m_img2.jpg"
                      alt=""
                    />
                    <p>Lounge Like you</p>
                  </div>
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_m_img3.jpg"
                      alt=""
                    />
                    <p>Cold Weather</p>
                  </div>
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_m_img4.jpg"
                      alt=""
                    />
                    <p>The Gift Guide</p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a href="/product/kids">Kids</a>
            {/* Kids Hover Section */}
            <div className="kids-cat-hover">
              <div className="kids-cat-div">
                <h2>Kids</h2>
                <div className="kids-cat-subdiv">
                  <ul className="kids-cat-ul">
                    <li>Girls' New Arrivals</li>
                    <li>Girls' Gifts</li>
                    <li>Girls' Best Sellers</li>
                    <li>Girls' Top Rated</li>
                    <li>Girls' Brands We Love</li>
                    <li>Girls' The Re-Imagined Shop</li>
                    <li>Shop All Girls' </li>
                    <li>Girls' Sale</li>
                    <br />
                    <li>Boys' New Arrivals</li>
                    <li>Boys' Gifts</li>
                    <li>Boys' Best Sellers</li>
                    <li>Boys' Top Rated</li>
                    <li>Boys' Brands We Love</li>
                    <li>Boys' The Re-Imagined Shop</li>
                    <li>Shop All Boys' </li>
                    <li>Boys' Sale</li>
                  </ul>
                </div>
              </div>

              <div className="kids-cat-div">
                <h2>Girls</h2>
                <ul className="kids-cat-ul">
                  <li>All Clothing</li>
                  <li>Dresses & Jumpsuits</li>
                  <li>Tops & Tees</li>
                  <li>Graphics Shop</li>
                  <li>Dresses & Jumpsuits</li>
                  <li>Pajamas</li>
                  <li>Coats & Jackets</li>
                  <li>Sweaters</li>
                  <li>Sweatshirts & Sweatpants</li>
                  <li>Skirts</li>
                  <li>Blazers</li>
                  <li>Sweatshirts & Sweatpants</li>
                  <li>Denim</li>
                  <li>Pajamas & Loungewear</li>
                  <li>Swim & Rash Guards</li>
                  <li>Baby</li>

                  <br />
                  <li>
                    <h4>All Accessories</h4>
                  </li>
                  <li>Fun Finds</li>
                  <li>Back To School</li>
                </ul>
              </div>

              <div className="kids-cat-div">
                <h2>Boys</h2>

                <ul className="kids-cat-ul">
                  <li>All Clothing</li>
                  <li>Shirts</li>
                  <li>T-Shirts & Polo</li>
                  <li>Graphics Shop</li>
                  <li>Coats & Jackets</li>
                  <li>Sweaters</li>
                  <li>Coats & Jackets</li>
                  <li>Sweaters</li>
                  <li>Sweatshirts & Sweatpants</li>
                  <li>Leggings & Pants</li>
                  <li>Sweatshirts & Sweatpants</li>
                  <li>Active</li>
                  <li>Swim & Rash Guards</li>
                  <li>Pajamas & Loungewear</li>
                  <li>Chinos & Pants</li>
                  <li>Baby</li>

                  <br />
                  <li>
                    <h4>All Accessories</h4>
                  </li>
                  <li>Fun Finds</li>
                  <li>All Shoes & Sneakers</li>
                </ul>
              </div>

              <div className="kids-cat-div">
                <h2>Shops, stories & more</h2>
                <div id="kids-cat-subdiv">
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202213-Gift/flyout/2022gifcyb_1122_flyouts_cc_img0.jpg"
                      alt=""
                    />
                    <p>new arrivals, new gifts!</p>
                  </div>
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202213-Gift/flyout/2022gifcyb_1122_flyouts_cc_img1.jpg"
                      alt=""
                    />
                    <p>mix-and-match pj’s</p>
                  </div>
                </div>
                <div id="kids-cat-subdiv2">
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202213-Gift/flyout/2022gifcyb_1122_flyouts_cc_img2.jpg"
                      alt=""
                    />
                    <p>color coated</p>
                  </div>
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202213-Gift/flyout/2022gifcyb_1122_flyouts_cc_img3.jpg"
                      alt=""
                    />
                    <p>The gift guide</p>
                  </div>
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202213-Gift/flyout/2022gifcyb_1122_flyouts_cc_img4.jpg"
                      alt=""
                    />
                    <p>The mini-me shop</p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a href="">Cashmere</a>
            {/* Cashmere Hover */}
            <div className="cashmere-cat-hover">
              <h2>Shop Cashmere</h2>

              <ul className="cashmere-cat-ul">
                <li>For Women</li>
                <li>For Men</li>
                <li>For Girls</li>
                <li>For Boys</li>
                <li>For Baby</li>
              </ul>
            </div>
          </li>
          <li>
            <a href="/product/home">Home</a>

            {/* Home Hover/Category */}
            <div className="home-cat-hover">
              <div className="home-cat-div">
                <h2>Home</h2>
                <ul className="home-cat-ul">
                  <li>Shop All</li>
                  <li>New Arrivals</li>
                  <li>Brands We Love</li>
                  <li>Sale</li>
                </ul>
              </div>
              <div className="home-cat-div">
                <h2>Shop Home</h2>
                <ul className="home-cat-ul">
                  <li>Dining & Entertainment</li>
                  <li>Bedding & Bath</li>
                  <li>Decor & Gifts</li>
                  <li>Beauty & Wellness</li>
                  <li>Home Office & Tech</li>
                  <li>Travel & Gear</li>
                  <li>Pets</li>
                </ul>
              </div>

              <div className="home-cat-div"></div>
              <div className="home-cat-div">
                <h2>Shop The Latest</h2>
                <div className="home-cat-photo">
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202211-Nov/flyout/2022nov_1025_flyouts_home_img0.jpg"
                      alt=""
                    />
                    <p>J.Crew home, in tartans & Liberty® fabrics</p>
                  </div>

                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202211-Nov/flyout/2022nov_1025_flyouts_home_img1.jpg"
                      alt=""
                    />
                    <p>Colorful glassware</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="">Stories</a>
            {/* Stories Hover / Category */}
            <div className="stories-cat-hover">
              <div className="stories-cat-div">
                <h2>Shop The Latest</h2>
                <div className="stories-cat-photo">
                  <div>
                    <img src={V} alt="" />
                    <p>J.Crew home, in tartans & Liberty® fabrics</p>
                  </div>
                </div>
              </div>
              <div className="stories-cat-div">
                <h2>Women's Stories</h2>
                <h3>The Vintage Attire Collective</h3>
                <br />
                <ul className="stories-cat-ul">
                  <li>A Cashmere Remix with Lucy Williams</li>
                  <li>Layer love with Marjon Carlos</li>
                  <br />
                  <li>
                    <h4>Community</h4>
                  </li>

                  <li> A Very J.Crew Holiday</li>
                  <li>Marie Marot X J.Crew</li>
                  <li>Paula Mendoza Jewelry X J.Crew</li>
                </ul>
              </div>
              <div className="stories-cat-div">
                <h2>Men's Stories</h2>
                <h3>Style</h3>
                <br />
                <ul className="stories-cat-ul">
                  <li>Mount Snow X J.Crew with NYC band Rebounder</li>
                  <li>Dress code: downtown with Nick Poe</li>
                  <li>Suiting up with Saji Abude</li>
                  <li>BEAMS PLUS X J.Crew with Mike Mills</li>
                  <br />
                  <li>
                    <h4>Community</h4>
                  </li>

                  <li> Sporting life: the North Fork Polar Bears Club</li>
                  <li>Tracksmith® X J.Crew</li>
                  <li>Sporting life with Row New York</li>
                </ul>
              </div>
              <div className="stories-cat-div">
                <h2>Bookmark These</h2>
                <div className="stories-cat-photo">
                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202213-Gift/flyout/2022gifcyb_flyout_stories_img0.jpg"
                      alt=""
                    />
                    <p>Marie Marot X J.Crew</p>
                  </div>

                  <div>
                    <img
                      src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1206_flyouts_stories_img1.jpg"
                      alt=""
                    />
                    <p>Mount Snow X J.Crew</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="">Sale</a>
            <div className="sale-cat-hover">
              <div className="wrap-sale">
                <div className="sale-cat-div">
                  <h2>Sale</h2>
                  <ul className="sale-cat-ul">
                    <li>Shop Women's Sale</li>
                    <li>Shop Men's Sale</li>
                    <li>Shop Girls' Sale</li>
                    <li>Shop Boys' Sale</li>
                    <li>Shop Home Sale</li>
                  </ul>
                </div>
                <div className="sale-cat-div">
                  <h2>Women</h2>
                  <ul className="sale-cat-ul">
                    <li>Shop All</li>
                    <li>New To Sale</li>
                    <li>Over 60% Off</li>
                  </ul>
                  <br />
                  <h2>Girls</h2>
                  <ul className="sale-cat-ul">
                    <li>Shop All</li>
                    <li>New To Sale</li>
                    <li>Over 60% Off</li>
                  </ul>
                </div>
                <div className="sale-cat-div">
                  <h2>Men</h2>
                  <ul className="sale-cat-ul">
                    <li>Shop All</li>
                    <li>New To Sale</li>
                    <li>Over 60% Off</li>
                  </ul>
                  <br />
                  <h2>Boys</h2>
                  <ul className="sale-cat-ul">
                    <li>Shop All</li>
                    <li>New To Sale</li>
                    <li>Over 60% Off</li>
                  </ul>
                </div>
              </div>
              <div className="sale-cat-div"></div>
              <div className="sale-cat-div"></div>
            </div>
          </li>
        </ul>
        <Link to="/">
           <h2
            className="navbar-logo"
            style={{ fontFamily: "sofia", fontSize: "1.5rem" }}
          >
            The Vintage Attire
          </h2>
        </Link>
        <ul className="right-navbar">
          <li>
            <Link to="/cart">
              <AiOutlineShopping size={"1.75rem"} />
            </Link>
          </li>
          <li>
            {/* <Signup /> */}
            {isAdmin && isAdmin ? (
              <Flex  justifyContent='space-between'  alignItems='center' >
                <Button size='sm' onClick={() => navigate("/admin")}>Admin</Button>
                <Button size='sm'
                  _hover={{ bg: "rgb(134, 130, 238)", color: "white" }}                  
                  onClick={() => dispatch(logout())}
                >
                  Log Out
                </Button>
              </Flex>
            ) : isAuth ? (
              <Button
                _hover={{ bg: "rgb(134, 130, 238)", color: "white" }}
                mb={2}
                onClick={() => (dispatch(logout()))}
              >
                Log Out
              </Button>
            ) : (
              <Login />
            )}
          </li>
        </ul>
        <motion.div className="app__navbar-menu">
          <HiMenu onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [-300, 0] }}
              transition={{ duration: 0.85, ease: "easeIn" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                <li key={`link-home`}>
                  <a onClick={() => setToggle(false)} href="#home">
                    New
                  </a>
                </li>
                <li key={`link-aboutme`}>
                  <a onClick={() => setToggle(false)} href="#about me">
                    Women
                  </a>
                </li>
                <li key={`link-projects`}>
                  <a onClick={() => setToggle(false)} href="#projects">
                    Men
                  </a>
                </li>
                <li key={`link-skills`}>
                  <a onClick={() => setToggle(false)} href="#skills">
                    Kids
                  </a>
                </li>
                <li key={`link-contacts`}>
                  <a onClick={() => setToggle(false)} href="#contacts">
                    Home
                  </a>
                </li>
                <li key={`link-resume`}>
                  <a onClick={() => setToggle(false)} href="">
                    Sale
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;

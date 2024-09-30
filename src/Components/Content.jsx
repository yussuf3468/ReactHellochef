import bannerImage from '../assets/images/banner.webp';
import WideButton from './WideButton';
import convenience from '../assets/images/box_over.webp'
import veriety from '../assets/images/variety-hi.webp'
import delicious from '../assets/images/salmon_katsu.webp'
import familyPhoto from '../assets/images/Family_cooking.webp'
import NarrowButton from './NarrowButton';
import instagram from '../assets/images/instagram.webp'
import aysha from '../assets/images/dxblivin-credit.webp'
import ayshasah from '../assets/images/ayshasaiha.webp'
import shimber from '../assets/images/shrimply.webp'
import ashley from '../assets/images/ashley_dxb.webp'
import google from '../assets/images/google.webp'
import Bcorp from '../assets/Bcorp.svg'
import Bcorp2 from '../assets/Bcorp2.svg'
import logo from '../assets/hello.svg'
import facebook from '../assets/facebook.svg'
import tiktok from '../assets/tiktok.svg'
import youtube from '../assets/youtube.svg'



function Content() {
    const images = [
        'src/assets/images/vegan.webp',
        'src/assets/images/weekly_classic.webp',
        'src/assets/images/Vegetarian.webp',
        'src/assets/images/gourmet.webp',
        'src/assets/images/Chefschoice.webp',
        'src/assets/images/family_friendly.webp',
        'src/assets/images/quick_easy.webp'
    ]
    return (
        <>
            <div className='sectionOne'>
                <img src={bannerImage} alt="Banner" />
                <div class="overlay">
                    <h1>Say hello to a new way of cooking</h1>
                    <p> Delicious recipes. Delivered by us, made by you. Ready to unbox mealtime?</p>
                    <WideButton text="Get started" />
                </div>
            </div>
            {/* sectiontwo */}
            <section class="sectionTwo">
                <h2>Why choose us?</h2>
                <p>
                    Eat well for less with impressively
                    easy meals starting from AED 35 per serving
                </p>
                <div class="principles">
                    <div class="principle">
                        <img src={convenience} alt="" />
                        <h3>Convenience</h3>
                        <p>
                            <i class="fa-solid fa-check"></i>
                            Pre-measured ingredients & easy recipes
                        </p>
                        <p>
                            <i class="fa-solid fa-check"></i>
                            Contactless, doorstep delivery across UAE
                        </p>
                        <p>
                            <i class="fa-solid fa-check"></i>
                            Skip a delivery or cancel anytime
                        </p>
                    </div>
                    <div class="principle">
                        <img src={veriety} alt="" />
                        <h3>Variety</h3>
                        <p>
                            <i class="fa-solid fa-check"></i>
                            New recipes every week
                        </p>
                        <p>
                            <i class="fa-solid fa-check"></i>
                            24+ dishes to choose from
                        </p>
                        <p>
                            <i class="fa-solid fa-check"></i>
                            Low calories & family-friendly options
                        </p>
                    </div>
                    <div class="principle">
                        <img src={delicious} alt="" />
                        <h3>Deliciousness</h3>
                        <p>
                            <i class="fa-solid fa-check"></i>
                            No skimping' on the portion size!
                        </p>
                        <p>
                            <i class="fa-solid fa-check"></i>
                            100% satisfaction guarantee, or we will make it right
                        </p>
                        <p>
                            <i class="fa-solid fa-check"></i>
                            Fresh ingridients from local,trusted suppliers
                        </p>
                    </div>
                </div>
            </section>
            <section class="sectionThree">
                <img src={familyPhoto} alt="" />
                <div class="steps">
                    <h2>How it works</h2>
                    <p>
                        Simply home cooking in just 4 easy steps. Get quality ingredients & great recipes delivered to your door.
                    </p>

                    <p>
                        <span>1</span>
                        Select your box
                    </p>

                    <p>
                        <span>2</span>
                        Choose your recipes
                    </p>

                    <p>
                        <span>3</span>
                        Receive your delivery
                    </p>

                    <p>
                        <span>4</span>
                        Cook,eat and enjoy
                    </p>
                    <div className='btn'>
                        <WideButton text="Learn More" />
                    </div>
                </div>
            </section>

            {/* sectionFour */}
            <section className='sectionFour'>
                <div className='sect4con'>
                    <h2>Ready to cook healthy & inspiring meals?</h2>
                    <p>Choose from 34+ recipes every week - from light, low-calorie dishes to hearty, family <br /> favourites. Look out for our handy recipe tags to make choosing even simpler.</p>
                </div>

                {/* the carousel */}
                <div>
                    <div id="carousel">
                        <span className='drop'>{'<'}</span>
                            <div className='imgbtn'>
                                <img src={images[0]} alt="" />
                                <NarrowButton text1="Vegan" className="btnStyle1" />
                            </div>
                            <div className='imgbtn'>
                                <img src={images[1]} alt="" />
                                <NarrowButton text1="Weekly Classic" className="btnStyle2"/>
                            </div>
                            <div className='imgbtn'>
                                <img src={images[2]} alt="" />
                                <NarrowButton text1="Vegetarian" className="btnStyle3"/>
                            </div>

                        <span className='drop'>{'>'}</span>
                    </div>
                </div>
                <WideButton text="View Menu" className="btnstyleot"/>
            </section>
            {/* sectionFive */}
            <section className='sectionFive'>
                <div className='secFiveContent'>
                    <div className='insta'>
                    <img src={instagram} alt="" className='instagram'/>
                    <p>#hellochef</p>
                    </div>
                    <div className='imges'>
                    <img src={aysha} alt="" />
                    <img src={ayshasah} alt="" />
                    <img src={shimber} alt="" />
                    <img src={ashley} alt="" />
                    </div>   
                </div>  
                <div className='stars'>
                    <p>Over <span>3 million meals</span><br />
                    Cooked and loved by our customers</p>
                    <p>
                        4.9
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        350+ reviews on 
                        <img src={google} alt=""/>
                    </p>   
                </div>
                <div className="Bcorp-container">
                    <div className="Bcorp-left">
                        <img src={Bcorp} alt="Certified icon" />
                    </div>
                    <div className="Bcorp-content">
                        <h5>
                        Hello Chef is a certified 
                        <span className="highlighted"> B Corp! </span>
                        <span className="new-tag">NEW</span>
                        </h5>
                        <p>
                        We're proud to join a global movement of companies using business as a force for good.
                        <a href="#"> Learn more </a>
                        </p>
                    </div>
                    <div className="Bcorp-right">
                        <img src={Bcorp2} alt="B Corp logo" />
                    </div>
                </div>
            </section>

            <div className="sectionSix">
                <div className="sectionSix-content">
                    <h2>Hungry for more?</h2>
                    <p>
                    Sign up to our newsletter for exciting updates and weekly recipe inspiration, delivered straight to your inbox.
                    </p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Email address" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                    <p className="sectionSix-description">
                    We are a weekly meal subscription service based in Dubai, delivering pre-portioned ingredients and easy-to-follow recipe cards across the UAE. Our healthy meal delivery service means you can say goodbye to stressful meal planning and instead, spend time enjoying delicious food with loved ones. Our pre-measured, ready-to-cook boxes make it easier than ever for you to discover new flavours every week.
                    </p>
            </div>

            {/* footer */}

            <footer className="footer">
                    <img className='logo' src={logo} alt="" />
                <div className="footer-top">
                    <div className="footer-column">
                    <h4>About us</h4>
                    <ul>
                        <li><a href="#">Our plans</a></li>
                        <li><a href="#">How it works</a></li>
                    </ul>
                    </div>
                    <div className="footer-column">
                    <h4>More info</h4>
                    <ul>
                        <li><a href="#">Sustainability</a></li>
                        <li><a href="#">B Corp</a></li>
                        <li><a href="#">Help center</a></li>
                    </ul>
                    </div>
                    <div className="footer-column">
                    <h4>Work With Us</h4>
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Affiliate Program</a></li>
                    </ul>
                    </div>
                    <div className="footer-column">
                    <h4>Contact us</h4>
                    <ul>
                        <li><a href="">hello@hellochef.me</a></li>
                        <li><a href="">04 825 44 00</a></li>
                    </ul>
                    </div>
                </div>
                
                <div className="footer-middle">
                    <div className="newsletter">
                        <h4>Subscribe to our newsletter</h4>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                    <div className="google-reviews">
                        <p>See Our Google Reviews</p>
                        <div className="google-rating">
                            <span>★★★★★</span>
                            <img src={google} alt="Google Reviews" />
                        </div>
                    </div>
                    <div className="social-links">
                    <a href="#"><img src={facebook} alt="Facebook" /></a>
                    <a href="#"><img src={instagram} alt="Instagram" /></a>
                    <a href="#"><img src={youtube} alt="YouTube" /></a>
                    <a href="#"><img src={tiktok} alt="TikTok" /></a>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>Made with <span>&hearts;</span> for UAE</p>
                    <p>&copy; Copyright 2024 Hello Chef All rights reserved · <a href="#">Public Policies & Statements</a></p>
                </div>
            </footer>


        </>
    );
}

export default Content;

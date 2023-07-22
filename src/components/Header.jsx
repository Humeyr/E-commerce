import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";



const Header = () => {
    const userState = useSelector((state) => state.userState);
    const categories = useSelector((state) => state.categoryState.categories)
  return (
    <>
       {/* <!-- top-header--> */}
    <div className="top-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-7 col-sm-6 hidden-xs">
                    <p className="top-text">Flexible Delivery, Fast Delivery.</p>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">
                    <ul>
                        <li>+180-123-4567</li>
                        <li>info@demo.com</li>
                        <li><Link href="#">Help</Link></li>
                    </ul>
                </div>
            </div>
            {/* <!-- /.top-header--> */}
        </div>
    </div>
    {/* <!-- header-section--> */}
    <div className="header-wrapper">
        <div className="container">
            <div className="row">
                {/* <!-- logo --> */}
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-8">
                    <div className="logo">
                        <Link href="index.html"><img src="images/logo.png" alt=""/> </Link>
                    </div>
                </div>
                {/* <!-- /.logo -->
                <!-- search --> */}
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="search-bg">
                        <input type="text" className="form-control" placeholder="Search Here"/>
                        <button type="Submit"><i className="fa fa-search"></i></button>
                    </div>
                </div>
                {/* <!-- /.search -->
                <!-- account --> */}
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="account-section">
                    
                        {userState.user ? (
                   
                            <div>
                            <li>
                                <Link to="user" className="title hidden-xs">
                                My Account
                                </Link>
                            </li>
                            <li className="hidden-xs">|</li>
                            <li>
                                <a href="#" className="title hidden-xs">
                                Logout
                                </a>
                            </li>
                            </div>
                         ) : (
                        <div>
                            <li><Link to="login" className="title hidden-xs">Login</Link></li>
                            <li className="hidden-xs">|</li>
                            <li><Link to="register" className="title hidden-xs">Register</Link></li>
                            <li><Link href="#" className="title"><i className="fa fa-shopping-cart"></i>   <sup className="cart-quantity">1</sup></Link>
                            </li>
                        </div>)}
                    </div>
                    {/* <!-- /.account --> */}
                </div>
                {/* <!-- search --> */}
            </div>
        </div>

        {/* <!-- navigation --> */}
        <div className="navigation">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        {/* <!-- navigations--> */}
                        <div id="navigation">
                            <ul>
                                <li className="active"><Link href="index.html">Home</Link></li>
                                <li className="has-sub"><Link href="#">Categories</Link>
                                <ul>
                                    {categories?.map((category, i) => (
                                        <li key={i}>
                                         <Link to={`category/${category.code}`}>
                                            {category.name}
                                         </Link>
                                         </li>
                                             ))}
                                </ul>
                                </li>
                                <li><Link href="/about">About</Link>
                                </li>
                                <li className="has-sub"><Link href="#">Pages</Link>
                                    <ul>
                                        <li><Link href="checkout.html">Checkout Form</Link></li>
                                        <li><Link href="cart.html">Cart</Link> </li>
                                        <li><Link href="login-form.html">Login</Link> </li>
                                        <li><Link href="signup-form.html">Signup</Link> </li>
                                        <li><Link href="404-page.html">404-page</Link> </li>
                                        <li><Link href="styleguide.html">styleguide</Link> </li>
                                    </ul>
                                </li>
                                <li className="has-sub"><Link href="#">Blog</Link>
                                    <ul>
                                        <li><Link href="blog-default.html">Blog Default</Link></li>
                                        <li><Link href="blog-single.html">Blog Single</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="contact-us.html">Contact Us</Link>
                                </li>
                                <li><Link href="template-feature.html">Template Feature</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- /.navigations--> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- /. header-section--> */}
    </>
  )
}

export default Header

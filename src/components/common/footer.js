import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Footer = ({ logoImg, appstoreImg, playstoreImg }) => {  
    const socialIcons = [
        {
            'name': 'instagram',
            'url': 'https://www.instagram.com/'
        },
        {
            'name': 'facebook',
            'url': 'https://www.facebook.com/'
        },
        {
            'name': 'twitter',
            'url': 'https://twitter.com/'
        },        
        {
            'name': 'youtube',
            'url': 'https://www.youtube.com/'
        },
        {
            'name': 'dribbble',
            'url': 'https://www.youtube.com/'
        }
    ]
  return(
    <footer className="w-100 float-left bg-secondary pt-md-15 pb-md-25 pt-10 pb-15 px-sm-10">
        <div className="container">
            <div className="row">
            <div className="col-lg-2 col-xs-12">
                <div className="f-logo">
                    <Link to="/">
                        <GatsbyImage
                            alt="Online Accountants from £28 a month | Mazuma Accountants"
                            image={getImage(logoImg)} 
                            width={118} height={118}
                        />
                    </Link>
                </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-xs-12">
                <div className="f_links w-100 float-left mb-lg-0 mb-10">
                <h4 className="text-white-50 font-weight-bold text-uppercase font-size-3 mb-6">Features</h4>
                <ul className="list-unstyled">
                    <li><a href="#" className="nav-link font-size-5 text-white">Claims</a></li>
                    <li><a href="#" className="nav-link font-size-5 text-white">Giveback</a></li>
                    <li><a href="#" className="nav-link font-size-5 text-white">Policy 2.0</a></li>
                </ul>
                </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-xs-12">
                <div className="f_links w-100 float-left mb-lg-0 mb-10">
                <h4 className="text-white-50 font-weight-bold text-uppercase font-size-3 mb-6">resources</h4>
                <ul className="list-unstyled">
                    <li><a href="#" className="nav-link font-size-5 text-white">FAQ</a></li>
                    <li><a href="#" className="nav-link font-size-5 text-white">Where We're Live</a></li>
                </ul>
                </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-xs-12">
                <div className="f_links w-100 float-left mb-lg-0 mb-10">
                <h4 className="text-white-50 font-weight-bold text-uppercase font-size-3 mb-6">company</h4>
                <ul className="list-unstyled">
                    <li><a href="#" className="nav-link font-size-5 text-white">Legal Stuff</a></li>
                    <li><a href="#" className="nav-link font-size-5 text-white">Privacy Policy</a></li>
                    <li><a href="#" className="nav-link font-size-5 text-white">Terms of Service</a></li>
                </ul>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
                <div className="region w-100 float-left mb-10">
                <h4 className="text-white-50 font-weight-bold text-uppercase font-size-3 mb-7">region</h4>
                <div className="nice-select language font-size-2 text-uppercase font-weight-bold bg-dark p-3 pr-4 text-white" tabindex="0"> <span className="current">France (English)</span>
                    {/* <ul className="list">
                    <li data-value="france" className="option selected focus">France (English)</li>
                    <li data-value="saab" className="option">France (Français)</li>
                    <li data-value="opel" className="option">United States</li>
                    <li data-value="audi" className="option">Germany (Deutsch)</li>
                    </ul> */}
                </div>
                </div>
                <div className="app_store w-100 float-left mb-6">
                    <h4 className="text-white-50 font-weight-bold text-uppercase font-size-3 mb-8">Get Our App</h4>
                    <div className="w-100 float-left d-flex justify-content-start">
                        <div className="play-store float-left mr-6">
                            <GatsbyImage
                                alt="App Store"
                                image={getImage(appstoreImg)} 
                            />
                        </div>
                        <div className="play-store">
                            <GatsbyImage
                                alt="Play Store"
                                image={getImage(playstoreImg)} 
                            />
                        </div>
                    </div>                    
                </div>
                <div className="s_links w-100 float-left mb-lg-0 mb-5">
                <h4 className="text-white-50 font-weight-bold text-uppercase font-size-3  mb-8">Follow us</h4>
                <div className="footer-social">
                    {socialIcons.map((item, index) => (
                        <a href={item.url} key={index} target="_blank" rel="noopener noreferrer" className="text-white-50 font-size-8 pr-10">
                                {item.name==='instagram' && <svg viewBox="0 0 512 512"><g><path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"/><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"/><circle cx="351.5" cy="160.5" r="21.5"/></g></svg> }
                                {item.name==='facebook' && <svg viewBox="0 0 512 512"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/></svg> }
                                {item.name==='twitter' && <svg viewBox="0 0 512 512"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"/></svg> }
                                {item.name==='youtube' && <svg viewBox="0 0 512 512"><path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z"/></svg> }
                                {item.name==='dribbble' && <svg viewBox="0 0 512 512"><path d="M256 68.4C152.4 68.4 68.4 152.4 68.4 256c0 103.6 84 187.6 187.6 187.6S443.6 359.6 443.6 256C443.6 152.4 359.6 68.4 256 68.4zM410.6 247.3c-40.3-6.6-77.3-7-111-1.1 -3.8-8.8-7.8-17.6-12-26.3 36.1-15.6 65.1-36.9 86.7-63.8C395.4 181 408.6 212.6 410.6 247.3zM350.5 133.4c-18.8 24.3-44.8 43.5-78 57.5 -15.9-29.1-34-57.5-54.5-85 12.2-3.1 24.9-4.9 38-4.9C291.6 101 324.3 113.2 350.5 133.4zM186.1 117.9c20.8 27.2 39.3 55.3 55.3 84.1 -38 11.2-83.4 16.9-135.8 17.3C116.4 175 146.3 138.1 186.1 117.9zM101 256c0-1.3 0.2-2.7 0.2-4 60.2-0.1 112.1-7 155.6-20.7 3.6 7.4 7.1 14.9 10.5 22.4 -52.8 16.5-96.4 50.4-130.3 101.3C114.5 328.2 101 293.6 101 256zM160.9 378.1c30.8-48.3 70.1-79.7 118.8-94.2 14.5 37.8 25.2 76.8 31.9 116.6 -17.3 6.7-36 10.5-55.6 10.5C220.1 411 187.2 398.6 160.9 378.1zM342 384.8c-6.9-36.8-16.9-72.8-30-107.8 29.3-4.1 61.6-3.1 96.9 3.1C402.1 323.6 377.2 361.3 342 384.8z"/></svg> }
                        </a>
                    ))}
                </div>                    
                </div>
            </div>
            </div>
        </div>
        </footer>

)
}


export default Footer

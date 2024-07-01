import React from 'react'
import "./Web.css"
import header from "./Images/header.png"
import content from "./Images/content.png"
import service1 from "./Images/service1.png"
import service2 from "./Images/service2.png"
import service3 from "./Images/service3.png"
import content2 from "./Images/content2.png"
import check from "./Images/check.png"
import videobg from "./Images/bg2.png"
import play from "./Images/ButtonPlay.png"
import first from "./Images/first.png"
import second from "./Images/second.png"
import third from "./Images/third.png"
import twiter from "./Images/twiter.png"
import instagram from "./Images/insta.png"
import fb from "./Images/fb.png"
import linkedIn from "./Images/linkedIn.png"
import smallPlay from "./Images/smallPlay.png"
import Oval from "./Images/Oval.png"
import rectangle from "./Images/Rectangle.png"
import dots from "./Images/dots.png"
import oval2 from "./Images/Oval2.png"

export const Web = () => {
    return (
        <>
            {/* Navbar start */}
            <div className="navbar flex justify-between ml-6 mt-3">
                <div className="navbarLeft">
                    <h1 className=' text-xl  font-medium '><a href="#">Nehra</a></h1>
                </div>
                <div className="navbarRight">
                    <ul className=' flex space-x-6 mr-6 items-center'>
                        <li><a href="#">Demos</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Contact</a></li>
                        <li className=' bg-blue-700 text-white py-1 px-2 rounded-md'><a href="#">Get a Free Quate</a></li>
                    </ul>
                </div>
            </div>
            {/* Navbar end */}

            {/* Header start */}
            <div className="header flex justify-evenly mt-9">

                <div className=' w-[480px] relative top-24 '>
                    <h1 className=' text-[46px] font-bold'>
                        Make your business powerful with Shade.
                    </h1>
                    <p className=' my-3 text-gray-500'>
                        With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.
                    </p>
                    <button className='bg-blue-700 text-white py-1 px-2 rounded-md my-3'>
                        Get a Free Quates
                    </button>
                    <h4 className='text-xs font-semibold uppercase pl-5'>
                        Watch how we can help
                    </h4>
                </div>

                <div className='relative'>
                <img src={header} alt="Image" className=' max-w-80 z-1' />
                <img src={rectangle} alt="Image" className=' max-w-40 absolute left-0 top-28 z-[-1]' />
                <img src={dots} alt="Image" className=' max-w-20 absolute right-4 top-5 z-[-1]' />
                <img src={Oval} alt="Image" className=' max-w-28 absolute bottom-0 right-0' />
                </div>
                
            </div>
            {/* header ends */}

            {/* alert start */}
            <div className="alert bg-[#161C2D] flex items-center justify-center py-2">
                {/* music player bootstrap symbol */}
                <img src={smallPlay} alt="" />
                <p className='pl-3 py-3 text-xs text-gray-200'>Interested how our software works for you? <span className=' underline'>Watch our 1 minute video</span></p>
            </div>
            {/* alert ends */}

            {/* Content start */}
            <div className="content flex mx-36 my-20 space-x-11 justify-center">
                <div className="content1 max-w-72">
                    <h1 className='font-bold text-3xl'>
                        Experienced experts are giving advices.
                    </h1>
                    <p className='text-sm my-5 text-gray-500'>
                        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                    </p>
                    <button className='bg-blue-700 text-white py-1 px-2 rounded-md my-3'>Learn how we work</button>
                </div>

                <img src={content} alt="Content Image" className='w-60 rounded-md ' />

                <div className="content3 max-w-72">
                    <h1 className=' font-bold text-3xl' >1M+</h1>
                    <p className='text-sm text-gray-500'>
                        Customers visit Albino every month to get their service done.
                    </p>
                    <h1 className=' font-bold text-3xl mt-5'>92%</h1>
                    <p className='text-sm text-gray-500'>
                        Satisfaction rate comes from our awesome customers.
                    </p>
                    <h1 className=' font-bold text-3xl mt-5'>4.9/5.0</h1>
                    <p className='text-sm text-gray-500'>
                        Average customer ratings we have got all over internet.
                    </p>
                </div>
            </div>
            {/* content ends */}

            {/* Services */}
            <div className="services bg-slate-100 py-11">
                <div className="serviceTop text-center px-80">
                    <h1 className='font-semibold text-3xl'>Services we offer for you</h1>
                    <p className=' text-gray-600'>
                        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                    </p>
                </div>

                <div className="serviceBottom flex justify-around mt-7 mx-32">
                    <div className="ser1 max-w-52">
                        <h1 className='font-bold '>Digital Marketing</h1>
                        <img src={service1} alt="Picture" className='w-40 m-auto rounded my-4' />
                        <p className='py-3 text-xs text-gray-600'>
                            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                        </p>
                        <button className='font-semibold text-blue-700'>Learn More &rarr;</button>
                    </div>
                    <div className="ser1 max-w-52">
                        <h1 className='font-bold '>Business Growth</h1>
                        <img src={service2} alt="Picture" className='w-40 m-auto rounded my-4' />
                        <p className='py-3 text-xs text-gray-600'>
                            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                        </p>
                        <button className='font-semibold text-blue-700'>Learn More &rarr;</button>
                    </div>
                    <div className="ser1 max-w-52">
                        <h1 className='font-bold '>Content Marketing</h1>
                        <img src={service3} alt="Picture" className='w-40 m-auto rounded my-4' />
                        <p className='py-3 text-xs text-gray-600'>
                            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                        </p>
                        <button className='font-semibold text-blue-700'>Learn More &rarr;</button>
                    </div>
                </div>
            </div>
            {/* service end */}

            {/* content seocnd  */}
            <div className="component flex justify-center space-x-32 items-center mt-14">
                <div className="componentLeft relative">
                    <img src={content2} alt="" className='w-64 z-[1]' />
                    <img src={oval2} alt="" className='w-52 absolute right-[-80px] top-16 z-[-1] mr-40' />
                </div>
                <div className="componentRight w-96">
                    <h1 className='font-bold text-3xl'>Reasons you should choose us to grow today.</h1>
                    <p className='py-3 text-gray-600'>
                        We share common trends and strategies for improving your rental income and making sure you stay in high demand.
                    </p>

                    <div className='flex justify-between flex-wrap my-3'>
                        <div className='flex '>
                            <img src={check} alt="" className='w-4 mr-3' />
                            <h1 className='font-semibold '>Fully Responsive</h1>
                        </div>
                        <div className='flex mr-8'>
                            <img src={check} alt="" className='w-4 mr-3' />
                            <h1 className='font-semibold '>Beautiful Layouts</h1>
                        </div>
                        <div className='flex my-3'>
                            <img src={check} alt="" className='w-4 mr-3' />
                            <h1 className='font-semibold '>Easy to Edit</h1>
                        </div>
                        <div className='flex my-3'>
                            <img src={check} alt="" className='w-4 mr-3' />
                            <h1 className='font-semibold '>Google Font Included</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* content second ends */}

            {/* video bg */}
            <div className="videobg relative brightness-50" style={{ backgroundImage: `url(${videobg})`, height: '400px', backgroundSize: 'cover' }}>
                {/* <img src={videobg} alt="" className='brightness-75' /> */}
                <div className='px-72 text-center relative top-32'>
                    <center>
                        <img src={play} alt="" />
                    </center>
                    <h1 className='text-white font-bold text-3xl pt-3'>How do we help you to grow?</h1>
                    <p className='text-gray-300 pt-5'>
                        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                    </p>
                </div>
            </div>
            {/* video bg end */}

            {/* testimonal start */}
            <div className="topDiv text-center my-11 mx-72">
                <h1 className='font-bold text-4xl'>What people say about us</h1>
                <p className='text-gray-500 pt-5'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            </div>
            <div className="bottomDiv flex justify-center space-x-8 mb-16 ">
                <div className="first w-56 border rounded-lg p-5 shadow-lg">
                    <img src={first} alt="" className='rounded-full w-10' />
                    <p className='py-4'>
                        “You made it so simple. My new site is so much faster and easier to work with than my old site.”
                    </p>
                    <h1 className='font-bold pt-5'>Isabella Chavez</h1>
                    <h2 className='text-gray-500 pl-6'>Graphic Designer</h2>
                </div>
                <div className="second w-56 border rounded-lg p-5 shadow-lg">
                    <img src={second} alt="" className='rounded-full w-10 ' />
                    <p className='py-4 text-base'>
                        “Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”
                    </p>
                    <h1 className='font-bold'>Curtis Rhodes</h1>
                    <h2 className='text-gray-500 pl-6'>Digital Marketer</h2>
                </div>
                <div className="third w-56 border rounded-lg p-5 shadow-lg">
                    <img src={third} alt="" className='rounded-full w-10' />
                    <p className='py-4'>
                        “Must have book for all, who want to be Product Designer or Interaction Designer.”
                    </p>
                    <h1 className='font-bold pt-5'>Lucas Mann</h1>
                    <h2 className='text-gray-500 pl-6'>Co Founder</h2>
                </div>
            </div>
            {/* Testimonal ends */}

            {/* CTA start */}
            <div className="cta bg-[#68D585] text-white py-6 text-center">
                <span className='font-semibold text-2xl'>Ready to get started?</span>
                <button className='bg-white text-black font-semibold text-sm py-1 px-3 rounded-md ml-4'>Get A Free Quate</button>
            </div>
            {/* CTA ends */}

            {/* Footer */}
            <div className="footer flex justify-evenly py-20 px-20 bg-[#161C2D] text-white">
                <div className="f1 w-52">
                    <h1 className='font-bold text-2xl'>Nehra</h1>
                    <p className='py-3 text-gray-500'>
                        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                    </p>
                    <div className='flex space-x-4'>
                        <img src={twiter} alt="" />
                        <img src={fb} alt="" className='rounded' />
                        <img src={instagram} alt="" />
                        <img src={linkedIn} alt="" className='rounded' />
                    </div>
                </div>
                <div className="f2">
                    <ul className=''>
                        <li className='text-gray-500 pb-5'>Company</li>
                        <li className='leading-loose'>About us</li>
                        <li className='leading-loose'>Careers</li>
                        <li className='leading-loose'>Press</li>
                    </ul>
                </div>
                <div className="f3">
                    <ul>
                        <li className='text-gray-500 pb-5'>Product</li>
                        <li className='leading-loose'>Features</li>
                        <li className='leading-loose'>Pricing</li>
                        <li className='leading-loose'>News</li>
                        <li className='leading-loose'>Help Desk</li>
                        <li className='leading-loose'>Support</li>
                    </ul>
                </div>
                <div className="f4">
                    <ul>
                        <li className='text-gray-500 pb-5'>Services</li>
                        <li className='leading-loose'>Digital MArketing</li>
                        <li className='leading-loose'>Content Writing</li>
                        <li className='leading-loose'>SEO for Business</li>
                        <li className='leading-loose'>UI Design</li>
                    </ul>
                </div>
                <div className="f5">
                    <ul>
                        <li className='text-gray-500 pb-5'>Legal</li>
                        <li className='leading-loose'>Privacy Policy</li>
                        <li className='leading-loose'>Terms & Conditions</li>
                        <li className='leading-loose'>Return Policy</li>
                    </ul>
                </div>
            </div>
            {/* Footer ends */}
        </>
    )
}

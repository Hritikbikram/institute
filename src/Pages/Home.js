import React from 'react'
// import pic from '../Images/pic.jpg';
import Banner from './Banner';
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




export const Home = () => {
  return (
    <div>
      <Banner />
      <div className='bg-teal-50 ml-[11%] mr-[9%] '>

        <div className='grid grid-cols-4'>

          <div className='p-4 col-span-2'>
            <h1 className='text-4xl font-extrabold'>About Us</h1>
            <h1 className='p-4 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quod sint, soluta incidunt est iusto alias saepe porro dolor aperiam perferendis ducimus veniam optio quisquam delectus sapiente recusandae nulla sit!Praesentium quod sint, soluta incidunt est iusto alias saepe porro dolor aperiam perferendis ducimus veniam optio quisquam delectus sapiente recusandae nulla sit!</h1>

          </div>

          <div className='bg-blue-500 text-white'>
            <div className='p-4'>
              <i className="fa-solid fa-graduation-cap text-4xl p-2"></i>
              <p className='text-3xl font-extrabold p-2'>15</p>
              <h1 className='text-xl '>Professional & Qualified Teachers</h1>
            </div>
          </div>

          <div className='bg-blue-400 text-white'>
            <div className='p-4'> 
              <i className="fa-solid fa-desktop text-4xl p-2"></i>
              <p className='text-3xl font-extrabold p-2'>10</p>
              <h1 className='text-xl'>Total Courses</h1>
            </div>
          </div>

        </div>

      </div>

        {/* <div className='grid grid-cols-5 '>



          <div className='col-span-2'>
            <div className='px-6 py-[15%] bg-light-blue-800 text-white'>
            <h1 className='font-extrabold text-3xl pb-7'> Building Global IT professional since 2013</h1>

            <p className='font-bold text-md pb-7'>Certified IT Learning Center</p>

            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt in numquam, voluptates quos voluptate atque! Iusto accusantium libero optio quasi aspernatur sint. Aliquid voluptates voluptas dolorum accusantium tempore distinctio aut?</p>


            <h1 className='py-5'> <Link className='bg-blue-800 hover:bg-blue-400 p-3 rounded-lg' to="/">Get Admission Now</Link> </h1>
            </div>
          </div>



          <div>
          <img src={pic} alt="" height='100%' />
            
          </div>




          

        </div> */}


        {/* Courses List */}


        <div className='mt-6 mx-[11%] pb-10'>

          <h1 className='text-4xl py-7 font-semibold'>Our Courses</h1>

          <div className='grid grid-cols-4 md:grid-cols-2 gap-5'>


            <div>
                <Card className="w-full max-w-[26rem] shadow-lg">
                    <CardHeader floated={false} color="blue-gray">
                      <img
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="ui/ux review check"
                      />
                      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                      
                    </CardHeader>
                    <CardBody>
                      <div className="mb-3 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="font-extrabold">
                          Web Design Training
                        </Typography>
                      </div>
                      <Typography color="gray">
                          <i className="fa-solid fa-clock "></i> Duration: <span className='pl-1 text-sm font-medium'>2 months</span>


                      </Typography>

                      
                      
                    </CardBody>
                    <CardFooter className="pt-1">
                      <Button size="lg" fullWidth={true}>
                      Learn More
                      </Button>
                    </CardFooter>
                </Card>          
            </div>

              <div>
                <Card className="w-full max-w-[26rem] shadow-lg">
                    <CardHeader floated={false} color="blue-gray">
                      <img
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="ui/ux review check"
                      />
                      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                      
                    </CardHeader>
                    <CardBody>
                      <div className="mb-3 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="font-extrabold">
                          Web Design Training
                        </Typography>
                      </div>
                      <Typography color="gray">
                          <i className="fa-solid fa-clock "></i> Duration: <span className='pl-1 text-sm font-medium'>2 months</span>


                      </Typography>

                      
                      
                    </CardBody>
                    <CardFooter className="pt-1">
                      <Button size="lg" fullWidth={true}>
                      Learn More
                      </Button>
                    </CardFooter>
                </Card>
              </div>

              


              <div>
                <Card className="w-full max-w-[26rem] shadow-lg">
                    <CardHeader floated={false} color="blue-gray">
                      <img
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="ui/ux review check"
                      />
                      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                      
                    </CardHeader>
                    <CardBody>
                      <div className="mb-3 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="font-extrabold">
                          Web Design Training
                        </Typography>
                      </div>
                      <Typography color="gray">
                          <i className="fa-solid fa-clock "></i> Duration: <span className='pl-1 text-sm font-medium'>2 months</span>


                      </Typography>

                      
                      
                    </CardBody>
                    <CardFooter className="pt-1">
                      <Button size="lg" fullWidth={true}>
                      Learn More
                      </Button>
                    </CardFooter>
                </Card>
              </div>

              

              <div>
                <Card className="w-full max-w-[26rem] shadow-lg">
                    <CardHeader floated={false} color="blue-gray">
                      <img
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="ui/ux review check"
                      />
                      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                      
                    </CardHeader>
                    <CardBody>
                      <div className="mb-3 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="font-extrabold">
                          Web Design Training
                        </Typography>
                      </div>
                      <Typography color="gray">
                          <i className="fa-solid fa-clock "></i> Duration: <span className='pl-1 text-sm font-medium'>2 months</span>


                      </Typography>

                      
                      
                    </CardBody>
                    <CardFooter className="pt-1">
                      <Button size="lg" fullWidth={true}>
                      Learn More
                      </Button>
                    </CardFooter>
                </Card>
              </div>

              

              <div>
                <Card className="w-full max-w-[26rem] shadow-lg">
                    <CardHeader floated={false} color="blue-gray">
                      <img
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="ui/ux review check"
                      />
                      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                      
                    </CardHeader>
                    <CardBody>
                      <div className="mb-3 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="font-extrabold">
                          Web Design Training
                        </Typography>
                      </div>
                      <Typography color="gray">
                          <i className="fa-solid fa-clock "></i> Duration: <span className='pl-1 text-sm font-medium'>2 months</span>


                      </Typography>

                      
                      
                    </CardBody>
                    <CardFooter className="pt-1">
                      <Button size="lg" fullWidth={true}>
                      Learn More
                      </Button>
                    </CardFooter>
                </Card>

              </div>








          </div>


          <div className='mt-[8%] mb-12 text-center'>
           <NavLink className='border-2 border-blue-800 text-blue-800 font-semibold text-3xl p-5 rounded-lg' to="/course">All Courses <i className="pl-2 fa-solid fa-arrow-right"></i></NavLink>        
         </div>


        </div>


        {/* Testimonials */}




        

        {/* Course State */}


        <div className='bg-blue-50 py-11'>

            <div className='mt-6 mx-[11%] pb-10'>
              <div className='text-center'>

                  <h1 className='text-5xl py-2'><i className="fa-solid fa-laptop-file"></i></h1>
                  <h1 className='text-2xl py-7 font-normal'>Our Course State</h1>

              </div>

            <div className='grid grid-cols-3 md:grid-cols-1 gap-5 py-10'>

              <div className='rounded-3xl bg-blue-500 text-white'>

                <h1 className='text-6xl text-center pt-10 '><i className="fa-solid fa-person-chalkboard hover:text-7xl duration-300"></i></h1>

                <div className=''>
                  <h1 className='text-4xl px-[42%] font-bold pt-10 '>15</h1>
                  <h1 className='px-[20%] text-center text-xl py-5'>Running Class</h1>
                </div>

              </div>

              <div className='rounded-3xl bg-red-300 text-white'>

                <h1 className='text-6xl text-center pt-10'><i class="fa-solid fa-school hover:text-7xl duration-300"></i></h1>

                <div className=''>
                  <h1 className='text-4xl px-[42%] font-bold pt-10 '>25</h1>
                  <h1 className='px-[20%] text-center text-xl py-5'>Total Classes</h1>
                </div>

              </div>

              <div className='rounded-3xl bg-green-500 text-white'>

                <h1 className='text-6xl text-center pt-10'><i class="fa-solid fa-graduation-cap hover:text-7xl duration-300"></i></h1>

                <div className=''>
                  <h1 className='text-4xl px-[42%] font-bold pt-10 '>500</h1>
                  <h1 className='px-[20%] text-center text-xl py-5'>Students</h1>
                </div>

              </div>

            </div>
              
            </div>

        </div>






        {/* Course State End */}



        {/* Success Stories */}


        <div className='mt-6 mx-[11%] pb-10  shadow-lg border-2 rounded-3xl'>

            <div className='text-center'>
            <i class="fa-solid fa-crosshairs text-5xl pt-4 pb-10"></i>
              <h1 className='text-3xl py-2 font-semibold'>Success Stories</h1>
              <p className='text-xl pt-4 pb-10'>By providing valuable guidance and knowledge we inspire you to achieve professional as well as personal growth</p>
            </div>

            <div className='grid grid-cols-3 gap-2 px-10'>


              

            <div>
                <Card className="w-full max-w-[26rem] shadow-lg border-2">
                

                    <div className='p-3'>  
                      
                      <img
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="ui/ux review check" className='rounded-[100%] w-[50%]'
                      />

                    </div>
                      
                    <CardBody>

                      <Typography color="gray">
                          Working on:
                      </Typography>

                      <Typography className="font-semibold">
                          Workplace
                      </Typography>


                    <div className='py-3'>

                      <Typography>
                        Person Name
                      </Typography>


                      <Typography>
                        Job Role
                      </Typography>

                    </div>

                    <div>
                      <Typography>

                        11/23/2023

                      </Typography>
                    </div>


                      
                      
                      
                      
                    </CardBody>

                    
                    
                </Card>          
              </div>




              <div>
                <Card className="w-full max-w-[26rem] shadow-lg border-2">
                

                    <div className='p-3'>  
                      
                      <img
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="ui/ux review check" className='rounded-[100%] w-[50%]'
                      />

                    </div>
                      
                    <CardBody>

                      <Typography color="gray">
                          Working on:
                      </Typography>

                      <Typography className="font-semibold">
                          Workplace
                      </Typography>


                    <div className='py-3'>

                      <Typography>
                        Person Name
                      </Typography>


                      <Typography>
                        Job Role
                      </Typography>

                    </div>

                    <div>
                      <Typography>

                        11/23/2023

                      </Typography>
                    </div>


                      
                      
                      
                      
                    </CardBody>

                    
                    
                </Card>          
              </div>



              

              <div>
                <Card className="w-full max-w-[26rem] shadow-lg border-2">
                

                    <div className='p-3'>  
                      
                      <img
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="ui/ux review check" className='rounded-[100%] w-[50%]'
                      />

                    </div>
                      
                    <CardBody>

                      <Typography color="gray">
                          Working on:
                      </Typography>

                      <Typography className="font-semibold">
                          Workplace
                      </Typography>


                    <div className='py-3'>

                      <Typography>
                        Person Name
                      </Typography>


                      <Typography>
                        Job Role
                      </Typography>

                    </div>

                    <div>
                      <Typography>

                        11/23/2023

                      </Typography>
                    </div>


                      
                      
                      
                      
                    </CardBody>

                    
                    
                </Card>          
              </div>





            </div>




            
          
            <div className='mt-[8%] mb-12 text-center'>
              <NavLink className='border-2 border-black text-black font-semibold text-3xl p-5 rounded-lg hover:border-black hover:text-white hover:bg-blue-gray-400' to="/gallery">Our Success Stories <i className="pl-2 fa-solid fa-arrow-right"></i></NavLink>        
            </div>

        </div>


        
        {/* Success Stories End */}


        {/* Testimonials  */}
        <div className='mt-[5%]'>

            <div className='pt-10 bg-gray-50'>

                <div className='mt-6 mx-[11%] pb-10'>

                  
                    <div className='text-center'>
                        <i class="fa-solid fa-crosshairs text-5xl pt-4 pb-10"></i>
                        <h1 className='text-3xl py-2 font-semibold'>What Our Students Say? ? ?</h1>
                        <p className='text-xl pt-4 pb-10'>Our students are our pride who keep motivating every professionals to be a part of us in their professional journey to achieve their goals</p>
                    </div>




                    {/* carousel */}

                    <OwlCarousel className='owl-theme ' loop margin={10} nav>
                        
                        
                        
                        
                        <div className='item py-10'>

                            <Card className="w-full max-w-[26rem] shadow-lg bg-gray-50 border-2">
                                
                                <CardBody>

                                  <div className='py-4'>

                                    <Typography color="blue-gray" className="font-normal text-justify">
                                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas optio exercitationem et aliquam dicta dolorum unde voluptates deleniti ipsam. Voluptatibus reiciendis est blanditiis doloremque dolorum nam, at excepturi ipsam harum! "
                                    </Typography>

                                  </div>

                                  <div className="mb-3 flex items-center justify-around">
                                    
                                  <div>
                                    <Typography variant="h5" color="blue-gray" className="font-semibold">
                                      Web Design Training
                                    </Typography>
                                  
                                    <Typography color="blue-gray" className="font-normal">
                                      @user-1
                                    </Typography>
                                  
                                    <Typography color="blue-gray" className="font-normal">
                                      Training Name
                                    </Typography>
                                  </div>
                                  
                                  </div>

                                  
                                  
                                </CardBody>
                            </Card>
                            
                        </div>
                        
                        
                                      
                        <div className='item py-10'>

                            <Card className="w-full max-w-[26rem] shadow-lg bg-gray-50 border-2">
                                
                                <CardBody>

                                  <div className='py-4'>

                                    <Typography color="blue-gray" className="font-normal text-justify">
                                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas optio exercitationem et aliquam dicta dolorum unde voluptates deleniti ipsam. Voluptatibus reiciendis est blanditiis doloremque dolorum nam, at excepturi ipsam harum! "
                                    </Typography>

                                  </div>

                                  <div className="mb-3 flex items-center justify-around">
                                    
                                  <div>
                                    <Typography variant="h5" color="blue-gray" className="font-semibold">
                                      Web Design Training
                                    </Typography>
                                  
                                    <Typography color="blue-gray" className="font-normal">
                                      @user-2
                                    </Typography>
                                  
                                    <Typography color="blue-gray" className="font-normal">
                                      Training Name
                                    </Typography>
                                  </div>
                                  
                                  </div>

                                  
                                  
                                </CardBody>
                            </Card>
                            
                        </div>
                        
                                                      
                        <div className='item py-10'>

                            <Card className="w-full max-w-[26rem] shadow-lg bg-gray-50 border-2">
                                
                                <CardBody>

                                  <div className='py-4'>

                                    <Typography color="blue-gray" className="font-normal text-justify">
                                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas optio exercitationem et aliquam dicta dolorum unde voluptates deleniti ipsam. Voluptatibus reiciendis est blanditiis doloremque dolorum nam, at excepturi ipsam harum! "
                                    </Typography>

                                  </div>

                                  <div className="mb-3 flex items-center justify-around">
                                    
                                  <div>
                                    <Typography variant="h5" color="blue-gray" className="font-semibold">
                                      Web Design Training
                                    </Typography>
                                  
                                    <Typography color="blue-gray" className="font-normal">
                                      @user-3
                                    </Typography>
                                  
                                    <Typography color="blue-gray" className="font-normal">
                                      Training Name
                                    </Typography>
                                  </div>
                                  
                                  </div>

                                  
                                  
                                </CardBody>
                            </Card>
                            
                        </div>
                        
                                      
                        <div className='item py-10'>

                            <Card className="w-full max-w-[26rem] shadow-lg bg-gray-50 border-2">
                                
                                <CardBody>

                                  <div className='py-4'>

                                    <Typography color="blue-gray" className="font-normal text-justify">
                                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas optio exercitationem et aliquam dicta dolorum unde voluptates deleniti ipsam. Voluptatibus reiciendis est blanditiis doloremque dolorum nam, at excepturi ipsam harum! "
                                    </Typography>

                                  </div>

                                  <div className="mb-3 flex items-center justify-around">
                                    
                                  <div>
                                    <Typography variant="h5" color="blue-gray" className="font-semibold">
                                      Web Design Training
                                    </Typography>
                                  
                                    <Typography color="blue-gray" className="font-normal">
                                      @user-4
                                    </Typography>
                                  
                                    <Typography color="blue-gray" className="font-normal">
                                      Training Name
                                    </Typography>
                                  </div>
                                  
                                  </div>

                                  
                                  
                                </CardBody>
                            </Card>
                            
                        </div>
                              
                                        
                        <div className='item py-10'>

                            <Card className="w-full max-w-[26rem] shadow-lg bg-gray-50 border-2">
                                
                                <CardBody>

                                  <div className='py-4'>

                                    <Typography color="blue-gray" className="font-normal text-justify">
                                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas optio exercitationem et aliquam dicta dolorum unde voluptates deleniti ipsam. Voluptatibus reiciendis est blanditiis doloremque dolorum nam, at excepturi ipsam harum! "
                                    </Typography>

                                  </div>

                                  <div className="mb-3 flex items-center justify-around">
                                    
                                  <div>
                                    <Typography variant="h5" color="blue-gray" className="font-semibold">
                                      Web Design Training
                                    </Typography>
                                  
                                    <Typography color="blue-gray" className="font-normal">
                                      @user-5
                                    </Typography>
                                  
                                    <Typography color="blue-gray" className="font-normal">
                                      Training Name
                                    </Typography>
                                  </div>
                                  
                                  </div>

                                  
                                  
                                </CardBody>
                            </Card>
                            
                        </div>
                        
                        
                        
                        


                    </OwlCarousel>


                  
                    <div className='mt-[8%] mb-12 text-center'>
                      <NavLink className='border-2 border-black text-black font-semibold text-3xl p-5 rounded-lg hover:border-black hover:text-white hover:bg-blue-gray-400' to="/testimonial">All Testimonials <i className="pl-2 fa-solid fa-arrow-right"></i></NavLink>        
                    </div>

                </div>

            </div>
        </div>
        {/* Testimonials End */}



        {/* Subscribe */}


        <div className='bg-red-100'>

                <div className='text-center p-[6%]'>
                  <h1 className='text-6xl md:text-3xl font-semibold'>Our Updates</h1>
                  <h1 className='text-6xl md:text-3xl font-semibold pt-3'>to your inbox</h1>

                  <div className=''>

                  <p className='text-3xl md:text-2xl py-8 '>Be the first one to get every updates from us</p>

                  <div className='flex justify-center mt-5'>
                  <div className='w-[30%]' >
                      <form action="#" className='bg-white rounded-l-sm'>
                        <Input className='border-none rounded-l-5xl' type='email' label="Email Address"/>
                        
                      </form>
                      
                    </div>
                    <Button className=''>Subscribe</Button>
                    </div>


                </div>




                      
                </div>

        </div>




    </div>
  )
}

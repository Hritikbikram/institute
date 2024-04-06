import React from 'react';
import { Breadcrumbs, Typography,Button, Input, Checkbox, Textarea} from '@material-tailwind/react';

import { NavLink, useParams } from 'react-router-dom';
import { useGetClassQuery, useGetClsssbyIdQuery, useGetCourseByNameQuery, useGetCourseDetailQuery, useGetCourseDetailsbyIdQuery } from '../Admin-Pages/AdminApi/CourseNameApi';

const CourseDetail = () => {

const {id}=useParams();
// const {data}=useGetClsssbyIdQuery(id);
const {data:corsnamess}=useGetClsssbyIdQuery(id);
console.log(corsnamess);


// console.log(data);
const {data}=useGetCourseDetailQuery();
console.log(data);



// if(data.CourseName===id)
// {
//   const {isdatas:data}=useGetCourseDetailsbyIdQuery(data.CourseName);
//   console.log(isdatas);
// }

  return (
    <>


                    
        <div className='subdetails'>


            <div className=' py-[6%] pl-[12%]'>

              <div className='pt-[1%]'>  
              
                  <Breadcrumbs>
                    <NavLink href="#" className="opacity-60 font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </NavLink>
                    <NavLink href="#" className="opacity-60 font-bold">
                      <span>Pages</span>
                    </NavLink>
                    <NavLink href="#" className="font-bold">Courses</NavLink>
                  </Breadcrumbs>

              </div>


              
              <h1 className='text-5xl  font-extrabold  py-5'>Name of Course</h1>

              <p className='text-xl  font-extrabold  py-5'>Course name in Surkhet</p>

              <div className='flex gap-10'>

                  <Typography  className="text-lg">
                    <i className="fa-solid fa-clock "></i> Duration: <span className='pl-1 font-medium'>2 months</span>
                  </Typography>


                  <Typography  className="text-lg">
                    <i className="fa-solid  fa-medal "></i> Career: <span className='pl-1  font-medium'>Career Name</span>
                  </Typography>

              </div>


              <div className='flex gap-10 pt-8'>

              <NavLink className='border-2 bg-yellow-400 border-black text-black font-semibold text-xl p-5 rounded-lg hover:border-black hover:text-white hover:bg-blue-gray-400' to="/enquiry">Send Enquiry <i className="pl-2 fa-solid fa-arrow-right"></i></NavLink> 



              <NavLink className='border-2 bg-blue-400 border-black text-black font-semibold text-xl p-5 rounded-lg hover:border-black hover:text-white hover:bg-blue-gray-400' to="/admission">Get Admission <i className="pl-2 fa-solid fa-arrow-right"></i></NavLink> 

              </div>
              

            </div>


        </div>



        {/* Details Page */}

        <div className='mt-6 mx-[11%] pb-10'>

          <div className='flex gap-5 justify-evenly'>

            
                  <Typography color="blue" className="text-lg">
                    <i className="fa-solid fa-clock "></i>  <span className='pl-1  text-black font-medium'>Master Your Skills</span>
                  </Typography>


                  <Typography color="blue" className="text-lg">
                    <i className="fa-solid fa-clock "></i>  <span className='pl-1 text-black font-medium'>Become a Professional</span>
                  </Typography>

                  <Typography color="blue" className="text-lg">
                    <i className="fa-solid fa-medal "></i>  <span className='pl-1  text-black font-medium'>Build a Career!</span>
                  </Typography>



          </div>



        </div>


        <hr />

            <div className='mt-6 mx-[11%] pb-10'>

              <div className='flex gap-10 font-bold text-xl justify-start'>

                <NavLink>Course Overview</NavLink>
                <NavLink>Course Syllabus</NavLink>
                <NavLink>Course Benefits</NavLink>

              </div>

            </div>

        <hr />


        <div className='mt-6 mx-[11%] pb-10'>


            {/* Course Description */}
            
{/*             
      {data && data.CourseInfo.map((allcor)=>{

if(allcor.CourseName===id)
{
  return(
    
    <div>
    <h1>{allcor?.CourseName}</h1>
    </div>
    
  )
}
else
{
  return( <h1>Not Found</h1> )
}

})} */}

 {/* {data.CourseName === corsnamess.ClassName && data.CourseInfo.map((allcoreon)=>{
  return(
    <h1>{allcoreon?.CourseName}</h1>
  )
 })}            */}
              
              <div className='grid grid-cols-3 md:grid md:grid-cols-1 gap-5'>

                  <div className='py-5 px-10 col-span-2'>

                    <div>
                        <h1 className='text-2xl font-bold py-5'>Course Information</h1>
                        <p className='text-lg text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem voluptas sequi in, minus, recusandae laboriosam mollitia blanditiis ex amet ullam maxime porro nobis labore sint. Totam voluptatum est libero numquam?
                        
                        
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem voluptas sequi in, minus, recusandae laboriosam mollitia blanditiis ex amet ullam maxime porro nobis labore sint. Totam voluptatum est libero numquam?
                        
                        
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem voluptas sequi in, minus, recusandae laboriosam mollitia blanditiis ex amet ullam maxime porro nobis labore sint. Totam voluptatum est libero numquam?
                        
                        
                        
                        </p>

                    </div>


                    <div>
                        <h1 className='text-2xl font-bold py-5'>Course Benefits</h1>
                        <p className='text-lg text-justify pb-5'>
                          Benefits of this course                        
                        </p>

                        <ul className='list-disc'>
                          <li>First Benefit</li>
                          <li>Second Benefit</li>
                          <li>Third Benefit</li>
                          <li>Fourth Benefit</li>
                          <li>Fifth Benefit</li>
                          <li>Sixth Benefit</li>
                        </ul>

                    </div>


                    <div>
                        <h1 className='text-2xl font-bold py-5'>Course Contents</h1>
                        <p className='text-xl text-justify pb-5'>What you will learn?</p>


                        
                        <ul className='list-disc'>
                          <li>First Topic</li>
                          <li>Second Topic</li>
                          <li>Third Topic</li>
                          <li>Fourth Topic</li>
                          <li>Fifth Topic</li>
                          <li>Sixth Topic</li>
                        </ul>



                    </div>

    

                  </div>

                  <div className='py-5'>

                    
                      <div className='px-[8%] py-[2%] rounded-3xl border-2 shadow-2xl'>


                        <h1 className='text-3xl font-bold py-5'>GOT A QUESTION? SEND AN ENQUIRY</h1>

                        <form className='py-[2%]' >


                          <div className='py-5'>
                            <h1 className='pb-4'>Name *</h1>
                            <Input label="Your Name" name="conname" className='rounded-3xl py-10 bg-gray-200' type='text' />
                          </div>


                          <div className='py-5'>
                            <h1 className='pb-4'>Email *</h1>
                            <Input label="Your Email" name="conmail" className='rounded-3xl py-10 bg-gray-200' type='email' />
                          </div>


                          <div className='py-5'>
                            <h1 className='pb-4'>Mobile Number *</h1>
                            <Input label="Phone Number" name="conphone" className='rounded-3xl py-10 bg-gray-200' type='number'  />
                          </div>

                          <div className='py-5'>
                            <h1 className='pb-4'>Alternate Number </h1>
                            <Input label="Phone Number" name="conphone" className='rounded-3xl py-10 bg-gray-200' type='number'  />
                          </div>


                          <div className='py-5'>
                            <h1 className='pb-4'>School/ College Name </h1>
                            <Input label="Your School/College" name="conscl" className='rounded-3xl py-10 bg-gray-200' type='text' />
                          </div>


                          <div className='py-5'>
                            <h1 className='pb-4'>Choose Course </h1>
                            <Input label="Course" name="consub" className='rounded-3xl py-10 bg-gray-200' type='text' />

                            <div className="gap-4">
                              <Checkbox color="blue" label="Course 1" defaultChecked />
                              <Checkbox color="red" label="Course 2" defaultChecked />
                              <Checkbox color="green" label="Course 3" defaultChecked />
                              <Checkbox color="amber" label="Course 4" defaultChecked />
                              <Checkbox color="teal" label="Course 5" defaultChecked />
                              <Checkbox color="indigo" label="Course 6" defaultChecked />
                              <Checkbox color="purple" label="Course 7" defaultChecked />
                              <Checkbox color="pink" label="Course 8" defaultChecked />
                            </div>
                          </div>


                          <div className='py-5'>
                            <h1 className='pb-4'>Message </h1>
                            <Textarea  label="Tell us about you" name="conmsg" className='rounded-3xl py-10 bg-gray-200' type='text'  ></Textarea>
                          </div>

                          <Button type='submit'>Submit</Button>


                        </form>

                    </div>


                  </div>

              </div>


            {/* Course Description End */}


        </div>
    
    
    
    </>
  )
}

export default CourseDetail
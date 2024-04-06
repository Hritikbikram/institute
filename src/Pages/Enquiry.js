import React from 'react';
import {Breadcrumbs, Button, Checkbox, Input, Textarea } from '@material-tailwind/react';
import { useCreatequeriesMutation } from '../Admin-Pages/AdminApi/CourseNameApi';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';


const Enquiry = () => {

  const [createEnquiryForms]=useCreatequeriesMutation()

    
  const formik = useFormik({
    initialValues: {
      conname : "",
      conmail : "",
      conphone : "",
      altconphone : "",
      conscl : "",
      consub : "",
      conmsg : "",
    },
    // validationSchema: registerSchema,

    onSubmit: async (values) => {
      try {



        const formData = new FormData();
        formData.append('conname', values?.conname);
        formData.append('conmail', values.conmail);
        formData.append('conphone', values.conphone);
        formData.append('altconphone', values.altconphone);
        formData.append('conscl', values.conscl);
        formData.append('consub', values.consub);
        formData.append('conmsg', values.conmsg);
        console.log(values);
     

        const result = await createEnquiryForms(formData).unwrap();
        formik.resetForm();
        // if ((result.status) === 'success') {
        //   toast.success(result.message);
        //   nav('/login');
        // } else {
        //   toast.error(result.message);
        // }
      } catch (e) {
        // toast.error(`${e}`);
      }
      
    }
  });
  

  return (
    <>


                      
<div className='quere'>


<div className=' py-[6%] pl-[12%]'>

  <h1 className='text-4xl text-white font-extrabold  pb-5'>Your Queries</h1>
  
  <div className='pt-[10%]'>  
  
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
        <NavLink href="#" className="font-bold">Queries</NavLink>
      </Breadcrumbs>

  </div>

</div>


</div>



    {/* Enquiry Form */}

    
    <div className='px-[10%] py-[5%]'>

        <div className='px-[25%]'>
        
            <div className='px-[8%] py-[2%] rounded-3xl border-2 shadow-2xl'>


                  <h1 className='text-3xl font-bold py-5'>GOT A QUESTION? SEND AN ENQUIRY</h1>

                  <form className='py-[2%]' onSubmit={formik.handleSubmit}>


                    <div className='py-5'>
                      <h1 className='pb-4'>Name *</h1>
                      <Input label="Your Name" name="conname" className='rounded-3xl py-10 bg-gray-200' type='text' onChange={formik.handleChange} value={formik.values.conname}  />
                    </div>


                    <div className='py-5'>
                      <h1 className='pb-4'>Email *</h1>
                      <Input label="Your Email" name="conmail" className='rounded-3xl py-10 bg-gray-200' type='email' onChange={formik.handleChange} value={formik.values.conmail}  />
                    </div>


                    <div className='py-5'>
                      <h1 className='pb-4'>Mobile Number *</h1>
                      <Input label="Phone Number" name="conphone" className='rounded-3xl py-10 bg-gray-200' type='number'   onChange={formik.handleChange} value={formik.values.conphone} />
                    </div>

                    <div className='py-5'>
                      <h1 className='pb-4'>Alternate Number </h1>
                      <Input label="Phone Number" name="altconphone" className='rounded-3xl py-10 bg-gray-200' type='number'  onChange={formik.handleChange} value={formik.values.altconphone}  />
                    </div>
              

                    <div className='py-5'>
                      <h1 className='pb-4'>School/ College Name </h1>
                      <Input label="Your School/College" name="conscl" className='rounded-3xl py-10 bg-gray-200' type='text' onChange={formik.handleChange} value={formik.values.conscl}  />
                    </div>


                    <div className='py-5'>
                      <h1 className='pb-4'>Choose Course </h1>
                      <Input label="Course" name="consub" className='rounded-3xl py-10 bg-gray-200' type='text' onChange={formik.handleChange} value={formik.values.consub}  />

                      {/* <div className="gap-4">
                        <Checkbox color="blue" label="Course 1" defaultChecked />
                        <Checkbox color="red" label="Course 2" defaultChecked />
                        <Checkbox color="green" label="Course 3" defaultChecked />
                        <Checkbox color="amber" label="Course 4" defaultChecked />
                        <Checkbox color="teal" label="Course 5" defaultChecked />
                        <Checkbox color="indigo" label="Course 6" defaultChecked />
                        <Checkbox color="purple" label="Course 7" defaultChecked />
                        <Checkbox color="pink" label="Course 8" defaultChecked />
                      </div> */}

 
                    </div>


                    <div className='py-5'>
                      <h1 className='pb-4'>Message </h1>
                      <Textarea  label="Tell us about you" name="conmsg" className='rounded-3xl py-10 bg-gray-200' type='text' onChange={formik.handleChange} value={formik.values.conmsg}   ></Textarea>
                    </div>

                    <Button type='submit'  className='mt-5'>Submit</Button>


                  </form>

            </div>

        </div>





    </div>


    {/* Enquiry Form End */}
    
    </>
  )
}

export default Enquiry
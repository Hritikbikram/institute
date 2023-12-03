import React from 'react';
import { Button, Checkbox, Input, Textarea } from '@material-tailwind/react';


const Enquiry = () => {
  return (
    <>

    {/* Enquiry Form */}

    
    <div className='px-[10%] py-[5%]'>

        <div className='px-[25%]'>
        
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


    {/* Enquiry Form End */}
    
    </>
  )
}

export default Enquiry
import { Button, Input, Radio } from '@material-tailwind/react'
import React from 'react'
import Header from './AdComponents/Header'
import {  useCreateUserMutation, useGetUserQuery } from './AdminApi/CourseNameApi';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import * as Yup from "yup";
import { toast } from 'react-toastify';


const Users = () => {


  const { data } = useGetUserQuery();
  console.log(data);

  const [createUserDetails]=useCreateUserMutation();
  // const [deleteUser]=useDelUserQuery();

  const registerSchema = Yup.object().shape({
    admname: Yup.string()
        .required("Required")
        .min(3, "Too Short !!!")
        .max(50, "Too long !!!"),
        admusername: Yup.string()
        .required("Required")
        .min(3, "Too Short !!!")
        .max(50, "Too long !!!"),
        admpassword: Yup.string()
        .required("Required")
        .min(3, "Too Short !!!")
        .max(50, "Too long !!!"),
      confirmPassword: Yup.mixed()
        .test(
          "Password not match",
          "Password Doesn't match",
          (value) => value && value === formik.values.admpassword
        )
        .required("Required"),
    });


  const formik=useFormik({

    initialValues:{
      admname:"",
      admusername:"",
      admpassword:"",
      confirmPassword: "",
      uspos:""

    },

    validationSchema: registerSchema,

    onSubmit:async(values,resetForm)=>{

      try {

        const formData = {
          admname:values.admname,
          admusername:values.admusername,
          admpassword:values.admpassword,
          uspos:values.uspos
          
        }


        // formData.append('admname', values?.admname);
        // formData.append('admusername', values.admusername);
        // formData.append('admpassword', values.admpassword);
        // formData.append('uspos', values.uspos);
       
        // console.log(values);


        const result = await createUserDetails(formData).unwrap();

        if(result.status === "success")
        {
          toast.success(result.message);
        }
        else
        {
          toast.error(result.message);
        }
        formik.resetForm();
        
      } catch (e) {
        toast.error(`${e}`);
      }


    }

  })


  return (
    <>

      <div className='grid grid-cols-6 bg-teal-50'>

          <div className='bg-red-200 h-full rounded-tr-xl px-[10%] py-4 pb-[50%]'>
            <Header />
          </div>


          <div className='bg-teal-50 col-span-5 p-[2%]'>
            
            <h1  className='text-4xl font-bold pb-5'>User Dashboard</h1>



            {/* Course State */}

            <div>

                <form className="mt-8 mb-2  max-w-screen-lg sm:w-96" onSubmit={formik.handleSubmit}>
                    <div className="mb-4 flex gap-6">
                      
                      <div>
                        <h1  className='text-xl font-bold pb-5 pt-[5%] '>Name</h1>

                          <Input type='text' size="lg" label="User" name="admname"  onChange={formik.handleChange} value={formik.values.admname}  />

                          {formik.errors.admname && formik.touched.admname && (<h2 className="pt-2"> {formik.errors.admname}</h2>)}{" "}



                      </div>
                      

                      <div>
                        <h1  className='text-xl font-bold pb-5 pt-[5%] '>Username</h1>

                          <Input type='text' size="lg" label="Username" name="admusername"
                          onChange={formik.handleChange} value={formik.values.admusername} />

                          {formik.errors.admusername && formik.touched.admusername && (
                            <h2 className="pt-2"> {formik.errors.admusername}</h2>
                          )}
                        
                      </div>

                      
                      {/* <div>
                        <h1  className='text-xl font-bold pb-5 pt-[5%] '>Password</h1>

                          <Input type='text' size="lg" label="Password" name="admpassword"
                          onChange={formik.handleChange} value={formik.values.admpassword} />
                      </div> */}


                      <div className="">

                      <h1  className='text-xl font-bold pb-5 pt-[5%] '>Password</h1>

                        <Input
                          required
                          type="password"
                          size="lg"
                          label="Password"
                          autoComplete="false"
                          color="green"
                          name="admpassword"
                          onChange={formik.handleChange}
                          value={formik.values.admpassword}
                        />{" "}
                        {formik.errors.admpassword && formik.touched.admpassword && (
                          <h2 className="pt-2"> {formik.errors.admpassword}</h2>
                        )}

                      </div>


                      <div className="">
                      <h1  className='text-xl font-bold pb-5 pt-[5%] '>Confirm Password</h1>

                        <Input
                          required
                          type="password"
                          size="lg"
                          label="Confirm Password"
                          color="green"
                          autoComplete="false"
                          name="confirmPassword"
                          onChange={formik.handleChange}
                          value={formik.values.confirmPassword}
                        />{" "}
                        {formik.errors.confirmPassword &&
                          formik.touched.confirmPassword && (
                            <h2 className="pt-2"> {formik.errors.confirmPassword}</h2>
                          )}
                      </div>



                      
                      <div>

                          <h1  className='text-xl font-bold pb-5 pt-[5%] '>User Role</h1>

                          <Radio color="red" label="Admin" name="uspos" value="admin"
                           onChange={formik.handleChange} checked={formik.values.uspos === 'admin'}
                          />


                          <Radio color="blue" label="User" name="uspos" value="user"  onChange={formik.handleChange} checked={formik.values.uspos === 'user'}/>



                      </div>


                      

                      
                    </div>

                    

                    <Button type='submit' className='mt-5'>Submit</Button>

                </form>


            </div>
            {/* Course State End     */}



            {/* Course State Table */}


                        
              <h1  className='text-4xl font-bold py-5'>Status Info </h1>



              <div className='pt-5'>
                    <table className="table-auto w-full">
                      <thead>
                        <tr>
                          <th className='text-xl'>S.No</th>
                          <th className='text-xl'>Name</th>
                          <th className='text-xl'>Username</th>
                          <th className='text-xl'>Password</th>
                          <th className='text-xl'>User Role</th>
                          <th className='text-xl'>Action</th>
                        </tr>
                      </thead>
                      <tbody>

                      {data && data.user.map((usernam)=>{

                        return (
                          <tr className='text-center' key={usernam?._id}>
                              <td className='text-lg p-2'> 1</td>
                              <td className='text-lg p-2'>
                                {usernam?.UserTitle}</td>
                              <td className='text-lg p-2'>
                                {usernam?.UserName}
                                </td>
                              <td className='text-lg p-2'>
                                {usernam?.UserPassword}</td>
                              <td className='text-lg p-2'>
                                {usernam?.UserRoles}
                                </td>
                              <td className='text-lg p-2'>
                                  

                                  <NavLink to={`/admin/users_update`}>

                                  <i className="fa-solid fa-pen-to-square p-4 text-blue-500 text-2xl hover:text-blue-800"></i>

                                  </NavLink>

                                  <NavLink >

                                   <i className="fa-solid fa-trash p-4 text-red-500 text-2xl hover:text-red-800"></i>

                                  </NavLink>
                            


                            </td>
                        </tr>)
                        

                          })}
                        
                        



                      </tbody>
                    </table>
              </div>



            {/* Course State Table end */}






          </div>


      </div>


    </>
  )
}

export default Users
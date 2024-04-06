import { baseurls } from "./BaseUrl";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const CourseApi= createApi({
  reducerPath: 'CourseApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseurls }),
  tagTypes: ["Course","Abouts"],
  endpoints: (builder) => ({

    //Courses Name (CURD OPERATION)
    getCourseByName: builder.query({
      query: (name) => `coursestates`,
      providesTags: ["Course"],

    }),

    //Create Course State
    createCourse: builder.mutation({
      query: (query) => ({
        url: "coursestates",
        method: "POST",
        
        body: query,

      }),
      invalidatesTags: ["Course"],
    }),


    

    //Enquiry
    //Fetch
    getEnquiryDetail: builder.query({
      query: (name) => `queries`,
      providesTags: ["queries"],

    }),


    
    //fetchbyid
    getqueriesbyId:builder.query({
      query:(id)=>({
        url:`queries/${id}`,
        method:'GET',             
      }),
      providesTags: ["queries"],
    }),


    //Createqueries
    createqueries: builder.mutation({
      query: (query) => ({
        url: "queries",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["queries"],
    }),





        //Contact
    //Fetch
    getContactDetail: builder.query({
      query: (name) => `contact`,
      providesTags: ["contacts"],

    }),


    

    //CreateContact
    createContact: builder.mutation({
      query: (query) => ({
        url: "contact",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["contacts"],
    }),





    




    //CourseDetails
    //Fetch
    getCourseDetail: builder.query({
      query: (name) => `coursedetail`,
      providesTags: ["Coursedetails"],

    }),

    //Create
    createCourseDetails: builder.mutation({
      query: (query) => ({
        url: "coursedetail",
        method: "POST",       
        body: query,

      }),
      invalidatesTags: ["Coursedetails"],
    }),

        //fetchbyid
        getCourseDetailsbyId:builder.query({
          query:(id)=>({
            url:`coursedetail/${id}`,
            method:'GET'        
          }),
          providesTags: ["Coursedetails"],
        }),

        
    //UpdateAbout
    updateCourseDetails: builder.mutation({
      query: (query) => ({
        url: `coursedetail/update/${query.id}`,
        method: "PUT",
        body: query.formData,
      }),
      invalidatesTags: ["Coursedetails"],
    }),

    







    //AboutPage
    
    //Fetch
    getAbout: builder.query({
      query: (name) => `about`,
      providesTags: ["Abouts"],

    }),

    //fetchbyid
    getAboutbyId:builder.query({
      query:(id)=>({
        url:`about/${id}`,
        method:'GET'        
      }),
      providesTags: ["Abouts"],
    }),


    //CreateAbout
    createAbout: builder.mutation({
      query: (query) => ({
        url: "about",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["Abouts"],
    }),

    //UpdateAbout
        updateAbout: builder.mutation({
          query: (query) => ({
            url: `about/update/${query.id}`,
            method: "PUT",
            body: query.formData,
          }),
          invalidatesTags: ["Abouts"],
        }),
    




    //SuccessStories

     //Fetch
     getSuccess: builder.query({
      query: (name) => `success`,
      providesTags: ["successes"],

    }),

    //fetchbyid
    getSuccessbyId:builder.query({
      query:(id)=>({
        url:`success/${id}`,
        method:'GET'        
      }),
      providesTags: ["successes"],
    }),

    //CreateSuccess
    createSuccess: builder.mutation({
      query: (query) => ({
        url: "success",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["successes"],
    }),

        //UpdateSuccess
        updateSuccess: builder.mutation({
          query: (query) => ({
            url: `success/update/${query.id}`,
            method: "PUT",
            body: query.formData,
          }),
          invalidatesTags: ["successes"],
        }),
    




     //Testimonials

     //Fetch
     getTestimonial: builder.query({
      query: (name) => `testimonial`,
      providesTags: ["testimonials"],

    }),

    //fetchbyid

    getTestimonialbyId:builder.query({
      query:(id)=>({
        url:`testimonial/${id}`,
        method:'GET'        
      }),
      providesTags: ["testimonials"],
    }),



    //CreateTestimonnial
    createTestimonial: builder.mutation({
      query: (query) => ({
        url: "testimonial",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["testimonials"],
    }),

        //UpdateTestimonials
        updateTestimo: builder.mutation({
          query: (query) => ({
            url: `testimonial/update/${query.id}`,
            method: "PUT",
            body: query.formData,
          }),
          invalidatesTags: ["testimonials"],
        }),








        

     //Admission

     //Fetch
     getAdmission: builder.query({
      query: (name) => `admission`,
      providesTags: ["admissions"],

    }),

    //fetchbyid

    getAdmissionbyId:builder.query({
      query:(id)=>({
        url:`admission/${id}`,
        method:'GET'        
      }),
      providesTags: ["admissions"],
    }),



    //CreateAdmission
    createAdmission: builder.mutation({
      query: (query) => ({
        url: "admission",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["admissions"],
    }),




    //Blogs


     //Fetch
     getBlog: builder.query({
      query: (name) => `blog`,
      providesTags: ["blogs"],

    }),

    //fetchbyid

    getBlogbyId:builder.query({
      query:(id)=>({
        url:`blog/${id}`,
        method:'GET'        
      }),
      providesTags: ["blogs"],
    }),



    //CreateClass
    createBlogs: builder.mutation({
      query: (query) => ({
        url: "blog",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["blogs"],
    }),

    updateBlogInfo: builder.mutation({
      query: (query) => ({
        url: `blog/update/${query.id}`,
        method: "PUT",
        body: query.formData,
      }),
      invalidatesTags: ["blogs"],
    }),


    //Classes
     //Fetch
     getClass: builder.query({
      query: (name) => `classcourse`,
      providesTags: ["classes"],

    }),

    //fetchbyid

    getClsssbyId:builder.query({
      query:(id)=>({
        url:`classcourse/${id}`,
        method:'GET'        
      }),
      providesTags: ["classes"],
    }),



    //CreateAdmission
    createClasses: builder.mutation({
      query: (query) => ({
        url: "classcourse",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["classes"],
    }),

    
    updateClassInfo: builder.mutation({
      query: (query) => ({
        url: `classcourse/update/${query.id}`,
        method: "PUT",
        body: query.formData,
      }),
      invalidatesTags: ["classes"],
    }),



    // UserApis

    //Fetch
    getUser: builder.query({
      query: (name) => `user`,
      providesTags: ["users"],

    }),

    //fetchbyid

    getUserbyId:builder.query({
      query:(id)=>({
        url:`user/${id}`,
        method:'GET'        
      }),
      providesTags: ["users"],
    }),



    //CreateUsers
    createUser: builder.mutation({
      query: (query) => ({
        url: "api/admin-register",
        method: "POST",    
        body: query,

      }),
      invalidatesTags: ["users"],
    }),

    
    // loginUser: builder.mutation({
    //   query: (query) => ({
    //     url: "api/login",
    //     method: "POST",
    //     body: query,
    //   }),
    //   invalidatesTags: ["users"],
    // }),

    //DeleteUsers  

    // delUser:builder.query({
    //   query:(id)=>({
    //     url:`user/${id}`,
    //     method:'DELETE'        
    //   }),
    //   providesTags: ["users"],
    // }),


    



  }),
})



export const {useGetCourseByNameQuery, useCreateCourseMutation, useCreateAboutMutation,useGetAboutQuery, useUpdateAboutMutation,useGetAboutbyIdQuery, useGetCourseDetailQuery, useGetCourseDetailsbyIdQuery,useCreateCourseDetailsMutation, useUpdateCourseDetailsMutation, useGetSuccessQuery,useGetSuccessbyIdQuery,useCreateSuccessMutation,useUpdateSuccessMutation, useGetTestimonialQuery, useGetTestimonialbyIdQuery, useCreateTestimonialMutation,useUpdateTestimoMutation, useGetEnquiryDetailQuery, useGetqueriesbyIdQuery, useCreatequeriesMutation,useGetContactDetailQuery, useCreateContactMutation, useGetAdmissionQuery, useGetAdmissionbyIdQuery, useCreateAdmissionMutation, useGetBlogQuery, useGetBlogbyIdQuery, useCreateBlogsMutation, useUpdateBlogInfoMutation, useGetClassQuery, useGetClsssbyIdQuery, useCreateClassesMutation, useUpdateClassInfoMutation, useGetUserQuery,useGetUserbyIdQuery, useCreateUserMutation}=CourseApi;
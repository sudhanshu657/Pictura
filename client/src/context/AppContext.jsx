// import axios from "axios";
// import { createContext,useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// export const AppContext = createContext()

// const AppContextProvider =(props) =>{
//  const [user, setUser] = useState(null);
//  const[showLogin, setShowLogin] = useState(false);
//  const[token, setToken] = useState(localStorage.getItem('token'))
//  const[credit, setCredit] = useState(false);




//  const backendUrl = import.meta.env.VITE_BACKEND_URL


// //  const loadCreditsData = async ()=>{

// //    try {
// //       const {data} = await axios.get(backendUrl + '/api/user/credits', {headers: {token}})
      
// //       if(data.sucess){
// //          setCredit(data.credits)
// //          setUser(data.user)
// //       }


// //    } catch (error) {
// //       console.log(error)
// //       toast.error(error.message)
// //    }
// //  }

//    const navigate = useNavigate()

//     const loadCreditsData = async () => {
//   try {
//     const { data } = await axios.get(backendUrl + '/api/user/credits', {
//       headers: {
//         Authorization: `Bearer ${token}`,  // ✅ Correct way
//       },
//     });

//     if (data.success) {
//       setCredit(data.credits);
//       setUser(data.user);
//     }
//   } catch (error) {
//     console.log(error);
//     toast.error(error.response?.data?.message || error.message);
//   }
// };
   

// //generate images 
// // const generateImage = async (prompt) =>{
// //       try {
// //         const {data}= await axios.post(backendUrl + '/api/image/generate-image', {prompt}, {headers: {token}})

// //         if(data.success){
// //          loadCreditsData()
// //          return data.resultImage
// //         } else{
// //              toast.error(data.message)
// //              loadCreditsData()
// //              if(data.creditBalance === 0){
// //                 navigate('/buy')
// //              }

// //         }
// //       } catch (error) {
// //          toast.error(error.message)
// //       }
// // }


//     const generateImage = async (prompt) => {
//   try {
//     const { data } = await axios.post(
//       backendUrl + '/api/image/generate-image',
//       { prompt },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`, // ✅ Proper token format
//         },
//       }
//     );

//     if (data.success) {
//       loadCreditsData();
//       return data.resultImage;
//     } else {
//       toast.error(data.message);
//       loadCreditsData();
//       if (data.creditBalance === 0) {
//         navigate('/buy');
//       }
//     }
//   } catch (error) {
//     toast.error(error.response?.data?.message || error.message);
//   }
// };

   
    
    
//     //logout
//     const logout =()=>{
//       localStorage.removeItem('token');
//       setToken('')
//       setUser(null)
//     }
    

//     useEffect(() => {
//   if (token) {
//     loadCreditsData();
//   }
// }, [token]);


//  const value = {
//     user , setUser,showLogin, setShowLogin, backendUrl, token, setToken, credit, setCredit, loadCreditsData, logout,generateImage
//  }

//  return (
//     <AppContext.Provider value={value}>
//         {props.children}

//     </AppContext.Provider>
//  )
// }

// export default AppContextProvider








//new 

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [credit, setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const navigate = useNavigate()

  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/credits', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // Existing generate image function
  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        backendUrl + '/api/image/generate-image',
        { prompt },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        loadCreditsData();
        return data.resultImage;
      } else {
        toast.error(data.message);
        loadCreditsData();
        if (data.creditBalance === 0) {
          navigate('/buy');
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // NEW: Remove text from image
  const removeTextFromImage = async (imageFile) => {
    try {
      const formData = new FormData();
      formData.append('image_file', imageFile);

      const { data } = await axios.post(
        backendUrl + '/api/image/remove-text',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (data.success) {
        loadCreditsData();
        return data.resultImage;
      } else {
        toast.error(data.message);
        loadCreditsData();
        if (data.creditBalance === 0) {
          navigate('/buy');
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // NEW: Remove background from image
  const removeBackgroundFromImage = async (imageFile, transparencyHandling = 'return_input_if_non_opaque') => {
    try {
      const formData = new FormData();
      formData.append('image_file', imageFile);
      formData.append('transparency_handling', transparencyHandling);

      const { data } = await axios.post(
        backendUrl + '/api/image/remove-background',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (data.success) {
        loadCreditsData();
        return data.resultImage;
      } else {
        toast.error(data.message);
        loadCreditsData();
        if (data.creditBalance === 0) {
          navigate('/buy');
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // NEW: Remove object from image
  const removeObjectFromImage = async (imageFile, maskFile, mode = 'fast') => {
    try {
      const formData = new FormData();
      formData.append('image_file', imageFile);
      formData.append('mask_file', maskFile);
      formData.append('mode', mode);

      const { data } = await axios.post(
        backendUrl + '/api/image/remove-object',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (data.success) {
        loadCreditsData();
        return data.resultImage;
      } else {
        toast.error(data.message);
        loadCreditsData();
        if (data.creditBalance === 0) {
          navigate('/buy');
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setToken('')
    setUser(null)
  }

  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage,
    removeTextFromImage,
    removeBackgroundFromImage,
    removeObjectFromImage
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
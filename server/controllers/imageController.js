// import axios from "axios"
// import userModel from "../models/userModel.js"
// import FormData from "form-data"




// export const generateImage = async (req, res) =>{

//   console.log("🔄 generateImage route hit");
//   console.log("📦 req.user:", req.user);
//   console.log("📦 req.body:", req.body);

//   const userId = req.user?.id;
//   const prompt = req.body?.prompt;

//   console.log("🟢 userId:", userId);
//   console.log("🟢 prompt:", prompt);

//   if (!userId || !prompt) {
//     return res.json({ success: false, message: "Missing Details" });
//   }


//     try {
//          const {userId, prompt} =req.body
//          const user = await userModel.findById(userId)

//          if( !user ||!prompt){
//             return res.json({ success: false, message: 'Missing Details'})
//          }

//          if(user.creditBalance === 0 || userModel.creditBalance < 0){
//             return res.json({ success: false, message: 'No Credit Balance ', creditBalance: user.creditBalance})
//          }

//            const formData = new FormData()
//            formData.append('prompt',prompt )

//           const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1',formData, {

//                       headers: {
//                            'x-api-key': process.env.CLIPDROP_API,
//                           },     
//                           responseType: 'arraybuffer'          
//            })

//            const base64Image =Buffer.from(data, 'binary').toString('base64')
//            const resultImage = `data:image/png;base64,${base64Image}`

//            await userModel.findByIdAndUpdate(user._id, {creditBalance: user.creditBalance -1})

//            res.json({success: true, message: "Image Generated", creditBalance: user.creditBalance -1, resultImage })




//     } catch (error) {
//         console.log(error.message)
//         res.json({ success: false, message: error.message})
//     }
// }






// import axios from 'axios';
// import FormData from 'form-data';
// import userModel from '../models/userModel.js';

// export const generateImage = async (req, res) => {
//   console.log('🔄 generateImage route hit');
//   console.log('📦 req.user:', req.user);
//   console.log('📦 req.body:', req.body);

//   const userId = req.user?.id;
//   const prompt = req.body?.prompt;

//   if (!userId || !prompt) {
//     return res.json({ success: false, message: 'Missing details' });
//   }

//   try {
//     const user = await userModel.findById(userId);
//     console.log('👤 user:', user);

//     if (!user) {
//       return res.json({ success: false, message: 'User not found' });
//     }
//     if (user.creditBalance <= 0) {
//       return res.json({
//         success: false,
//         message: 'No credit balance',
//         creditBalance: user.creditBalance,
//       });
//     }

//     // 🔗 call ClipDrop
//     const formData = new FormData();
//     formData.append('prompt', prompt);

//     const { data } = await axios.post(
//       'https://clipdrop-api.co/text-to-image/v1',
//       formData,
//       {
//         headers: {
//           ...formData.getHeaders(),         // required for multipart/*
//           'x-api-key': process.env.CLIPDROP_API,
//         },
//         responseType: 'arraybuffer',
//       }
//     );

//     const base64Image = Buffer.from(data, 'binary').toString('base64');
//     const resultImage = `data:image/png;base64,${base64Image}`;


//     // 💳 decrement credit & save
//     user.creditBalance -= 1;
//     await user.save();

//     res.json({
//       success: true,
//       message: 'Image generated',
//       creditBalance: user.creditBalance,
//       resultImage,
//     });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };








import axios from 'axios';
import FormData from 'form-data';
import userModel from '../models/userModel.js';

// Your existing generateImage function
export const generateImage = async (req, res) => {
  console.log('🔄 generateImage route hit');
  console.log('📦 req.user:', req.user);
  console.log('📦 req.body:', req.body);

  const userId = req.user?.id;
  const prompt = req.body?.prompt;

  if (!userId || !prompt) {
    return res.json({ success: false, message: 'Missing details' });
  }

  try {
    const user = await userModel.findById(userId);
    console.log('👤 user:', user);

    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }
    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: 'No credit balance',
        creditBalance: user.creditBalance,
      });
    }

    // 🔗 call ClipDrop
    const formData = new FormData();
    formData.append('prompt', prompt);

    const { data } = await axios.post(
      'https://clipdrop-api.co/text-to-image/v1',
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          'x-api-key': process.env.CLIPDROP_API,
        },
        responseType: 'arraybuffer',
      }
    );

    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`;

    // 💳 decrement credit & save
    user.creditBalance -= 1;
    await user.save();

    res.json({
      success: true,
      message: 'Image generated',
      creditBalance: user.creditBalance,
      resultImage,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// NEW: Remove text from image
export const removeText = async (req, res) => {
  console.log('🔄 removeText route hit');
  
  const userId = req.user?.id;
  const imageFile = req.file;

  if (!userId || !imageFile) {
    return res.json({ success: false, message: 'Missing image file or user details' });
  }

  try {
    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }
    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: 'No credit balance',
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData();
    formData.append('image_file', imageFile.buffer, {
      filename: imageFile.originalname,
      contentType: imageFile.mimetype,
    });

    const { data } = await axios.post(
      'https://clipdrop-api.co/remove-text/v1',
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          'x-api-key': process.env.CLIPDROP_API,
        },
        responseType: 'arraybuffer',
      }
    );

    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`;

    // 💳 decrement credit & save
    user.creditBalance -= 1;
    await user.save();

    res.json({
      success: true,
      message: 'Text removed successfully',
      creditBalance: user.creditBalance,
      resultImage,
    });
  } catch (error) {
    console.error('Remove text error:', error.response?.data || error.message);
    res.json({ success: false, message: error.response?.data?.error || error.message });
  }
};

// NEW: Remove background from image
export const removeBackground = async (req, res) => {
  console.log('🔄 removeBackground route hit');
  
  const userId = req.user?.id;
  const imageFile = req.file;

  if (!userId || !imageFile) {
    return res.json({ success: false, message: 'Missing image file or user details' });
  }

  try {
    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }
    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: 'No credit balance',
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData();
    formData.append('image_file', imageFile.buffer, {
      filename: imageFile.originalname,
      contentType: imageFile.mimetype,
    });

    // Optional transparency handling
    const transparencyHandling = req.body.transparency_handling || 'return_input_if_non_opaque';
    formData.append('transparency_handling', transparencyHandling);

    const { data } = await axios.post(
      'https://clipdrop-api.co/remove-background/v1',
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          'x-api-key': process.env.CLIPDROP_API,
        },
        responseType: 'arraybuffer',
      }
    );

    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`;

    // 💳 decrement credit & save
    user.creditBalance -= 1;
    await user.save();

    res.json({
      success: true,
      message: 'Background removed successfully',
      creditBalance: user.creditBalance,
      resultImage,
    });
  } catch (error) {
    console.error('Remove background error:', error.response?.data || error.message);
    res.json({ success: false, message: error.response?.data?.error || error.message });
  }
};

// NEW: Remove objects from image (cleanup)
export const removeObject = async (req, res) => {
  console.log('🔄 removeObject route hit');
  
  const userId = req.user?.id;
  const files = req.files;

  if (!userId || !files || !files.image_file || !files.mask_file) {
    return res.json({ 
      success: false, 
      message: 'Missing image file, mask file, or user details' 
    });
  }

  try {
    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }
    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: 'No credit balance',
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData();
    formData.append('image_file', files.image_file[0].buffer, {
      filename: files.image_file[0].originalname,
      contentType: files.image_file[0].mimetype,
    });
    formData.append('mask_file', files.mask_file[0].buffer, {
      filename: files.mask_file[0].originalname,
      contentType: files.mask_file[0].mimetype,
    });

    // Optional mode (fast or quality)
    const mode = req.body.mode || 'fast';
    formData.append('mode', mode);

    const { data } = await axios.post(
      'https://clipdrop-api.co/cleanup/v1',
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          'x-api-key': process.env.CLIPDROP_API,
        },
        responseType: 'arraybuffer',
      }
    );

    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`;

    // 💳 decrement credit & save
    user.creditBalance -= 1;
    await user.save();

    res.json({
      success: true,
      message: 'Object removed successfully',
      creditBalance: user.creditBalance,
      resultImage,
    });
  } catch (error) {
    console.error('Remove object error:', error.response?.data || error.message);
    res.json({ success: false, message: error.response?.data?.error || error.message });
  }
};
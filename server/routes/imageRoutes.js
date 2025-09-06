// import express from 'express'
// import { generateImage } from '../controllers/imageController.js'
// import userAuth from '../middlewares/auth.js'

// const imageRouter =express.Router()

// imageRouter.post('/generate-image', userAuth , generateImage)


// export default imageRouter





import express from 'express'
import multer from 'multer'
import { 
  generateImage, 
  removeText, 
  removeBackground, 
  removeObject
} from '../controllers/imageController.js'
import userAuth from '../middlewares/auth.js'

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const imageRouter = express.Router()

// Existing route
imageRouter.post('/generate-image', userAuth, generateImage)

// NEW: Text removal route
imageRouter.post('/remove-text', userAuth, upload.single('image_file'), removeText)

// NEW: Background removal route
imageRouter.post('/remove-background', userAuth, upload.single('image_file'), removeBackground)

// NEW: Object removal route (requires two files: image and mask)
imageRouter.post('/remove-object', userAuth, upload.fields([
  { name: 'image_file', maxCount: 1 },
  { name: 'mask_file', maxCount: 1 }
]), removeObject)

export default imageRouter
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const authCookieName = 'token';
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const { peerProxy } = require('./peerProxy.js');


const port = process.argv.length > 2 ? process.argv[2] : 3001
const uuid = require('uuid')
app.use(express.json())
app.use(cookieParser());
app.set('trust proxy', true);
let dummyItemList = [
    {
      itemName: 'Origami Swan',
      itemFullName: 'Master the Art of Origami - Detailed Instructions, High-Quality Paper, Ideal for Beginners and Experts Alike, Perfect for Creating Intricate Paper Creations, Gift Idea for Craft Lovers',
      itemImages: ['/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg'],
      itemPrice: 10,
      itemPromoCode: 'PROMOCODE',
      itemLink: 'link.link',
      itemDescription: 'This comprehensive origami book is designed to offer clear, step-by-step instructions, making it a versatile resource for both beginners and experienced paper folders. Its thoughtfully structured tutorials ensure a smooth learning curve, while the included high-quality, pre-cut paper allows for crisp and precise folds. Each project features detailed diagrams and tips, guiding you to create intricate and beautiful designs with ease. \n The book includes a wide range of models, from simple animals to complex geometric shapes, ensuring something for every skill level. The durable binding and quality pages withstand repeated use, while the eco-friendly materials ensure a sustainable crafting experience. Additionally, the book offers troubleshooting advice for common mistakes, helping users refine their technique for perfect results.',
      itemViews: 10
    },
    {
      itemName: 'Origami Swan',
      itemFullName: 'Master the Art of Origami - Detailed Instructions, High-Quality Paper, Ideal for Beginners and Experts Alike, Perfect for Creating Intricate Paper Creations, Gift Idea for Craft Lovers',
      itemImages: ['/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg'],
      itemPrice: 10,
      itemPromoCode: 'PROMOCODE',
      itemLink: 'link.link',
      itemDescription: 'This comprehensive origami book is designed to offer clear, step-by-step instructions, making it a versatile resource for both beginners and experienced paper folders. Its thoughtfully structured tutorials ensure a smooth learning curve, while the included high-quality, pre-cut paper allows for crisp and precise folds. Each project features detailed diagrams and tips, guiding you to create intricate and beautiful designs with ease. \n The book includes a wide range of models, from simple animals to complex geometric shapes, ensuring something for every skill level. The durable binding and quality pages withstand repeated use, while the eco-friendly materials ensure a sustainable crafting experience. Additionally, the book offers troubleshooting advice for common mistakes, helping users refine their technique for perfect results.',
      itemViews: 10
    },
    {
      itemName: 'Origami Swan',
      itemFullName: 'Master the Art of Origami - Detailed Instructions, High-Quality Paper, Ideal for Beginners and Experts Alike, Perfect for Creating Intricate Paper Creations, Gift Idea for Craft Lovers',
      itemImages: ['/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg'],
      itemPrice: 10,
      itemPromoCode: 'PROMOCODE',
      itemLink: 'link.link',
      itemDescription: 'This comprehensive origami book is designed to offer clear, step-by-step instructions, making it a versatile resource for both beginners and experienced paper folders. Its thoughtfully structured tutorials ensure a smooth learning curve, while the included high-quality, pre-cut paper allows for crisp and precise folds. Each project features detailed diagrams and tips, guiding you to create intricate and beautiful designs with ease. \n The book includes a wide range of models, from simple animals to complex geometric shapes, ensuring something for every skill level. The durable binding and quality pages withstand repeated use, while the eco-friendly materials ensure a sustainable crafting experience. Additionally, the book offers troubleshooting advice for common mistakes, helping users refine their technique for perfect results.',
      itemViews: 10
    },
    {
      itemName: 'Origami Swan',
      itemFullName: 'Master the Art of Origami - Detailed Instructions, High-Quality Paper, Ideal for Beginners and Experts Alike, Perfect for Creating Intricate Paper Creations, Gift Idea for Craft Lovers',
      itemImages: ['/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg'],
      itemPrice: 10,
      itemPromoCode: 'PROMOCODE',
      itemLink: 'link.link',
      itemDescription: 'This comprehensive origami book is designed to offer clear, step-by-step instructions, making it a versatile resource for both beginners and experienced paper folders. Its thoughtfully structured tutorials ensure a smooth learning curve, while the included high-quality, pre-cut paper allows for crisp and precise folds. Each project features detailed diagrams and tips, guiding you to create intricate and beautiful designs with ease. \n The book includes a wide range of models, from simple animals to complex geometric shapes, ensuring something for every skill level. The durable binding and quality pages withstand repeated use, while the eco-friendly materials ensure a sustainable crafting experience. Additionally, the book offers troubleshooting advice for common mistakes, helping users refine their technique for perfect results.',
      itemViews: 10
    },
    {
      itemName: 'Origami Swan',
      itemFullName: 'Master the Art of Origami - Detailed Instructions, High-Quality Paper, Ideal for Beginners and Experts Alike, Perfect for Creating Intricate Paper Creations, Gift Idea for Craft Lovers',
      itemImages: ['/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg'],
      itemPrice: 10,
      itemPromoCode: 'PROMOCODE',
      itemLink: 'link.link',
      itemDescription: 'This comprehensive origami book is designed to offer clear, step-by-step instructions, making it a versatile resource for both beginners and experienced paper folders. Its thoughtfully structured tutorials ensure a smooth learning curve, while the included high-quality, pre-cut paper allows for crisp and precise folds. Each project features detailed diagrams and tips, guiding you to create intricate and beautiful designs with ease. \n The book includes a wide range of models, from simple animals to complex geometric shapes, ensuring something for every skill level. The durable binding and quality pages withstand repeated use, while the eco-friendly materials ensure a sustainable crafting experience. Additionally, the book offers troubleshooting advice for common mistakes, helping users refine their technique for perfect results.',
      itemViews: 10
    },
  ]

const httpServer = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
peerProxy(httpServer, DB)
app.use(express.static('public'))
var apiRouter = express.Router()
app.use(`/api`, apiRouter)


apiRouter.post(`/auth/create`, async (req, res) => {
  try {
      if (await DB.getUser(req.body.email)) {
          return res.status(409).send({ msg: 'Existing user' });
      }
      // const response = await fetch(`https://api.usercheck.com/email/${req.body.email}?key=2n0aEAzowiX9QTLpjUACKWoHzBnagobp`);
      // const data = await response.json();

      // if (data['disposable']) {
      //     return res.status(406).send({ msg: 'Bad email' });
      // }
      const user = await DB.createUser(req.body.email, req.body.password);
      setAuthCookie(res, user.token)

      return res.send({ id: user._id });
  } catch (error) {
      console.error('Error during registration:', error);
      return res.status(500).send({ msg: 'Internal server error' });
  }
})

apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.email);
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user.token);
        res.send({ id: user._id });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
})

apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

apiRouter.get('/items', async (_req, res) => {
  const items = await DB.getItems()
  if (items){
    return res.send(items)
  } else {
    return res.send(dummyItemList)
  }
})

const secureApiRouter = express.Router()
apiRouter.use(secureApiRouter)
secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

const fs = require('fs');
const path = require('path');


secureApiRouter.post('/items', upload.array('itemImages'), async (req, res) => {
  const { itemName, itemFullName, itemPrice, itemPromoCode, itemLink, itemDescription, itemViews } = req.body;

        // Access uploaded files
        const files = req.files; // Multer adds `files` to the request
        const base64Images = files.map((file) => {
            return `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
        });

        // Construct the item data
        const item = {
            itemId: uuid.v4(),
            itemName,
            itemFullName,
            itemPrice: parseFloat(itemPrice),
            itemPromoCode,
            itemLink,
            itemDescription,
            itemViews: parseInt(itemViews),
            itemImages: base64Images, // Base64 encoded images
        };
  await DB.addItem(item);

  res.status(200).send({ msg: 'Item uploaded successfully', item: item });
})

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}


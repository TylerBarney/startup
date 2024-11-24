const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 3000
const uuid = require('uuid')
app.use(express.json())
app.use(cookieParser());
app.set('trust proxy', true);
let users = {}
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

let items = dummyItemList

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
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

apiRouter.delete('/auth/logout', (req, res) => {
    console.log(req.body)
    const user = Object.values(users).find((u) => u.token === req.body.token)
    if (user) {
        delete user.token
    }
    return res.status(204).end()
})

apiRouter.get('/items', (_req, res) => {
    return res.send(items)
})

const secureApiRouter = express.Router()
apiRouter.use(secureApiRouter)

apiRouter.post('/items', (req, res) => {
  const authToken = req.cookies[authCookieName]
  const user =   
  items.push(req.body)
    return res.send(items)
})

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}


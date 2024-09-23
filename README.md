# ShopDepot

## Specification Deliverable

### Elevator pitch

We all know the feeling of spending hours on a Saturday clicking through links, hunting down the best deals on the best items. Oftentimes, these great deals come in the form of promotion codes offered by influencers. The problem is, unless you're following these influencers on one of a million different social media platforms, you’ll never even know these promo codes exist! Well, not anymore. Thanks to ShopDepot, the whole process is streamlined. Influencers simply post items with promotions to ShopDepot, and consumers have a one stop shop to check out their offerings. It's like Amazon, but for great products and even better deals!

### Design
Mock Up of Home Screen

![Mock Main Page](res/MockMainPage.png)


Mock Up of Login

![Mock Login](res/MockLogin.png)


Mock Up of Adding Items

![Mock Add Item](res/MockAddItem.png)


Mock Up of Viewing Item Details

![Mock Item Details](res/MockItemDetails.png)

### Key features

- Login and logout over HTTPS
- Ability for authenticated users to add items
- All shop items are displayed in card views
- View, edit, or remove items you own
- Item info popups including description, pictures, links and promo codes
- Real time total clicks on item
- Navigation to listed affiliate links

### Technologies
- **HTML** - A single HTML page incorporating multiple HTML components for login, adding items, and viewing items.
- **CSS** - Consistent styling patterns throughout the application, with items displayed as Material Cards. Various other components such as login styled as pop ups.
- **React** - React handles login component, item display, adding items component, and routing.
- **Service** - RESTful APIs for:
  - Login
  - Retrieving all shop items from database
  - Adding items to database
  - Retrieving item details
- **DB/Login** - Ability to create accounts and log in users. Their credentials will be stored securely in the database. Users cannot add items unless they are authenticated. The database also stores shop items with associated information and the number of views.
- **WebSocket** - When a user clicks on an item, the number of views on the item will be incremented and broadcast to all other users in real time.

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- [ ] **HTML pages** - Multiple HTML pages that will eventually become components. This includes: login page, main store front, view item page and add item page.
- [ ] **Links** - Link in navigation bar which takes you to the GitHub repo. Clicking login on any of the pages directs you to the login page. Clicking on the example item on the main store front takes you to the example item page. An add item button will navigate to the add item page. Finally, clicking on the top logo takes you to the main store front.
- [ ] **Text** - The example item has text on both the main store front and in the item view page. Text used in the navigation bar and throughout the app to make the user experience easier.
- [ ] **Images** - Example item has images and the navigation bar has logo.
- [ ] **DB/Login** - Input boxes on login page with submit button or create account button. Creating item page also has input boxes for all the item details. Throughout the application, all input boxes that are required will be marked as required.
- [ ] **WebSocket** - A place holder text box is placed at the bottom of the example item card and in the example item page for when websockets eventually update view count on an item.

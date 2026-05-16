///////////// The project folder structure /////////////
<pre> ```
project-root/
├─ .angular/
├─ .vscode/
├─ dist/
├─ docs/
├─ node_modules/
│
├─ public/
│  └─ assets/
│     ├─ fonts/
│     │  └─ digital-7.ttf
│     ├─ images/
│     │  ├─ currentOffer/
│     │  ├─ FollowUs/
│     │  ├─ herosection/
│     │  ├─ nav/
│     │  ├─ NewArrivals/
│     │  ├─ outstanding-offer/
│     │  ├─ SubscribeToNews/
│     │  └─ UserAvatars/
│     │
│     ├─ Users.json
│     ├─ MonthlySalesData.json
│     └─ NewArrivalsData.json
│
├─ src/
│  ├─ app/
│  │  ├─Auth
│  │  │ ├─sign-in
│  │  │ └─sign-up
│  │  ├─ components/
│  │  │  ├─ current-offer/
│  │  │  ├─ follow-us/
│  │  │  ├─ hero-section/
│  │  │  ├─ nav-bar/
│  │  │  ├─ floating-box/
│  │  │  ├─ floatingComponents/
│  │  │  │  ├─ arrow-up-button/
│  │  │  │  └─ shop-button/
│  │  │  ├─ shop/
│  │  │  │  ├─ product-filter/
│  │  │  │  ├─ pagination/
│  │  │  │  ├─ product-content
│  │  │  │  ├─ product-info
│  │  │  │  ├─ product-layout-switcher
│  │  │  │  ├─ purchasing-products
│  │  │  │  └─ shoping-card
│  │  │  │
│  │  │  ├─ new-arrivals/
│  │  │  ├─ outstanding-offer/
│  │  │  ├─ User-Feedback/
│  │  │  ├─ Subscribe-To-News/
│  │  │  └─ Footer/
│  │  │
│  │  ├─ models/
│  │  │  ├─ MonthlySales.model.ts
│  │  │  ├─ CardItem.model.ts
│  │  │  ├─ ProductMainColor.model
│  │  │  ├─ product.model.ts
│  │  │  └─ User.model.ts
│  │  │ 
│  │  ├─ services/
│  │  │  ├─ shopping-card
│  │  │  ├─ cooldown-service.ts
│  │  │  ├─ product.ts
│  │  │  └─ User-service.ts
│  │  │
│  │  ├─ WebRouteLayouts
│  │  │  ├─ home/
│  │  │  ├─ productinfo/
│  │  │  ├─ shop/
│  │  │  ├─ productinfo/   
│  │  │  ├─ purchasingproducts/
│  │  │  ├─ signin
│  │  │  └─ signup
│  │  │
│  │  ├─ app.config.ts
│  │  ├─ app.css
│  │  ├─ app.html
│  │  ├─ app.routes.ts
│  │  ├─ app.spec.ts
│  │  └─ app.ts
│  │
│  ├─ index.html
│  ├─ main.ts
│  └─ styles.css
``` </pre>
//////////////////////////////Project description//////////////////////////// <br>
This application is a web implementation of a clothing store. The app contains all the essential functions that make it functional. But it is only implemented from the front-end side and also tries to simulate the data. The project is the first serious work of a beginner front-end developer. <br>
//////////////////////////////File contents////////////////////////////////// <br>
public/assets/
– static resources (images, fonts, JSON data)

src/app/components/
– visual units of the application (hero section, navigation, offers)

src/app/services/
– services responsible for data management

src/app/models/
– data structures used in the application (Product, MonthlySales)

src/app/WebRouteLayouts/
– This folder contains the different layouts of the application at the different links.

/////////////////////////Components and their functions///////////////////////// <br>
Components:
- NavBarComponent – ​​navigation bar.
- HeroSectionComponent – ​​main visual section.
- CurrentOfferComponent – ​​ CurrentOfferComponent – ​​display currentoffer broken down by month.
- NewArrivalsComponent – ​​list new products.
- OutstandingOffer -This component contains the latest product that the store starts selling.
- FollowUs - The user clearly states that the page also has an Instagram page.
- UserFeedback - User feedback can be seen in this section.
- SubscribeToNews - In this section, the user can subscribe to the newsletter by entering their email address.
- Footer - Standard footer.
- floating-box - This is a floating box that we place wherever we want.
- floatingComponents - This folder stores the small UI components that float around.
- shop - Contains smaller components related to the store, such as the filter-product component or Product-card component.  
  - pagination - At the bottom of the product list, only 9 products appear, if we click on 2, then 9 or less appear.
  - product-content - The products appear here after filtering.
  - product-filter - We can filter between products, the product data comes in here and from there it goes on to the product-content.
  - product-info - It contains the product description and can be added to the cart here.
  - product-layout-switcher - changes the display of products (not connected)
  - purchasing-products - To purchase the product, the user enters their details here.
  - shopping-card - The small card itself that appears in front of the user  <br>
/////////////////////////project execution/////////////////////////////////////// <br>
Run:
1. npm install
2. ng serve
3. http://localhost:4200
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
│     ├─ MonthlySalesData.json
│     └─ NewArrivalsData.json
│
├─ src/
│  ├─ app/
│  │  ├─ components/
│  │  │  ├─ current-offer/
│  │  │  ├─ follow-us/
│  │  │  ├─ hero-section/
│  │  │  ├─ nav-bar/
│  │  │  ├─ new-arrivals/
│  │  │  ├─ outstanding-offer/
│  │  │  ├─ User-Feedback/
│  │  │  ├─ Subscribe-To-News/
│  │  │  └─ Footer/
│  │  │
│  │  ├─ models/
│  │  │  ├─ MonthlySales.model.ts
│  │  │  └─ product.model.ts
│  │  │
│  │  ├─ services/
│  │  │  └─ product.ts
│  │  │
│  │  ├─ WebRouteLayouts
│  │  │  ├─ home/
│  │  │  ├─ shop/
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
//////////////////////////////Project description////////////////////////////
This application is a web implementation of a clothing store. The app contains all the essential functions that make it functional. But it is only implemented from the front-end side and also tries to simulate the data. The project is the first serious work of a beginner front-end developer.
//////////////////////////////File contents//////////////////////////////////
public/assets/
– static resources (images, fonts, JSON data)

src/app/components/
– visual units of the application (hero section, navigation, offers)

src/app/services/
– services responsible for data management

src/app/models/
– data structures used in the application (Product, MonthlySales)

/////////////////////////Components and their functions/////////////////////////
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
/////////////////////////project execution///////////////////////////////////////
Run:
1. npm install
2. ng serve
3. http://localhost:4200
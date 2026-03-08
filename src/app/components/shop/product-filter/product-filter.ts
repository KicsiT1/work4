import { Component , Output , EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp,faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from '../../../models/product.model';
import { ProductService } from '../../../services/product';
import { MAINCOLOR } from '../../../models/product.model';
import { SIZE } from '../../../models/product.model';
import { TAG } from '../../../models/product.model';
import { BRAND } from '../../../models/product.model';
import { COLLECTION } from '../../../models/product.model';

@Component({
  selector: 'app-product-filter',
  imports: [FontAwesomeModule],
  standalone: true,
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.scss',
})

export class ProductFilter {
  // The FilteredProducts() i pass getter to the parent shop component.
  @Output() filteredProductsChange = new EventEmitter<ProductModel[]>();
  // When I set something in the filter, I use sendFilteredData() to update 
  // the filter so that the data appears.
  sendFilteredData() 
  {
    this.filteredProductsChange.emit(this.FilteredProducts);
  }
  // I use these two icons for the dropdown sections
  faAngleUp:IconDefinition=faAngleUp;
  faAngleDown:IconDefinition=faAngleDown;
  // This is where I store the data I have already subscribed to.
  protected ProductItems:ProductModel[]=[];
  // The data that appears in the filter arrives here.
  protected ProductSizes:SIZE[]=Object.values(SIZE);
  protected ProductColors:MAINCOLOR[]=Object.values(MAINCOLOR);
  protected ProductPrices:string[]=["$0-$50","$50-$100","$100-$150","$150-$200","$300-$400"];
  protected ProductBrands:BRAND[]=Object.values(BRAND);
  protected ProductCollections:COLLECTION[]=Object.values(COLLECTION);
  protected ProductTags:TAG[]=Object.values(TAG);
  // Need the ProductService to subscribe to the data.
  constructor(private ProductService:ProductService){}
  ngOnInit()
  {
  // Subscription
   this.ProductService.GetNewArrivalsData().subscribe({
     next: (data) => 
       {
         this.ProductItems = data;
         //this.logFilteredProducts();
         this.sendFilteredData();
       },
     error: (err) =>
       {
         console.error('Error:', err)
       }
   });
  }

    protected BrandsDropDown:boolean=false;
    protected CollectionsDropDown:boolean=false;
    // Some menu items in the filter have drop-down menus, 
    // the function needs to be told which menu to open.
    toggleDropDown(DropDown:string)
    {
      switch (DropDown)
      {
        case "BrandsText":
          this.BrandsDropDown=!this.BrandsDropDown;
        break;

        case "CollectionsText":
          this.CollectionsDropDown=!this.CollectionsDropDown;
        break;

        default:
          console.warn("Unknown dropdown:", DropDown);
      }
    }
    // I'm getting the ProductSizesindex so I can know what the user clicked on.
    protected ProductSizesindex:number=-1;
    // This is where I store the value selected by the user.
    protected SelectedSizes:SIZE[]=[];
    // The function checks if the user has selected an option and 
    // if so, it is placed in the SelectedSizes array. 
    // If the user clicks on a value that is already in 
    // the array, then the element is removed from SelectedSizes array.
    // The TogleColor(), TogleBrand(), Toggle Collection(), TogleTag() also work with this logic.
    TogleSize(size:SIZE):void
    {
      this.ProductSizesindex=this.ProductSizes.indexOf(size);
      if(this.SelectedSizes.includes(size))
      {
        this.SelectedSizes = this.SelectedSizes.filter(s => s !== size);
      }
      else
      {
        this.SelectedSizes.push(size);
      }
      this.sendFilteredData(); 
      /*
      console.log('SelectedSizes:', this.SelectedSizes);
      console.log('FilteredProducts after size change:', this.FilteredProducts);
      */
    }

    protected ProductColorsIndex:number=-1;
    protected SelectedProductColors:MAINCOLOR[]=[];
    TogleColor(color:MAINCOLOR)
    {
      if(this.SelectedProductColors.includes(color))
      {
        this.SelectedProductColors = this.SelectedProductColors.filter(c => c !==color);
      }
      else
      {
        this.SelectedProductColors.push(color);
      }
      this.sendFilteredData();
      /*
      console.log('SelectedProductColors:', this.SelectedProductColors);
      console.log('FilteredProducts after color change:', this.FilteredProducts);
      */
   }

   protected ProductPriceIndex:number=-1;
   protected ProdPriceMin:number=0;
   protected ProdPriceMax:number=0;
   protected ProdPriceStrparts:string[]=[];
   ToglePrice(price:string)
   {
      this.ProductPriceIndex=this.ProductPrices.indexOf(price);
      this.ProdPriceStrparts=price.replace(/\$/g, "").split("-");
      this.ProdPriceMin=Number(this.ProdPriceStrparts[0]);
      this.ProdPriceMax=Number(this.ProdPriceStrparts[1]);
      this.sendFilteredData();
      /*
      console.log('SelectedProductPrice:', this.ProdPriceStrparts);
      console.log('FilteredProducts after price change:', this.FilteredProducts);
      */
   }

   protected ProductBrandsIndex:number=-1;
   protected SelectedProductBrands:BRAND[]=[];
   TogleBrand(brand:BRAND)
   {
    this.ProductBrandsIndex=this.ProductBrands.indexOf(brand);
    if(this.SelectedProductBrands.includes(brand))
    {
      this.SelectedProductBrands=this.SelectedProductBrands.filter(b=>b!==brand);
    }
    else
    {
      this.SelectedProductBrands.push(brand)
    }
      this.sendFilteredData();
      /*
      console.log('SelectedProductBrands:', this.SelectedProductBrands);
      console.log('FilteredProducts after brands change:', this.FilteredProducts);
      */
   }

  protected ProducCollectionsIndex:number=-1;
  protected SelectedProducCollection:COLLECTION[]=[];
  
  @Output() ProducCollectionIndex = new EventEmitter<number>();

  sendProducCollectionIndex() 
  {
    this.ProducCollectionIndex.emit(this.ProducCollectionsIndex);
  }

  TogleCollection(collection:COLLECTION)
  {
    this.ProducCollectionsIndex=this.ProductCollections.indexOf(collection);
    this.sendProducCollectionIndex(); 
    if(this.SelectedProducCollection.includes(collection))
    {
       this.SelectedProducCollection=this.SelectedProducCollection.filter(c=>c!==collection)
    }
    else
    {
      this.SelectedProducCollection.push(collection);
    }
     this.sendFilteredData();
     /*
     console.log('SelectedProducCollection:', this.SelectedProducCollection);
     console.log('FilteredProducts after collection change:', this.FilteredProducts);
     */
  }

  protected SelectedProductTags:TAG[]=[];
  TogleTag(tag:TAG)
  {
    if(this.SelectedProductTags.includes(tag))
    {
      this.SelectedProductTags=this.SelectedProductTags.filter(t=>t!==tag);
    }
    else
    {
       this.SelectedProductTags.push(tag);
    }
     this.sendFilteredData();
     /*
     console.log('SelectedProducTag:', this.SelectedProductTags);
     console.log('FilteredProducts after tag change:', this.FilteredProducts);
     */
  }
  //I pass this get function to the shop parent component
  get FilteredProducts():ProductModel[]
  {
    return this.ProductItems.filter(Item=>{

      const SuitableProdSize = this.SelectedSizes.length === 0 || 
      this.SelectedSizes.some(size => Item.Size?.includes(size));

      const SuitableProdColor = this.SelectedProductColors.length ===0 ||
      this.SelectedProductColors.every(color=>Item.MainColor?.includes(color));

      const SuitableProdPrice = this.ProdPriceMin===0||Item.Price>=this.ProdPriceMin && 
      Item.Price<=this.ProdPriceMax;
      
      const SuitableProdBradns = this.SelectedProductBrands.length ===0 ||
      this.SelectedProductBrands.every(brands=>Item.BrandName?.includes(brands));
      
      const SuitableProdCollection = this.SelectedProducCollection.length === 0 ||
      this.SelectedProducCollection.some(collections=>Item.Collection?.includes(collections));

      const SuitableProdTag = this.SelectedProductTags.length===0 ||
      this.SelectedProductTags.every(Tags=>Item.Tag?.includes(Tags));

      return SuitableProdSize       &&  SuitableProdColor   && 
             SuitableProdPrice      &&  SuitableProdBradns  && 
             SuitableProdCollection &&  SuitableProdTag;
      
    });  
  }
  /*
   logFilteredProducts() {
    console.log(this.FilteredProducts); 
  }
  */
}
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

interface ColorItem
{
  ColorName:MAINCOLOR;
  Hex:string;
}

@Component({
  selector: 'app-product-filter',
  imports: [FontAwesomeModule],
  standalone: true,
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.scss',
})
export class ProductFilter {
  @Output() filteredProductsChange = new EventEmitter<ProductModel[]>();

  sendFilteredData() 
  {
    this.filteredProductsChange.emit(this.FilteredProducts);
  }
    faAngleUp:IconDefinition=faAngleUp;
    faAngleDown:IconDefinition=faAngleDown;

    protected ProductItems:ProductModel[]=[];
    protected ProductSizes:SIZE[]=Object.values(SIZE);

    protected ProductColors:ColorItem[]=
    [
      {ColorName:MAINCOLOR.RedCoral,Hex:'#ff6c6c'},
      {ColorName:MAINCOLOR.Orange,Hex:'#ff7629'},
      {ColorName:MAINCOLOR.Yellow,Hex:'#fff06c'},
      {ColorName:MAINCOLOR.LimeGreen,Hex:'#9bff6c'},
      {ColorName:MAINCOLOR.GreenMint,Hex:'#6cff9e'},
      {ColorName:MAINCOLOR.Turquoise,Hex:"#6cffdc"},
      {ColorName:MAINCOLOR.SkyBlue,Hex:"#6cb9ff"},
      {ColorName:MAINCOLOR.CyanLightBlue,Hex:"#6cf6ff"},
      {ColorName:MAINCOLOR.Blue,Hex:"#6ca7ff"},
      {ColorName:MAINCOLOR.RoyalBlue,Hex:"#6c7bff"},
      {ColorName:MAINCOLOR.VioletPurple,Hex:"#8a6cff"},
      {ColorName:MAINCOLOR.LavenderPurple,Hex:"#b66cff"},
      {ColorName:MAINCOLOR.MagentaPink,Hex:"#fc6cff"},
      {ColorName:MAINCOLOR.RedSalmon,Hex:"#ff6c6c"},
    ]
    protected ProductPrices:string[]=["$0-$50","$50-$100","$100-$150","$150-$200","$300-$400"];
    protected ProductBrands:BRAND[]=Object.values(BRAND);
    protected ProductCollections:COLLECTION[]=Object.values(COLLECTION);
    protected ProductTags:TAG[]=Object.values(TAG);
    
    constructor(private ProductService:ProductService){}
    
    ngOnInit()
    {
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
          console.log("there is no such drop-down text box");
      }
    }

    protected ProductSizesindex:number=-1;
    protected SelectedSizes:SIZE[]=[];
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
      console.log('SelectedSizes:', this.SelectedSizes);
      console.log('FilteredProducts after size change:', this.FilteredProducts);
    }

    protected ProductColorsIndex:number=-1;
    protected SelectedProductColors:MAINCOLOR[]=[];
    protected ColorName:string='';
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
      console.log('SelectedProductColors:', this.SelectedProductColors);
      console.log('FilteredProducts after color change:', this.FilteredProducts);
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
      console.log('SelectedProductPrice:', this.ProdPriceStrparts);
      console.log('FilteredProducts after price change:', this.FilteredProducts);
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
      console.log('SelectedProductBrands:', this.SelectedProductBrands);
      console.log('FilteredProducts after brands change:', this.FilteredProducts);
   }

  protected ProducCollectionsIndex:number=0;
  protected SelectedProducCollection:COLLECTION[]=[];
  TogleCollection(collection:COLLECTION)
  {
    this.ProducCollectionsIndex=this.ProductCollections.indexOf(collection);
    if(this.SelectedProducCollection.includes(collection))
    {
       this.SelectedProducCollection=this.SelectedProducCollection.filter(c=>c!==collection)
    }
    else
    {
      this.SelectedProducCollection.push(collection);
    }
     this.sendFilteredData();
     console.log('SelectedProducCollection:', this.SelectedProducCollection);
     console.log('FilteredProducts after collection change:', this.FilteredProducts);
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
     console.log('SelectedProducTag:', this.SelectedProductTags);
     console.log('FilteredProducts after tag change:', this.FilteredProducts);
  }
  
  get FilteredProducts():ProductModel[]
  {
    return this.ProductItems.filter(Item=>{

      const SuitableProdSize= this.SelectedSizes.length === 0 || 
      this.SelectedSizes.some(size => Item.Size?.includes(size));

      const SuitableProdColor=this.SelectedProductColors.length ===0 ||
      this.SelectedProductColors.every(color=>Item.MainColor?.includes(color));

      const SuitableProdPrice=this.ProdPriceMin===0||Item.Price>=this.ProdPriceMin && 
      Item.Price<=this.ProdPriceMax;
      
      const SuitableProdBradns=this.SelectedProductBrands.length ===0 ||
      this.SelectedProductBrands.every(brands=>Item.BrandName?.includes(brands));
      
      const SuitableProdCollection=this.SelectedProducCollection.length === 0 ||
      this.SelectedProducCollection.some(collections=>Item.Collection?.includes(collections));

      const SuitableProdTag=this.SelectedProductTags.length===0 ||
      this.SelectedProductTags.every(Tags=>Item.Tag?.includes(Tags));

      return SuitableProdSize       &&  SuitableProdColor   && 
             SuitableProdPrice      &&  SuitableProdBradns  && 
             SuitableProdCollection &&  SuitableProdTag;
      
    });  
  }
  
   logFilteredProducts() {
    console.log(this.FilteredProducts); 
  }
}
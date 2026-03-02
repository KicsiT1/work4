import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp,faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from '../../../models/product.model';
import { ProductService } from '../../../services/product';

interface ColorItem
{
  ClassName:string;
  Hex:string;
}

@Component({
  selector: 'app-product-filter',
  imports: [FontAwesomeModule],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.scss',
})
export class ProductFilter {
    faAngleUp:IconDefinition=faAngleUp;
    faAngleDown:IconDefinition=faAngleDown;

    protected ProductItems:ProductModel[]=[];

    protected ProductSizes:string[]=["S","M","L","XL","XXL"];
    protected ProductColors:ColorItem[]=
    [
      {ClassName:"RedCoral",Hex:'#ff6c6c'},
      {ClassName:"Orange",Hex:'#ff7629'},
      {ClassName:"Yellow",Hex:'#fff06c'},
      {ClassName:"LimeGreen",Hex:'#9bff6c'},
      {ClassName:"GreenMint",Hex:'#6cff9e'},
      {ClassName:"Turquoise",Hex:"#6cffdc"},
      {ClassName:"SkyBlue",Hex:"#6cb9ff"},
      {ClassName:"CyanLightBlue",Hex:"#6cf6ff"},
      {ClassName:"Blue",Hex:"#6ca7ff"},
      {ClassName:"RoyalBlue",Hex:"#6c7bff"},
      {ClassName:"VioletPurple",Hex:"#8a6cff"},
      {ClassName:"LavenderPurple",Hex:"#b66cff"},
      {ClassName:"MagentaPink",Hex:"#fc6cff"},
      {ClassName:"RedSalmon",Hex:"#ff6c6c"},
    ]
    protected ProductPrices:string[]=["$0-$50","$50-$100","$100-$150","$150-$200","$300-$400"];
    protected ProductBrands:string[]=["Minimog","Retrolie","Brook","Learts","Vagabond","Abby"];
    protected ProductCollections:string[]=["All products","Best sellers","New arrivals","Accessories"];
    protected ProductTags:string[]=["Fashion","Hats","Sandal","Belt","Bags","Snacker","Denim","Minimog","Vagabond","Sunglasses","Beachwear"];
    
    constructor(private ProductService:ProductService){}
    
    ngOnInit()
    {
      this.ProductService.GetNewArrivalsData().subscribe({
        next: (data) => 
          {
            this.ProductItems = data;
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
    protected SelectedSizes:string[]=[];
    TogleSize(size:string):void
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
    }

    protected ProductColorsIndex:number=-1;
    protected SelectedProductColors:string[]=[];
    protected ColorName:string='';
    TogleColor(color:string)
    {
      if(this.SelectedProductColors.includes(color))
      {
        this.SelectedProductColors = this.SelectedProductColors.filter(c => c !==color);
      }
      else
      {
        this.SelectedProductColors.push(color);
      }
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
   }

   protected ProductBrandsIndex:number=-1;
   protected SelectedProductBrands:string[]=[];
   TogleBrand(brand:string)
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
   }

  protected ProducCollectionsIndex:number=0;
  protected ProducCollection:string='';
  TogleCollection(collection:string)
  {
    this.ProducCollectionsIndex=this.ProductCollections.indexOf(collection);
    this.ProducCollection=collection;
    console.log(this.ProducCollection);
  }

  protected SelectedProductTags:string[]=[];
  TogleTag(tag:string)
  {
    if(this.SelectedProductTags.includes(tag))
    {
      this.SelectedProductTags=this.SelectedProductTags.filter(t=>t!==tag);
    }
    else
    {
       this.SelectedProductTags.push(tag);
       console.log(this.SelectedProductTags);
    }
  }

  get FilteredProducts():ProductModel[]
  {
    return this.ProductItems.filter(Item=>{
      const SuitableProductSize=this.SelectedSizes.some(size => Item.Size.includes(size));
      return SuitableProductSize;
    });
  }
}

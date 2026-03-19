import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product';
import { ProductModel } from '../../../models/product.model';
import { faShareFromSquare, faCircleQuestion, faStar, faEye , faTruck, faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCcVisa, faCcMastercard, faCcAmex, faCcJcb, faCcDiscover, faCcDinersClub, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { Cooldown, CooldownService } from '../../../services/cooldown-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ShoppingCard } from '../../../services/shopping-card';

@Component({
  selector: 'app-product-info',
  imports: [FontAwesomeModule, AsyncPipe],
  templateUrl: './product-info.html',
  styleUrl: './product-info.scss',
})

export class ProductInfo {
  cooldown$!: Observable<Cooldown>;
  constructor(
    private CoolDownService: CooldownService, 
    private route: ActivatedRoute, 
    private ProductService: ProductService,
    protected ShoppingCard:ShoppingCard
   ) {}
   
  faStar: IconDefinition = faStar;
  faEye: IconDefinition = faEye;
  faCcVisa: IconDefinition = faCcVisa;
  faCcMastercard: IconDefinition = faCcMastercard;
  faCcAmex: IconDefinition = faCcAmex;
  faCcJcb: IconDefinition = faCcJcb;
  faCcDiscover: IconDefinition = faCcDiscover;
  faCcDinersClub: IconDefinition = faCcDinersClub;
  faCcPaypal: IconDefinition = faCcPaypal;
  faTruck: IconDefinition = faTruck;
  faSquare: IconDefinition = faSquare;
  faCircleQuestion: IconDefinition = faCircleQuestion;
  faShareFromSquare: IconDefinition = faShareFromSquare;

  protected Product: ProductModel | undefined;
  ngOnInit() 
  {

  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.ProductService.GetNewArrivalsData().subscribe(products => {
  this.Product = products.find(p => p.ID === id);
  //console.log(this.Product);
   if (this.ProddiscountUntil) {
      this.cooldown$ = this.CoolDownService.startCooldown(this.ProddiscountUntil);
    }
  });
  }
  
  pad(n: number): string 
  {
    return n.toString().padStart(2, '0');
  }

  get ProddiscountUntil(): string
  {
    return this.Product?.DiscountUntil ?? '';
  }

  get ProdInStock(): number
  {
    return this.Product?.InStock ?? 0;
  }

  get ProdSize()
  {
    return this.Product?.Size;
  }
  get Prodprice(): number 
  {
  return (this.Product?.Price ?? 0);
  }

  get ProdDiscount():number
  {
    return (this.Product?.Discount ?? 0);
  }

  get ActivePrice(): number 
  {
    return this.Prodprice * (1 - this.ProdDiscount);
  }

  get ProdDiscountProcent(): number
  {
    return this.ProdDiscount * 100;
  }

  protected ColorIndex:number = 0;
  ColorIndexChange(index: number): void 
  {
    this.ColorIndex = index;
  }
  protected Quantity:number=1;
  QuantityIncrease()
  {
    if(this.Quantity!==this.ProdInStock)
    {
      this.Quantity++;
    }
  }
  QuantityDecrease()
  {
    if(this.Quantity>0)
    {
      this.Quantity--;
    }
  }
  protected SizeNameIndex:number=0;
  SizeIndex(index: number): void 
  {
    this.SizeNameIndex = index;
  }
  
  protected ImgIndex:number=0;
  ImgIndexChange(index: number): void 
  {
    this.ImgIndex = index;
  }
}

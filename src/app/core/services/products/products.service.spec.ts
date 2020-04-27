import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/product.model';
import { environment } from 'src/environments/environment';

describe('ProductsService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test for getAllProducst', () => {

    // Invocation
    it('should return 2 products', () => {
      // arrange - Que espero
      const expectData: Product[] = [
        {
          id: '1',
          title: 'assas',
          price: 10,
          description: 'asdasdas',
          image: 'https://'
        },
        {
          id: '2',
          title: 'assas',
          price: 10,
          description: 'asdasdas',
          image: 'https://'
        }
      ];
      let dataError;
      let dataResponse;
      // act - Ejecutar prueba
      service.getAllProducts().subscribe(response => {
        dataResponse = response;
      }, error => {
        dataError = error;
      });
      const req = httpTestingController.expectOne(`${environment.url_api}/products`);
      req.flush(expectData);
      // assert - Validar
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });

  });
});

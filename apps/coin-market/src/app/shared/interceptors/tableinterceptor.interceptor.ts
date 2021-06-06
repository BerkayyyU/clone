import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class TableinterceptorInterceptor implements HttpInterceptor {
    dummyMarkets = [
        {
            imageUrl: 'assets/img/Binance.png',
            market_name: 'Binance',
            pairs: 'BTC/USD',
            price: 54462.22,
            volume: 4018305861,
            volume_percentage: 6.33,
            liquidity: 888,
        },
        {
            imageUrl: 'assets/img/Liquid.png',
            market_name: 'Liquid',
            pairs: 'BTC/JPY',
            price: 54479.17,
            volume: 210098239,
            volume_percentage: 0.33,
            liquidity: 419,
        },
        {
            imageUrl: 'assets/img/CoinbasePro.jpg',
            market_name: 'Coinbase Pro',
            pairs: 'BTC/USD',
            price: 54409.0,
            volume: 1295336827,
            volume_percentage: 2.04,
            liquidity: 735,
        },
        {
            imageUrl: 'assets/img/Kraken.jpg',
            market_name: 'bitFlyer',
            pairs: 'BTC/EUR',
            price: '54348.0',
            volume: 'abc',
            volume_percentage: 0.89,
            liquidity: 726,
        },
    ];

    constructor() {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (
            request.method === 'GET' &&
            request.url === 'assets/data/marketsData.json'
        ) {
            return of(
                new HttpResponse({ status: 200, body: this.dummyMarkets })
            );
        }

        next.handle(request);
    }
}

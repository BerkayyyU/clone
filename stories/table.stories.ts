import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from '../apps/coin-market/src/app/shared/table/table.component';
import { TableModule } from '../apps/coin-market/src/app/shared/table/table.module';
import { NgModule } from '@angular/core';
import { MarketsService } from '../apps/coin-market/src/app/shared/services/markets.service';
import { MarketsDataSource } from '../apps/coin-market/src/assets/data/market-datasource';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TableinterceptorInterceptor } from '../apps/coin-market/src/app/shared/interceptors/tableinterceptor.interceptor';

@NgModule({
    imports: [TableModule, BrowserAnimationsModule, HttpClientModule],
    exports: [TableComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TableinterceptorInterceptor,
            multi: true,
        },
    ],
})
class myModule {
    constructor(private marketService: MarketsService) {
        service = this.marketService;
    }
}
let service;
export default {
    component: TableComponent,
    decorators: [
        moduleMetadata({
            imports: [myModule],
        }),
    ],
    title: 'Table Component',
} as Meta;

const actionsData = {
    selectedEvent: action('selectedEvent'),
};

const Template: Story<TableComponent> = (args) => ({
    props: {
        ...args,
        selectedEvent: actionsData.selectedEvent,
    },
});

export const Default = Template.bind({});

Default.args = {
    dataSource: new MarketsDataSource(service),
};

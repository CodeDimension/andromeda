import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'an-datatable'
})
export class AnDatatable {

    // @Prop() colums: string[] = [];
    @Prop() rows: any[];

    render() {
        if (!this.rows) {
            return;
        }

        return (
            <div class="an-datatable">
                {
                    this.rows.map(row => (
                        <div class="an-datatable-row">
                            {
                                row.columns.map(column => (
                                    <div class="an-datatable-column">
                                        {column}
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}
(function ()
{
    $(document).ready(function ()
    {
        $('#leads_products_table').DataTable(
            {
                dom         : 'rtip',
                columnDefs  : [
                    {
                        // Target the id column
                        targets: 0,
                        width  : '72px'
                    },
                    {
                        // Target the actions column
                        targets           : 7,
                        responsivePriority: 1,
                        filterable        : false,
                        sortable          : false
                    }
                ],

              

                columnDefs  : [
                    {
                        // Target the id column
                        targets: 0,
                        width  : '72px'
                    },
                    {
                        // Target the image column
                        targets   : 1,
                        responsivePriority: 1
                    },

                    {
                        // Target the actions column
                        targets           : 7,
                        responsivePriority: 1,
                        filterable        : false,
                        sortable          : false
                    }
                ],
                initComplete: function ()
                {
                    var api = this.api(),
                        searchBox = $('#products-search-input');

                    // Bind an external input as a table wide search box
                    if ( searchBox.length > 0 )
                    {
                        searchBox.on('keyup', function (event)
                        {
                            api.search(event.target.value).draw();
                        });
                    }
                },
                lengthMenu  : [10, 20, 30, 50, 100],
                pageLength  : 20,
                scrollY     : 'auto',
                scrollX     : false,
                responsive  : true,
                autoWidth   : false
            }
        );

    });
})();
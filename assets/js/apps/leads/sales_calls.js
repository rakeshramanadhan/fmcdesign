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
                        targets: 1,
                        width  : '50px'
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
                autoWidth   : true,
                responsive: true
            }
        );

    });
})();
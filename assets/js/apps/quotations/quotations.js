(function ()
{
   

    $('.trigger-quotations-summary').on('click', function ()
    {
        changeView('#quotations-details-view', '.quotations-summary');
    });

    $('.trigger-single-quotation-details').on('click', function ()
    {
        changeView('#quotations-details-view', '.single-quotation-details');
    });

    $('.user-avatar-button').on('click', function ()
    {
        changeView('#group-page-left-sidebar-views', '#user-view');
    });
    $('.Group-settings-button').on('click', function ()
    {
        changeView('#group-page-left-sidebar-views', '#group-settings');
    });

    function changeView(wrapper, view)
    {
        var wrapper = $(wrapper);
        wrapper.find('.view').removeClass('d-none d-block');
        wrapper.find('.view').not(view).addClass('d-none');
        wrapper.find(view).addClass('d-block');
    }

})();
(function ()
{
   

    $('.contacts-button').on('click', function ()
    {
        changeView('#group-page-left-sidebar-views', '#contacts-view');
    });

    $('.back-to-group-pages-button').on('click', function ()
    {
        changeView('#group-page-left-sidebar-views', '#group-pages-view');
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
        wrapper.find('.view').removeClass('d-none d-flex');
        wrapper.find('.view').not(view).addClass('d-none');
        wrapper.find(view).addClass('d-flex');
    }

})();
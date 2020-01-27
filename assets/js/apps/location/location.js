(function ()
{
    $('.location-list .contact').on('click', function ()
    {
        changeView('#location-content-views', '#location-view');
    });

    $('#contacts-button').on('click', function ()
    {
        changeView('#location-content-views', '#location-view');
    });

    $('.back-to-locations-button').on('click', function ()
    {
        changeView('#location-left-sidebar-views', '#locations-view');
    });

    $('#user-avatar-button').on('click', function ()
    {
        changeView('#location-left-sidebar-views', '#user-view');
    });

    function changeView(wrapper, view)
    {
        var wrapper = $(wrapper);
        wrapper.find('.view').removeClass('d-none d-flex');
        wrapper.find('.view').not(view).addClass('d-none');
        wrapper.find(view).addClass('d-flex');
    }

})();
$(function () {
    $("[data-toggle = 'tooltip']").tooltip();
    $("[data-toggle = 'popover']").popover();
    $(".carousel").carousel({
        interval: 3000
    });

    $('#contacto').on('show.bs.modal', function (e) {
        $('#btnContact').removeClass('btn-outline-info');
        $('#btnContact').addClass('btn-danger');
        $('#btnContact').prop('disabled', true);
    });
    $('#contacto').on('hidden.bs.modal', function (e) {
        $('#btnContact').removeClass('btn-danger');
        $('#btnContact').addClass('btn-outline-info');
        $('#btnContact').prop('disabled', false);
    });
});
function naviFunctions() {
    return {
        'page1': page1,
        'page2': page2,
        'navierrorpage': naviErrorPage
    }
}

function page1() {
    $('#view').html('<h2>page1</h2><a href="#page2">To page 2</a>')
}

function page2() {
    $('#view').html('<h2>page2</h2><button name="toPage1">To page 1</button>')
    $('button[name=toPage1]').on('click', function(evt) { navigateTo('page1') })
}

function naviErrorPage() {
    $('#view').html('<h2>Navi error</h2>')
}

function navigateTo(page) {
    window.location.hash = page
}

function handleHashRoute(event) {
    hash = event.target.location.hash.substring(1)
    naviFunction = naviFunctions()[hash]
    if (naviFunction) {
        naviFunction()
    } else {
        navigateTo('navierrorpage')
    }
}

function showInitialView() {
    $('#view').html('<h2>page1</h2>')
}

$(function() {
    $(window).on('hashchange', handleHashRoute)
    page1()
})

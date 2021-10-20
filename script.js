
$(document).ready(function() {
    $('#Schedule table td.map').hover(
        function() { $(this).addClass('hovered') },
        function() { $(this).removeClass('hovered') });

    $('#Schedule table td.map').click(
        function() {
            $(this).toggleClass('selected');
            if(CheckUnselectedMapsCount() === 0) {
                $(this).removeClass('selected');
            }
            let TheMap = $('#Schedule table td.map').not('.selected');
            TheMap.removeClass('chosen');
            $(".ChoseSide").hide(300);
            $('#Ok').prop('disabled', true);    // set property disabled
            if (CheckUnselectedMapsCount() === 1) {
                TheMap.addClass('chosen');
                $(".ChoseSide").show(300);
                let Team2Side = $('#Team2Side').val()
                if (Team2Side === 'T' || Team2Side === 'Ct') {
                    $('#Ok').prop('disabled', false);   // remove property disabled
                }
                let TeamName2 = $('#team2').val();
                if (TeamName2 === '') TeamName2 = 2;
                $('#Caption').text('The map has been chosen. Team ' + TeamName2 + ' is picking side.');
                $('#Team2SidePicking').html('<strong>Team ' + TeamName2 + '<br> is playing for:</strong>');
                $('.T').click(
                    function() {
                        $(this).addClass('chosen');
                        $('.Ct').removeClass('chosen');
                    });
                $('.Ct').click(
                    function() {
                        $(this).addClass('chosen');
                        $('.T').removeClass('chosen');
                    });
            } else if (CheckUnselectedMapsCount() <= 5 && CheckUnselectedMapsCount() >= 3) {
                let TeamName2 = $('#team2').val();
                if (TeamName2 === '') TeamName2 = 2;
                $('#Caption').text('Team ' + TeamName2 + ' up to ban tree maps');
            } else if (CheckUnselectedMapsCount() >= 6) {
                let TeamName1 = $('#team1').val();
                if (TeamName1 === '') TeamName1 = 1;
                $('#Caption').text('Team ' + TeamName1 + ' up to ban two maps');
            } else if (CheckUnselectedMapsCount() === 2) {
                let TeamName1 = $('#team1').val();
                if (TeamName1 === '') TeamName1 = 1;
                $('#Caption').text('Team ' + TeamName1 + ' up to ban one map');
            }
        });

    // document.getElementById("Ok").addEventListener("mouseover", validate_choice);
    $(".ChoseSide").hide(300);

    $('#team1').change(function() {
        if (CheckUnselectedMapsCount() === $('#Schedule table td.map ').length) {
            let TeamName1 = $('#team1').val();
            $('#Caption').text('Team ' + TeamName1 + ' up to ban two maps');
        }
    });

});

function CheckUnselectedMapsCount() {
    let Maps_sel = $("#Schedule table td.selected").length;
    let Maps_num = $("#Schedule table td.map").length;
    return (Maps_num - Maps_sel);
}

function validate_choice() {
    if (CheckUnselectedMapsCount() === 1) {
        let TheMap = $('#Schedule table td.map').not('.selected');
        let MapSrc = TheMap.children('img').attr('src');
        $('#ChosenMap').val(MapSrc);
        let Team2Side = $('#Team2Side').val()
        if (Team2Side === 'T' || Team2Side === 'Ct') {
            $('#Ok').prop('disabled', false);   // remove property disabled
            return true;
        }
    }
    return false;
}

function setTeam2Side(Side) {
    $('#Team2Side').val(Side);
    if(Side ==='T') {
        $('.T').attr('style','background-color:green;');
        $('.Ct').attr('style','background-color:#dfecfe');
    }
    else if (Side ==='Ct') {
        $('.Ct').attr('style','background-color:green;');
        $('.T').attr('style','background-color:#dfecfe');
    }
    $('#Ok').prop('disabled', false);   // remove property disabled
}



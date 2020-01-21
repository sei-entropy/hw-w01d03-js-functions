const Playgame = function(userpicked) {

    let random = Math.random();
    if (random <= 0.33)
        computerpick = 'Rock'
    if (random > 0.33 && random <= 0.66)
        computerpick = 'Paper'
    if (random > 0.66)
        computerpick = 'Scissors'

    if (userpicked === computerpick)
        return 'Win';
    else
        return 'Lose'
}
'use strict';

var allImageMove = document.getElementsByClassName('all-images')[0],
    searchAllImages = document.getElementsByTagName('img'),
    lengthAllImages = searchAllImages.length,
    moveBlock = 0,
    valueButton = {
        'leftButton': (function () {
            moveBlock += 400;
            return moveBlock
        }),
        'rightButton': (function () {
            moveBlock -= 400;
            return moveBlock;
        })
    };

function carousel(type) {
    var posSlide = valueButton[type](),
        widthAllImages = 400 * lengthAllImages - 400;

    console.log(Number('-' + widthAllImages + 400));

    if (moveBlock > 0) {
        moveBlock = -1600;
    }
    if (moveBlock < '-' + widthAllImages) {
        moveBlock = 0;
    }
    allImageMove.style.left = moveBlock + 'px';
    console.log(moveBlock);
}
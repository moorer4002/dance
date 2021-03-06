controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = 60
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile`, function (sprite, location) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = 30
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = 130
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = 100
})
let projectile: Sprite = null
let mySprite: Sprite = null
info.setLife(3)
scene.setBackgroundImage(img`
    33333333333333333333333fffffffff6666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    333333333333333333333333fffffff666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    3333333333333333333333333fffff66666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    3333333333333333333333333ffff6666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    3333333333333333333333333fff666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    33333333333333333333333333f66666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    333333333333333333333333336666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    3333333333333333333333333366666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    3333333333333333333333333366666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999fffffffffffffffffff
    33333333333333333333333333666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999ffffffffffffffff
    333333333333333333333333336666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999ffffffffffffff
    333333333333333333333333336666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999fffffffffffff
    3333333333333333333333333366666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999ffffffffffff
    3333333333333333333333333366666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999ffffffffff
    3333333333333333333333333366666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999fffffffff
    33333333333333333333333333666666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999fffffffff
    33333333333333333333333336666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999ffffffff
    33333333333333333333333336666666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999fffffff
    333333333333333333333333366666666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999ffffff
    333333333333333333333333666666666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999ffffff
    333333333333333333333336666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999fffff
    333333333333333333333366666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999fffff
    333333333333333333333366666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffff3333333f99999999999999999999999999999999999999999fffff
    333333333333333333333666666666666666666666666666666666666666666666666666666666666ffffffffffffffffffffffff333333333999999999999999999999999999999999999999999ffff
    3333333333333333333f6666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffff3333333333399999999999999999999999999999999999999999ffff
    f33333333333333333ff6666666666666666666666666666666666666666666666666666666666666ffffffffffffffffffffff33333333333339999999999999999999999999999999999999999ffff
    ffff33333333333fffff6666666666666666666666666666666666666666666666666666666666666ffffffffffffffffffffff33333333333339999999999999999999999999999999999999999ffff
    ffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666ffffffffffffffffffffff33333333333339999999999999999999999999999999999999999ffff
    ffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666ffffffffffffffffffffff33333333333339999999999999999999999999999999999999999ffff
    ffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666ffffffffffffffffffffff33333333333339999999999999999999999999999999999999999ffff
    ffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffaaa33333333333339999999999999999999999999999999999999999ffff
    ffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666ffffffffffffffffaaaaaa3333333333333aa99999999999999999999999999999999999999ffff
    ffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666fffffffffffffaaaaaaaaaa33333333333aaaaaa99999999999999999999999999999999999ffff
    fffffffffffffffffffff66666666666666666666666666666666666666666666666666666666666fffffffffffffaaaaaaaaaaaa333333333aaaaaaaa9999999999999999999999999999999999ffff
    fffffffffffffffffffff66666666666666666666666666666666666666666666666666666666666fffffffffffaaaaaaaaaaaaaaa3333333aaaaaaaaaaa99999999999999999999999999999999ffff
    fffffffffffffffffffff66666666666666666666666666666666666666666666666666666666666fffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999999999ffff
    ffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666fffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999fffff
    ffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999999fffff
    ffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999fffff
    fffffffffffffffffffffff6666666666666666666666666666666666666666666666666666666fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999ffffff
    fffffffffffffffffffffff6666666666666666666666666666666666666666666666666666666ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999ffffff
    fffffffffffffffffffff11166666666666666666666666666666666666666666666666666666ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999fffffff
    ffffffffffffffffffff11111666666666666666666666666666666666666666666666666666fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999ffffffff
    fffffffffffffffffff111111666666666666666666666666666666666666666666666666666ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999fffffffff
    ffffffffffffffffff111111116666666666666666666666666666666666666666666666666fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999fffffffff
    fffffffffffffffff111111111166666666666666666666666666666666666666666666666fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999ffffffffff
    ffffffffffffffff111111111111666666666666666666666666666666666666666666666fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999ffffffffffff
    ffffffffffffffff11111111111116666666666666666666666666666666666666666666ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999fffffffffffff
    fffffffffffffff11111111111111166666666666666666666666666666666666666666fffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999ffffffffffffff
    fffffffffffffff1111111111111111666666666666666666666666666666666666666fffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999ffffffffffffffff
    fffffffffffffff111111111111111116666666666666666666666666666666666666ffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999fffffffffffffffffff
    fffffffffffffff1111111111111111111666666666666666666666666666666666ffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffff
    fffffffffffffff111111111111111111116666666666666666666666666666666ffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffff
    fffffffffffffff1111111111111111111111666666666666666666666666666999fffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffff
    fffffffffffffff111111111111111111111116666666666666666666666699999999fffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffff
    fffffffffffffff1111111111111111111111111119666666666666666999999999999ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffff
    fffffffffffffff1111111111111111111111111119999999999999999999999999999ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffff
    fffffffffffffff11111111111111111111111111199999999999999999999999999999fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffff
    fffffffffffffff111111111111111111111111111999999999999999999999999999999ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffff
    ffffffffffffffff111111111111111111111111199999999999999999999999999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffff
    ffffffffffffffff111111111111111111111111199999999999999999999999999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffff
    fffffffffffffffff111111111111111111111119999999999999999999999999999999999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffff
    ffffffffffffffffff11111111111111111111199999999999999999999999999999999999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffff
    fffffffffffffffffff1111111111111111111999999999999999999999999999999999999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffff
    ffffffffffffffffffff1111111111111111199999999999999999999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffff
    fffffffffffffffffffff111111111111111999999999999999999999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffff
    ffffffffffffffffffffff11111111111199999999999999999999999999999999999999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999fffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa6fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999ffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa66fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999fffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa666fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999fffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa6666fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999ffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa66666fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999ffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa666666fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999ffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa6666666fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff999999999999999999999999999999999fffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa666666666fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff999999999999999999999999999999999ffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa66666666666fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999fffffffffffffffffffffff66aaaaaaaaaaaaaaaaaaaaaaaaaaa666666666666fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff999999999999999999999999999fffffffffffffffffffffffff66666aaaaaaaaaaaaaaaaaaaaa666666666666666fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff9999999999999999999999999ffffffffffffffffffffffffff66666666aaaaaaaaaaaaaaa666666666666666666fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99999999999999999999999ffffffffffffffffffffffffffff666666666666666666666666666666666666666ffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999999999999999999ffffffffffffffffffffffffffffff666666666666666666666666666666666666666ffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9999999999999ffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666666666666666fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666666666fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
effects.bubbles.startScreenEffect()
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . f f . f . . . . . . . 
    . . . . . f . . f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(76, 113)
game.onUpdateInterval(randint(2000, 7000), function () {
    projectile = sprites.createProjectileFromSide(img`
        f f f f f f f f f f f f f f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 1 1 1 1 7 7 7 7 7 f 
        f 7 7 7 7 1 1 1 1 1 1 7 7 7 7 f 
        f 7 7 7 1 1 1 1 1 1 1 1 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f f f f f f f f f f f f f f f f 
        `, 0, 60)
    projectile.x = 60
})
game.onUpdateInterval(randint(500, 7000), function () {
    projectile = sprites.createProjectileFromSide(img`
        f f f f f f f f f f f f f f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 1 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 1 1 7 7 7 7 7 7 7 7 7 f 
        f 7 7 1 1 1 7 7 7 7 7 7 7 7 7 f 
        f 7 1 1 1 1 1 1 1 1 1 1 1 1 7 f 
        f 7 1 1 1 1 1 1 1 1 1 1 1 1 7 f 
        f 7 7 1 1 1 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 1 1 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 1 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f f f f f f f f f f f f f f f f 
        `, 0, 60)
    projectile.x = 30
})
game.onUpdateInterval(randint(500, 7000), function () {
    projectile = sprites.createProjectileFromSide(img`
        f f f f f f f f f f f f f f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 1 1 1 1 1 1 1 1 7 7 7 f 
        f 7 7 7 7 1 1 1 1 1 1 7 7 7 7 f 
        f 7 7 7 7 7 1 1 1 1 7 7 7 7 7 f 
        f 7 7 7 7 7 7 1 1 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f f f f f f f f f f f f f f f f 
        `, 0, 60)
    projectile.x = 100
})
game.onUpdateInterval(randint(500, 7000), function () {
    projectile = sprites.createProjectileFromSide(img`
        f f f f f f f f f f f f f f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 1 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 1 1 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 1 1 1 7 7 f 
        f 7 1 1 1 1 1 1 1 1 1 1 1 1 7 f 
        f 7 1 1 1 1 1 1 1 1 1 1 1 1 7 f 
        f 7 7 7 7 7 7 7 7 7 1 1 1 7 7 f 
        f 7 7 7 7 7 7 7 7 7 1 1 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 1 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f f f f f f f f f f f f f f f f 
        `, 0, 60)
    projectile.x = 130
})
